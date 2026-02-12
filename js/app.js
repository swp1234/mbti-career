// MBTI Career Test - Main Application Logic

class MBTICareerApp {
    constructor() {
        this.currentScreen = 'home';
        this.testMode = null; // 'quick' or 'direct'
        this.answers = {};
        this.currentQuestion = 0;
        this.mbtiResult = null;
        this.premiumUnlocked = false;

        try {
            this.init();
        } catch(e) {
            console.warn('App init error:', e);
        }
    }

    init() {
        this.setupEventListeners();
        this.setupLanguageToggle();
        this.setupThemeToggle();
        this.setupEngagementTracking();

        // Check for shared result in URL
        this.checkUrlResult();
    }

    setupEventListeners() {
        // Home screen buttons
        document.getElementById('quick-test-btn').addEventListener('click', () => this.startQuickTest());
        document.getElementById('direct-select-btn').addEventListener('click', () => this.startDirectSelect());

        // Test screen
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());

        // Select screen
        document.getElementById('select-back-btn').addEventListener('click', () => this.backToHome());

        // Results screen
        document.getElementById('close-results-btn').addEventListener('click', () => this.backToHome());
        document.getElementById('retry-btn').addEventListener('click', () => this.backToHome());
        document.getElementById('premium-btn').addEventListener('click', () => this.showPremiumModal());
        document.getElementById('share-image-btn').addEventListener('click', () => this.shareImage());
        document.getElementById('share-url-btn').addEventListener('click', () => this.shareUrl());

        // Modal
        document.getElementById('close-modal-btn').addEventListener('click', () => this.closePremiumModal());
        document.getElementById('watch-ad-btn').addEventListener('click', () => this.unlockPremium());
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
            themeToggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
            });
        }
    }

    setupLanguageToggle() {
        const langToggle = document.getElementById('lang-toggle');
        const langMenu = document.getElementById('lang-menu');
        const langOptions = document.querySelectorAll('.lang-option');

        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });

        langOptions.forEach(option => {
            option.addEventListener('click', async (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                await window.i18n.setLanguage(lang);
                langMenu.classList.add('hidden');

                // UI 재업데이트
                this.updateCurrentScreen();
            });
        });

        document.addEventListener('click', () => {
            if (!langMenu.classList.contains('hidden')) {
                langMenu.classList.add('hidden');
            }
        });
    }

    // 화면 전환
    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(`${screenName}-screen`).classList.add('active');
        this.currentScreen = screenName;
    }

    // 빠른 테스트 시작
    startQuickTest() {
        this.testMode = 'quick';
        this.answers = {};
        this.currentQuestion = 0;
        this.showScreen('test');
        this.renderQuestion();
    }

    // 직접 선택 시작
    startDirectSelect() {
        this.testMode = 'direct';
        this.showScreen('select');
        this.renderMBTIGrid();
    }

    // 테스트 질문 렌더링
    renderQuestion() {
        const question = TEST_QUESTIONS[this.currentQuestion];
        const testContent = document.getElementById('test-content');

        const questionHTML = `
            <div class="question">
                <h3 class="question-text">${window.i18n.t(question.text)}</h3>
                <div class="answer-options">
                    ${question.answers.map((answer, index) => `
                        <button class="answer-btn" data-index="${index}" data-value="${answer.value}">
                            ${window.i18n.t(answer.text)}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        testContent.innerHTML = questionHTML;

        // 이전 답변 복원
        const answered = this.answers[this.currentQuestion];
        if (answered !== undefined) {
            document.querySelectorAll('.answer-btn').forEach(btn => {
                if (btn.getAttribute('data-index') === answered.toString()) {
                    btn.classList.add('selected');
                }
            });
        }

        // 답변 선택 이벤트
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                this.answers[this.currentQuestion] = e.target.getAttribute('data-index');
            });
        });

        // 진행률 업데이트
        this.updateProgress();

        // 버튼 상태 업데이트
        document.getElementById('prev-btn').disabled = this.currentQuestion === 0;
        document.getElementById('next-btn').textContent = this.currentQuestion === TEST_QUESTIONS.length - 1
            ? window.i18n.t('button.finish')
            : window.i18n.t('button.next');
    }

    // 진행률 업데이트
    updateProgress() {
        const totalQuestions = TEST_QUESTIONS.length;
        const progress = ((this.currentQuestion + 1) / totalQuestions) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestion + 1}/${totalQuestions}`;
    }

    // 다음 질문
    nextQuestion() {
        if (this.answers[this.currentQuestion] === undefined) {
            alert(window.i18n.t('test.selectAnswer') || 'Please select an answer');
            return;
        }

        if (this.currentQuestion === TEST_QUESTIONS.length - 1) {
            // 테스트 완료
            this.completeTest();
        } else {
            this.currentQuestion++;
            this.renderQuestion();
        }
    }

    // 이전 질문
    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    }

    // 테스트 완료
    completeTest() {
        const mbti = this.calculateMBTI();
        this.displayResults(mbti);
    }

    // MBTI 계산
    calculateMBTI() {
        const scores = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

        TEST_QUESTIONS.forEach((question, index) => {
            const answerIndex = this.answers[index];
            const answer = question.answers[answerIndex];
            scores[answer.value]++;
        });

        const mbti = [
            scores.I >= scores.E ? 'I' : 'E',
            scores.S >= scores.N ? 'S' : 'N',
            scores.T >= scores.F ? 'T' : 'F',
            scores.J >= scores.P ? 'J' : 'P'
        ].join('');

        return mbti;
    }

    // MBTI 직접 선택
    renderMBTIGrid() {
        const grid = document.querySelector('.mbti-grid');
        const mbtiTypes = Object.keys(MBTI_DATA);

        grid.innerHTML = mbtiTypes.map(type => `
            <div class="mbti-option" data-mbti="${type}">
                <div class="mbti-icon-small">${MBTI_DATA[type].icon}</div>
                <div>${type}</div>
            </div>
        `).join('');

        document.querySelectorAll('.mbti-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const mbti = e.currentTarget.getAttribute('data-mbti');
                this.displayResults(mbti);
            });
        });
    }

    // 결과 표시
    displayResults(mbti) {
        this.mbtiResult = mbti;
        const data = MBTI_DATA[mbti];

        // MBTI 요약
        document.getElementById('mbti-name').textContent = mbti;
        document.getElementById('mbti-icon').textContent = data.icon;
        document.getElementById('mbti-description').textContent = window.i18n.t(`mbti.${mbti.toLowerCase()}`) || data.description;

        // 레이더 차트 그리기
        this.drawRadarChart(data.strengths, data.weaknesses);

        // 직업 추천
        this.renderCareers(data.careers);

        // 팀 호환성
        this.renderTeamCompatibility(data.compatibility);

        // 화면 전환
        this.showScreen('results');

        // GA4 이벤트
        if (window.gtag) {
            gtag('event', 'test_completed', {
                mbti_type: mbti,
                test_mode: this.testMode
            });
        }
    }

    // 레이더 차트 그리기
    drawRadarChart(strengths, weaknesses) {
        const svg = document.getElementById('radar-chart');
        const size = 200;
        const center = size / 2;
        const maxRadius = 70;

        svg.innerHTML = '';

        // 배경 원
        for (let i = 0; i < 5; i++) {
            const radius = (maxRadius / 5) * (i + 1);
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', center);
            circle.setAttribute('cy', center);
            circle.setAttribute('r', radius);
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', 'rgba(255, 255, 255, 0.1)');
            circle.setAttribute('stroke-width', '1');
            svg.appendChild(circle);
        }

        // 축 라벨
        const allItems = [...strengths, ...weaknesses];
        const angleSlice = (Math.PI * 2) / allItems.length;

        allItems.forEach((item, index) => {
            const angle = angleSlice * index - Math.PI / 2;
            const x = center + maxRadius * Math.cos(angle);
            const y = center + maxRadius * Math.sin(angle);

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', center);
            line.setAttribute('y1', center);
            line.setAttribute('x2', x);
            line.setAttribute('y2', y);
            line.setAttribute('stroke', 'rgba(255, 255, 255, 0.1)');
            line.setAttribute('stroke-width', '1');
            svg.appendChild(line);

            // 라벨
            const labelX = center + (maxRadius + 20) * Math.cos(angle);
            const labelY = center + (maxRadius + 20) * Math.sin(angle);
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', labelX);
            text.setAttribute('y', labelY);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('fill', 'rgba(255, 255, 255, 0.7)');
            text.setAttribute('font-size', '10');
            text.textContent = window.i18n.t(`strength.${item.label}`) || item.label;
            svg.appendChild(text);
        });

        // 강점 데이터 플롯
        const strengthPoints = strengths.map((item, index) => {
            const angle = angleSlice * index - Math.PI / 2;
            const radius = (item.score / 100) * maxRadius;
            return [
                center + radius * Math.cos(angle),
                center + radius * Math.sin(angle)
            ];
        });

        // 약점 데이터 플롯 (색상 다름)
        const weaknessPoints = weaknesses.map((item, index) => {
            const angle = angleSlice * (strengths.length + index) - Math.PI / 2;
            const radius = (item.score / 100) * maxRadius;
            return [
                center + radius * Math.cos(angle),
                center + radius * Math.sin(angle)
            ];
        });

        // 강점 다각형
        const strengthPath = strengthPoints.map((p, i) => (i === 0 ? 'M' : 'L') + p.join(',')).join('') + 'Z';
        const strengthPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        strengthPolygon.setAttribute('d', strengthPath);
        strengthPolygon.setAttribute('fill', 'rgba(52, 152, 219, 0.2)');
        strengthPolygon.setAttribute('stroke', '#3498db');
        strengthPolygon.setAttribute('stroke-width', '2');
        svg.appendChild(strengthPolygon);

        // 약점 다각형
        const weaknessPath = weaknessPoints.map((p, i) => (i === 0 ? 'M' : 'L') + p.join(',')).join('') + 'Z';
        const weaknessPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        weaknessPolygon.setAttribute('d', weaknessPath);
        weaknessPolygon.setAttribute('fill', 'rgba(231, 76, 60, 0.2)');
        weaknessPolygon.setAttribute('stroke', '#e74c3c');
        weaknessPolygon.setAttribute('stroke-width', '2');
        svg.appendChild(weaknessPolygon);
    }

    // 직업 추천 렌더링
    renderCareers(careers) {
        const list = document.getElementById('careers-list');
        list.innerHTML = careers.map(career => `
            <div class="career-card">
                <div class="career-rank">#${career.rank}</div>
                <div class="career-name">${career.name}</div>
                <div class="career-description">${career.description}</div>
                <div class="career-rating">
                    ${Array(career.rating).fill('★').join('')}${Array(5 - career.rating).fill('☆').join('')}
                </div>
            </div>
        `).join('');
    }

    // 팀 호환성 렌더링
    renderTeamCompatibility(compatibility) {
        const list = document.getElementById('team-list');
        list.innerHTML = compatibility.map(team => {
            const teamData = MBTI_DATA[team.type];
            return `
                <div class="team-card">
                    <div class="team-icon">${teamData.icon}</div>
                    <div class="team-type">${team.type}</div>
                    <div class="team-reason">${team.reason}</div>
                </div>
            `;
        }).join('');
    }

    // 프리미엄 모달 표시
    showPremiumModal() {
        document.getElementById('premium-modal').classList.remove('hidden');
        gtag('event', 'premium_modal_shown', { mbti_type: this.mbtiResult });
    }

    // 프리미엄 모달 닫기
    closePremiumModal() {
        document.getElementById('premium-modal').classList.add('hidden');
    }

    // 프리미엄 언락 (광고 시청 후)
    unlockPremium() {
        this.premiumUnlocked = true;
        document.getElementById('watch-ad-btn').style.display = 'none';

        // 프리미엄 콘텐츠 표시
        const analysis = PREMIUM_ANALYSIS[this.mbtiResult];
        document.getElementById('premium-career-text').textContent = analysis.careerPath;
        document.getElementById('premium-environment-text').textContent = analysis.environment;
        document.getElementById('premium-tips-text').textContent = analysis.tips;
        document.getElementById('premium-analysis').classList.remove('hidden');

        gtag('event', 'premium_unlocked', { mbti_type: this.mbtiResult });
    }

    // 결과 이미지 공유
    shareImage() {
        const mbti = this.mbtiResult;
        const data = MBTI_DATA[mbti];

        // Canvas 생성
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 1000;
        const ctx = canvas.getContext('2d');

        // 배경
        ctx.fillStyle = '#0f0f23';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 그라데이션
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(52, 152, 219, 0.2)');
        gradient.addColorStop(1, 'rgba(44, 62, 80, 0.2)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 제목
        ctx.font = 'bold 48px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(i18n.t('canvas.title'), 400, 100);

        // MBTI 타입
        ctx.font = 'bold 120px Arial';
        ctx.fillStyle = '#3498db';
        ctx.fillText(mbti, 400, 250);

        // 설명
        ctx.font = '32px Arial';
        ctx.fillStyle = '#b0b8c1';
        ctx.fillText(data.shortDesc, 400, 350);

        // 아이콘
        ctx.font = '80px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(data.icon, 400, 500);

        // 상위 3 직업
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        const topCareers = data.careers.slice(0, 3);
        topCareers.forEach((career, index) => {
            ctx.fillText(`${index + 1}. ${career.name}`, 100, 600 + (index * 80));
        });

        // URL 및 QR코드
        ctx.font = '20px Arial';
        ctx.fillStyle = '#b0b8c1';
        ctx.textAlign = 'center';
        ctx.fillText('dopabrain.com/mbti-career', 400, 950);

        // Canvas -> 이미지 다운로드
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `MBTI-${mbti}-Career-Test.png`;
        link.click();

        gtag('event', 'result_image_shared', { mbti_type: mbti });
    }

    // 결과 URL 공유
    shareUrl() {
        const mbti = this.mbtiResult;
        const data = MBTI_DATA[mbti];
        const text = `${i18n.t('share.text')}: ${mbti} - ${data.shortDesc} 🎯`;
        const url = `${window.location.origin}?result=${mbti}`;

        // Web Share API
        if (navigator.share) {
            navigator.share({
                title: 'MBTI 직업 궁합 테스트',
                text: text,
                url: url
            }).catch(err => console.log('Share failed:', err));
        } else {
            // Fallback: 클립보드 복사
            navigator.clipboard.writeText(`${text}\n${url}`);
            alert(window.i18n.t('results.linkCopied') || 'Link copied to clipboard!');
        }

        gtag('event', 'result_url_shared', { mbti_type: mbti });
    }

    // 홈으로 돌아가기
    backToHome() {
        this.showScreen('home');
        this.testMode = null;
        this.answers = {};
        this.currentQuestion = 0;
        this.mbtiResult = null;
        this.premiumUnlocked = false;
        document.getElementById('premium-analysis').classList.add('hidden');
        document.getElementById('watch-ad-btn').style.display = 'block';
        this.closePremiumModal();
    }

    // 동적 콘텐츠 업데이트 (언어 변경 시)
    updateDynamicContent() {
        if (this.currentScreen === 'test' && this.currentQuestion >= 0) {
            this.renderQuestion();
        } else if (this.currentScreen === 'select') {
            this.renderMBTIGrid();
        } else if (this.currentScreen === 'results' && this.mbtiResult) {
            const data = MBTI_DATA[this.mbtiResult];
            document.getElementById('mbti-description').textContent = window.i18n.t(`mbti.${this.mbtiResult.toLowerCase()}`) || data.description;
            this.renderCareers(data.careers);
            this.renderTeamCompatibility(data.compatibility);
        }
    }

    // Alias for i18n callback
    updateCurrentScreen() {
        this.updateDynamicContent();
    }

    // GA4 engagement tracking to reduce measured bounce rate
    setupEngagementTracking() {
        let scrollFired = false;
        let timerFired = false;

        // Fire engagement event on scroll (user actually interacted)
        window.addEventListener('scroll', () => {
            if (!scrollFired && window.scrollY > 100) {
                scrollFired = true;
                if (window.gtag) {
                    gtag('event', 'scroll_engagement', { engagement_type: 'scroll' });
                }
            }
        }, { passive: true });

        // Fire engagement event after 5s on page (not a bounce)
        setTimeout(() => {
            if (!timerFired) {
                timerFired = true;
                if (window.gtag) {
                    gtag('event', 'timer_engagement', { engagement_time_msec: 5000 });
                }
            }
        }, 5000);
    }

    // Check URL for shared result parameter
    checkUrlResult() {
        try {
            const params = new URLSearchParams(window.location.search);
            const result = params.get('result');
            if (result && MBTI_DATA[result.toUpperCase()]) {
                this.testMode = 'shared';
                this.displayResults(result.toUpperCase());
            }
        } catch(e) {
            // URL parsing error, ignore
        }
    }
}

// 앱 초기화
window.app = null;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new MBTICareerApp();
    });
} else {
    window.app = new MBTICareerApp();
}
