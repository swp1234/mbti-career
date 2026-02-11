// i18n.js - 다국어 지원 모듈 (12개 언어)
// 표준 i18n 클래스: 모든 앱에서 동일한 구조 사용

class I18n {
    constructor() {
        this.translations = {};
        this.supportedLanguages = ['ko', 'en', 'ja', 'zh', 'es', 'pt', 'id', 'tr', 'de', 'fr', 'hi', 'ru'];
        this.currentLang = this.detectLanguage();
    }

    // 브라우저 언어 감지 또는 localStorage 복원
    detectLanguage() {
        // localStorage에 저장된 언어 확인
        const savedLang = localStorage.getItem('mbtiCareerLang');
        if (savedLang && this.supportedLanguages.includes(savedLang)) {
            return savedLang;
        }

        // 브라우저 언어 확인
        const browserLang = navigator.language.split('-')[0];
        if (this.supportedLanguages.includes(browserLang)) {
            return browserLang;
        }

        // 기본값: 한국어
        return 'ko';
    }

    // 번역 파일 로드 (JSON)
    async loadTranslations(lang) {
        try {
            if (this.translations[lang]) {
                return this.translations[lang];
            }

            const response = await fetch(`js/locales/${lang}.json`);
            if (!response.ok) {
                console.error(`Failed to load language file: ${lang}`);
                return {};
            }

            this.translations[lang] = await response.json();
            return this.translations[lang];
        } catch (error) {
            console.error(`Error loading language file: ${lang}`, error);
            return {};
        }
    }

    // 번역 키로 텍스트 반환 (dot notation)
    t(key, defaultValue = '') {
        const keys = key.split('.');
        let value = this.translations[this.currentLang] || {};

        for (const k of keys) {
            value = value[k];
            if (value === undefined) {
                return defaultValue || key;
            }
        }

        return value || defaultValue || key;
    }

    // 언어 변경
    async setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            console.error(`Unsupported language: ${lang}`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('mbtiCareerLang', lang);

        // 번역 파일이 로드되지 않았다면 로드
        if (!this.translations[lang]) {
            await this.loadTranslations(lang);
        }

        // UI 업데이트
        this.updateUI();

        // GA4 이벤트
        if (window.gtag) {
            gtag('event', 'language_changed', {
                language: lang
            });
        }
    }

    // DOM의 data-i18n 속성 기반으로 UI 일괄 업데이트
    updateUI() {
        // 텍스트 콘텐츠 업데이트
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // 속성 업데이트 (title, placeholder 등)
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // 동적 콘텐츠 업데이트 트리거
        if (window.app && window.app.updateDynamicContent) {
            window.app.updateDynamicContent();
        }
    }

    // 현재 언어 반환
    getCurrentLanguage() {
        return this.currentLang;
    }

    // 언어명 반환 (출력용)
    getLanguageName(lang) {
        const names = {
            ko: '한국어',
            en: 'English',
            ja: '日本語',
            zh: '中文',
            es: 'Español',
            pt: 'Português',
            id: 'Bahasa Indonesia',
            tr: 'Türkçe',
            de: 'Deutsch',
            fr: 'Français',
            hi: 'हिन्दी',
            ru: 'Русский'
        };
        return names[lang] || lang;
    }

    // 모든 지원 언어 반환
    getSupportedLanguages() {
        return this.supportedLanguages;
    }
}

// 글로벌 i18n 인스턴스
window.i18n = new I18n();

// 초기화 함수
async function initI18n() {
    await window.i18n.loadTranslations(window.i18n.currentLang);
    window.i18n.updateUI();
}

// 페이지 로드 시 i18n 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        try { initI18n(); } catch(e) { console.warn('i18n init error:', e); }
    });
} else {
    try { initI18n(); } catch(e) { console.warn('i18n init error:', e); }
}
