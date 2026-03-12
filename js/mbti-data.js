// MBTI Career Test - MBTI Data & Career Matching
// 16가지 MBTI 유형별 특성과 추천 직업 데이터

const MBTI_DATA = {
    ISTJ: {
        name: 'ISTJ',
        icon: '🛡️',
        description: 'The Logistician - 논리적이고 체계적인 조직가',
        shortDesc: '책임감 있고 신뢰할 수 있는 리더',
        strengths: [
            { labelKey: 'responsibility', label: 'Responsibility', score: 95 },
            { labelKey: 'systematic', label: 'Systematic', score: 90 },
            { labelKey: 'reliability', label: 'Reliability', score: 95 },
            { labelKey: 'analysis', label: 'Analysis', score: 85 },
            { labelKey: 'execution', label: 'Execution', score: 90 }
        ],
        weaknesses: [
            { labelKey: 'flexibility', label: 'Flexibility', score: 40 },
            { labelKey: 'creativity', label: 'Creativity', score: 45 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 35 },
            { labelKey: 'spontaneity', label: 'Spontaneity', score: 30 },
            { labelKey: 'adaptability', label: 'Adaptability', score: 45 }
        ],
        careers: [
            { rank: 1, name: 'Accountant', category: 'Finance', description: 'Financial records관리 및 감사', rating: 5 },
            { rank: 2, name: 'Project Manager', category: 'Management', description: 'Project 계획 및 실행', rating: 5 },
            { rank: 3, name: 'Systems Administrator', category: 'IT', description: 'IT 시스템 관리 및 운영', rating: 4 },
            { rank: 4, name: 'Auditor', category: 'Finance', description: '재무 감시 및 규정 준수', rating: 5 },
            { rank: 5, name: 'Database Administrator', category: 'IT', description: 'Database 설계 및 관리', rating: 4 },
            { rank: 6, name: 'Lawyer', category: 'Law', description: '법률 자문 및 소송 담당', rating: 4 },
            { rank: 7, name: 'Military Officer', category: 'Military', description: '군대 지휘 및 조직 관리', rating: 4 },
            { rank: 8, name: 'Management Consultant', category: 'Consulting', description: '조직 효율성 컨설팅', rating: 4 },
            { rank: 9, name: 'Insurance Agent', category: 'Finance', description: '보험 상담 및 영업', rating: 3 },
            { rank: 10, name: 'Quality Assurance Manager', category: 'Manufacturing', description: '품질 관리 및 감시', rating: 4 }
        ],
        compatibility: [
            { type: 'ESTJ', reason: '같은 가치관과 목표 지향' },
            { type: 'ISFJ', reason: '상호 보완적인 강점' },
            { type: 'ESFJ', reason: '신뢰 기반의 협력' }
        ]
    },
    ISFJ: {
        name: 'ISFJ',
        icon: '💚',
        description: 'The Defender - 헌신적이고 책임감 있는 보호자',
        shortDesc: '따뜻하고 신뢰할 수 있는 지원자',
        strengths: [
            { labelKey: 'empathy', label: 'Empathy', score: 95 },
            { labelKey: 'responsibility', label: 'Responsibility', score: 90 },
            { labelKey: 'reliability', label: 'Reliability', score: 95 },
            { labelKey: 'attentiveness', label: 'Attentiveness', score: 90 },
            { labelKey: 'dedication', label: 'Dedication', score: 95 }
        ],
        weaknesses: [
            { labelKey: 'assertiveness', label: 'Assertiveness', score: 35 },
            { labelKey: 'adaptability', label: 'Adaptability', score: 45 },
            { labelKey: 'creativity', label: 'Creativity', score: 50 },
            { labelKey: 'criticalThinking', label: 'Critical Thinking', score: 45 },
            { labelKey: 'riskTaking', label: 'Risk-taking', score: 40 }
        ],
        careers: [
            { rank: 1, name: 'Nurse', category: 'Healthcare', description: '환자 돌봄 및 의료 지원', rating: 5 },
            { rank: 2, name: 'Teacher', category: 'Education', description: '학생 교육 및 멘토링', rating: 5 },
            { rank: 3, name: 'Human Resources Manager', category: 'HR', description: '직원 복지 및 개발', rating: 4 },
            { rank: 4, name: 'Social Worker', category: 'Social', description: '사회 취약층 지원', rating: 5 },
            { rank: 5, name: 'Counselor', category: 'Psychology', description: '심리 상담 및 지원', rating: 4 },
            { rank: 6, name: 'Administrative Assistant', category: 'Administration', description: '행정 지원 및 조직화', rating: 4 },
            { rank: 7, name: 'Librarian', category: 'Education', description: '도서관 관리 및 정보 제공', rating: 4 },
            { rank: 8, name: 'Healthcare Coordinator', category: 'Healthcare', description: '의료 코디네이션 및 지원', rating: 4 },
            { rank: 9, name: 'Customer Service Manager', category: 'Service', description: '고객 관계 관리', rating: 3 },
            { rank: 10, name: 'Event Planner', category: 'Event', description: '행사 기획 및 조직', rating: 3 }
        ],
        compatibility: [
            { type: 'ISTJ', reason: '상호 보완적인 강점' },
            { type: 'ESFJ', reason: '공감과 배려의 공통가치' },
            { type: 'INFP', reason: '인간관계 중심의 협력' }
        ]
    },
    INFJ: {
        name: 'INFJ',
        icon: '✨',
        description: 'The Advocate - 통찰력 있는 이상주의자',
        shortDesc: '비전을 가진 영감의 리더',
        strengths: [
            { labelKey: 'insight', label: 'Insight', score: 95 },
            { labelKey: 'empathy', label: 'Empathy', score: 90 },
            { labelKey: 'creativity', label: 'Creativity', score: 85 },
            { labelKey: 'dedication', label: 'Dedication', score: 90 },
            { labelKey: 'leadership', label: 'Leadership', score: 85 }
        ],
        weaknesses: [
            { labelKey: 'practicality', label: 'Practicality', score: 45 },
            { labelKey: 'confrontation', label: 'Confrontation', score: 40 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 50 },
            { labelKey: 'proactiveness', label: 'Proactiveness', score: 55 },
            { labelKey: 'stressManagement', label: 'Stress Management', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'Psychologist', category: 'Psychology', description: '심리 분석 및 치료', rating: 5 },
            { rank: 2, name: 'Counselor', category: 'Psychology', description: '정서 지원 및 상담', rating: 5 },
            { rank: 3, name: 'Mentor', category: 'Education', description: '개인 성장 지원 및 안내', rating: 4 },
            { rank: 4, name: 'Writer', category: 'Creative', description: '창작 및 표현', rating: 4 },
            { rank: 5, name: 'Nonprofit Director', category: 'Social', description: '사회 운동 주도', rating: 4 },
            { rank: 6, name: 'Coach', category: 'Development', description: '전문가 코칭 및 훈련', rating: 4 },
            { rank: 7, name: 'Teacher', category: 'Education', description: '학생 영감 및 교육', rating: 4 },
            { rank: 8, name: 'Artist', category: 'Creative', description: '예술 창작 및 표현', rating: 3 },
            { rank: 9, name: 'Marketing Manager', category: 'Marketing', description: 'Brand story와 비전 전달', rating: 3 },
            { rank: 10, name: 'Product Manager', category: 'Product', description: '사용자 중심 제품 개발', rating: 3 }
        ],
        compatibility: [
            { type: 'ENFP', reason: '영감과 이상의 공유' },
            { type: 'INFP', reason: '깊은 감정 공감' },
            { type: 'ENFJ', reason: '리더십 시너지' }
        ]
    },
    INTJ: {
        name: 'INTJ',
        icon: '🧠',
        description: 'The Architect - 전략적이고 창의로운 설계자',
        shortDesc: '비전을 실현하는 전략가',
        strengths: [
            { labelKey: 'strategy', label: 'Strategy', score: 95 },
            { labelKey: 'creativity', label: 'Creativity', score: 90 },
            { labelKey: 'analysis', label: 'Analysis', score: 95 },
            { labelKey: 'independence', label: 'Independence', score: 90 },
            { labelKey: 'longTermVision', label: 'Long-term Vision', score: 95 }
        ],
        weaknesses: [
            { labelKey: 'relationships', label: 'Relationships', score: 40 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 35 },
            { labelKey: 'practicality', label: 'Practicality', score: 50 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 40 },
            { labelKey: 'shortTermExecution', label: 'Short-term Execution', score: 45 }
        ],
        careers: [
            { rank: 1, name: 'Architect', category: 'Design', description: '건축물 설계 및 구현', rating: 5 },
            { rank: 2, name: 'Software Architect', category: 'IT', description: '시스템 아키텍처 설계', rating: 5 },
            { rank: 3, name: 'Strategic Planner', category: 'Management', description: '장기 전략 수립', rating: 5 },
            { rank: 4, name: 'Engineer', category: 'Engineering', description: '기술 문제 해결 및 설계', rating: 5 },
            { rank: 5, name: 'Scientist', category: 'Science', description: '과학 연구 및 발견', rating: 4 },
            { rank: 6, name: 'CEO', category: 'Management', description: '조직 비전 리더십', rating: 4 },
            { rank: 7, name: 'Management Consultant', category: 'Consulting', description: '기업 전략 컨설팅', rating: 4 },
            { rank: 8, name: 'Product Strategy Manager', category: 'Product', description: '제품 로드맵 수립', rating: 4 },
            { rank: 9, name: 'Financial Analyst', category: 'Finance', description: '재무 분석 및 예측', rating: 3 },
            { rank: 10, name: 'Computer Scientist', category: 'IT', description: 'IT 혁신 연구', rating: 4 }
        ],
        compatibility: [
            { type: 'ENTJ', reason: '전략적 시너지' },
            { type: 'INTP', reason: '지적 깊이의 공유' },
            { type: 'ENFP', reason: '창의성의 상호 자극' }
        ]
    },
    ISTP: {
        name: 'ISTP',
        icon: '🔧',
        description: 'The Virtuoso - 실용적이고 유연한 문제해결사',
        shortDesc: '손으로 만드는 실용가',
        strengths: [
            { labelKey: 'practicalSkills', label: 'Practical Skills', score: 95 },
            { labelKey: 'problemSolving', label: 'Problem Solving', score: 90 },
            { labelKey: 'analysis', label: 'Analysis', score: 85 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 90 },
            { labelKey: 'independence', label: 'Independence', score: 85 }
        ],
        weaknesses: [
            { labelKey: 'planning', label: 'Planning', score: 40 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 35 },
            { labelKey: 'empathy', label: 'Empathy', score: 40 },
            { labelKey: 'longTermPlanning', label: 'Long-term Planning', score: 45 },
            { labelKey: 'theoreticalLearning', label: 'Theoretical Learning', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'Mechanic', category: 'Trade', description: '기계 수리 및 유지보수', rating: 5 },
            { rank: 2, name: 'Engineer', category: 'Engineering', description: '기술 문제 해결', rating: 5 },
            { rank: 3, name: 'Technician', category: 'Technology', description: '기술 서포트 및 설치', rating: 4 },
            { rank: 4, name: 'Software Developer', category: 'IT', description: '실용적 소프트웨어 개발', rating: 4 },
            { rank: 5, name: 'Pilot', category: 'Aviation', description: '항공기 조종 및 운영', rating: 4 },
            { rank: 6, name: 'IT Support Specialist', category: 'IT', description: 'IT 기술 지원', rating: 4 },
            { rank: 7, name: 'Electrician', category: 'Trade', description: '전기 설치 및 수리', rating: 4 },
            { rank: 8, name: 'Carpenter', category: 'Trade', description: '목공 및 건설 작업', rating: 4 },
            { rank: 9, name: 'Detective', category: 'Law Enforcement', description: '사건 수사 및 분석', rating: 3 },
            { rank: 10, name: 'Emergency Responder', category: 'Service', description: '긴급 대응 및 구조', rating: 3 }
        ],
        compatibility: [
            { type: 'ESTP', reason: '실용적 접근의 공유' },
            { type: 'ISTJ', reason: '신뢰의 기반' },
            { type: 'ISFP', reason: '현재 중심의 공감' }
        ]
    },
    ISFP: {
        name: 'ISFP',
        icon: '🎨',
        description: 'The Adventurer - 감각적이고 친절한 예술가',
        shortDesc: '현재를 즐기는 창의적 영혼',
        strengths: [
            { labelKey: 'creativity', label: 'Creativity', score: 90 },
            { labelKey: 'sensing', label: 'Sensing', score: 95 },
            { labelKey: 'kindness', label: 'Kindness', score: 90 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 85 },
            { labelKey: 'aesthetic', label: 'Aesthetic', score: 95 }
        ],
        weaknesses: [
            { labelKey: 'planning', label: 'Planning', score: 40 },
            { labelKey: 'criticism', label: 'Criticism', score: 45 },
            { labelKey: 'longTermVision', label: 'Long-term Vision', score: 50 },
            { labelKey: 'conflictHandling', label: 'Conflict Handling', score: 45 },
            { labelKey: 'theoreticalLearning', label: 'Theoretical Learning', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'Artist', category: 'Creative', description: '예술 창작 및 표현', rating: 5 },
            { rank: 2, name: 'Designer', category: 'Design', description: '시각 디자인 및 창작', rating: 5 },
            { rank: 3, name: 'Photographer', category: 'Creative', description: '사진 촬영 및 편집', rating: 5 },
            { rank: 4, name: 'Fashion Designer', category: 'Fashion', description: '의류 및 액세서리 디자인', rating: 4 },
            { rank: 5, name: 'Florist', category: 'Creative', description: '꽃 장식 및 아레인지', rating: 4 },
            { rank: 6, name: 'Chef', category: 'Culinary', description: '요리 창작 및 준비', rating: 4 },
            { rank: 7, name: 'Musician', category: 'Music', description: '음악 연주 및 작곡', rating: 4 },
            { rank: 8, name: 'Cosmetologist', category: 'Beauty', description: '미용 및 스타일링', rating: 4 },
            { rank: 9, name: 'Interior Designer', category: 'Design', description: '실내 공간 설계', rating: 4 },
            { rank: 10, name: 'Veterinary Technician', category: 'Healthcare', description: '동물 의료 지원', rating: 3 }
        ],
        compatibility: [
            { type: 'ESFP', reason: '감각과 경험의 공유' },
            { type: 'ISFJ', reason: '친절과 배려' },
            { type: 'ESFJ', reason: '현재 중심의 즐거움' }
        ]
    },
    INFP: {
        name: 'INFP',
        icon: '💭',
        description: 'The Mediator - 이상주의적이고 창의로운 중재자',
        shortDesc: '깊은 감정의 창의적 혼',
        strengths: [
            { labelKey: 'creativity', label: 'Creativity', score: 90 },
            { labelKey: 'empathy', label: 'Empathy', score: 95 },
            { labelKey: 'idealism', label: 'Idealism', score: 90 },
            { labelKey: 'individuality', label: 'Individuality', score: 90 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 85 }
        ],
        weaknesses: [
            { labelKey: 'practicality', label: 'Practicality', score: 40 },
            { labelKey: 'criticalThinking', label: 'Critical Thinking', score: 45 },
            { labelKey: 'organization', label: 'Organization', score: 35 },
            { labelKey: 'conflictResolution', label: 'Conflict Resolution', score: 50 },
            { labelKey: 'assertiveness', label: 'Assertiveness', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'Writer', category: 'Creative', description: '창작 글쓰기 및 표현', rating: 5 },
            { rank: 2, name: 'Counselor', category: 'Psychology', description: '감정 지원 및 상담', rating: 5 },
            { rank: 3, name: 'Graphic Designer', category: 'Design', description: '비주얼 디자인 및 창작', rating: 4 },
            { rank: 4, name: 'Psychologist', category: 'Psychology', description: '인간 심리 이해 및 치료', rating: 4 },
            { rank: 5, name: 'Social Advocate', category: 'Social', description: '사회 정의 운동', rating: 4 },
            { rank: 6, name: 'Content Creator', category: 'Media', description: '창의적 콘텐츠 제작', rating: 4 },
            { rank: 7, name: 'Musician', category: 'Music', description: '감정 표현 음악 창작', rating: 4 },
            { rank: 8, name: 'Teacher', category: 'Education', description: '학생 영감과 성장 지원', rating: 3 },
            { rank: 9, name: 'Nonprofit Worker', category: 'Social', description: '사회 기여 활동', rating: 4 },
            { rank: 10, name: 'Creative Director', category: 'Media', description: '창의 방향 설정 및 감독', rating: 3 }
        ],
        compatibility: [
            { type: 'ENFJ', reason: '감정과 이상의 공유' },
            { type: 'INFJ', reason: '깊은 감정 공감' },
            { type: 'ENFP', reason: '창의성의 시너지' }
        ]
    },
    INTP: {
        name: 'INTP',
        icon: '🔬',
        description: 'The Logician - 논리적이고 혁신적인 사상가',
        shortDesc: '끝없는 탐구의 천재',
        strengths: [
            { labelKey: 'analysis', label: 'Analysis', score: 95 },
            { labelKey: 'creativity', label: 'Creativity', score: 90 },
            { labelKey: 'logic', label: 'Logic', score: 95 },
            { labelKey: 'independence', label: 'Independence', score: 90 },
            { labelKey: 'technicalSkills', label: 'Technical Skills', score: 85 }
        ],
        weaknesses: [
            { labelKey: 'execution', label: 'Execution', score: 35 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 35 },
            { labelKey: 'organization', label: 'Organization', score: 40 },
            { labelKey: 'sociability', label: 'Sociability', score: 45 },
            { labelKey: 'practicality', label: 'Practicality', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'Software Engineer', category: 'IT', description: '혁신적 소프트웨어 개발', rating: 5 },
            { rank: 2, name: 'Scientist', category: 'Science', description: '과학 연구 및 발견', rating: 5 },
            { rank: 3, name: 'Data Scientist', category: 'IT', description: '데이터 분석 및 모델링', rating: 5 },
            { rank: 4, name: 'Mathematician', category: 'Science', description: '수학 이론 연구', rating: 5 },
            { rank: 5, name: 'System Architect', category: 'IT', description: '복잡한 시스템 설계', rating: 4 },
            { rank: 6, name: 'Research Scientist', category: 'Science', description: '기초 과학 연구', rating: 4 },
            { rank: 7, name: 'Computer Scientist', category: 'IT', description: 'IT 이론 연구', rating: 4 },
            { rank: 8, name: 'Engineer', category: 'Engineering', description: '혁신 기술 개발', rating: 4 },
            { rank: 9, name: 'Philosophy Professor', category: 'Education', description: '철학 이론 교수', rating: 3 },
            { rank: 10, name: 'Product Engineer', category: 'Engineering', description: '제품 기술 혁신', rating: 4 }
        ],
        compatibility: [
            { type: 'INTJ', reason: '지적 깊이의 공유' },
            { type: 'ENTJ', reason: '논리와 전략의 시너지' },
            { type: 'ENTP', reason: '지적 자극과 논쟁' }
        ]
    },
    ESTJ: {
        name: 'ESTJ',
        icon: '👔',
        description: 'The Supervisor - 효율적이고 결정력 있는 리더',
        shortDesc: '강력한 리더십의 실행가',
        strengths: [
            { labelKey: 'leadership', label: 'Leadership', score: 95 },
            { labelKey: 'organization', label: 'Organization', score: 95 },
            { labelKey: 'execution', label: 'Execution', score: 95 },
            { labelKey: 'responsibility', label: 'Responsibility', score: 90 },
            { labelKey: 'decisionMaking', label: 'Decision-making', score: 95 }
        ],
        weaknesses: [
            { labelKey: 'flexibility', label: 'Flexibility', score: 40 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 45 },
            { labelKey: 'creativity', label: 'Creativity', score: 50 },
            { labelKey: 'emotionalUnderstanding', label: 'Emotional Understanding', score: 45 },
            { labelKey: 'adaptability', label: 'Adaptability', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'CEO', category: 'Management', description: '회사 전반 리더십', rating: 5 },
            { rank: 2, name: 'Project Manager', category: 'Management', description: '프로젝트 주도 및 통제', rating: 5 },
            { rank: 3, name: 'Executive Director', category: 'Management', description: '조직 운영 감독', rating: 5 },
            { rank: 4, name: 'Military Officer', category: 'Military', description: '군대 조직 지휘', rating: 5 },
            { rank: 5, name: 'Judge', category: 'Law', description: '법 집행 및 판결', rating: 4 },
            { rank: 6, name: 'Police Chief', category: 'Law Enforcement', description: '경찰 조직 운영', rating: 4 },
            { rank: 7, name: 'Financial Manager', category: 'Finance', description: '재무 운영 및 통제', rating: 4 },
            { rank: 8, name: 'Operations Manager', category: 'Management', description: '사업 운영 효율화', rating: 4 },
            { rank: 9, name: 'Sales Manager', category: 'Sales', description: '영업 조직 관리', rating: 4 },
            { rank: 10, name: 'Construction Manager', category: 'Construction', description: '건설 프로젝트 관리', rating: 4 }
        ],
        compatibility: [
            { type: 'ISTJ', reason: '목표 지향의 일치' },
            { type: 'ESFJ', reason: '조직력의 시너지' },
            { type: 'ENTJ', reason: '리더십 강화' }
        ]
    },
    ESFJ: {
        name: 'ESFJ',
        icon: '👥',
        description: 'The Consul - 사교적이고 배려하는 주최자',
        shortDesc: '따뜻한 인간관계의 중심',
        strengths: [
            { labelKey: 'empathy', label: 'Empathy', score: 95 },
            { labelKey: 'sociability', label: 'Sociability', score: 95 },
            { labelKey: 'responsibility', label: 'Responsibility', score: 90 },
            { labelKey: 'organization', label: 'Organization', score: 85 },
            { labelKey: 'cooperation', label: 'Cooperation', score: 95 }
        ],
        weaknesses: [
            { labelKey: 'assertiveness', label: 'Assertiveness', score: 45 },
            { labelKey: 'criticalThinking', label: 'Critical Thinking', score: 50 },
            { labelKey: 'creativity', label: 'Creativity', score: 50 },
            { labelKey: 'adaptability', label: 'Adaptability', score: 55 },
            { labelKey: 'stressManagement', label: 'Stress Management', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'Human Resources Manager', category: 'HR', description: '직원 관리 및 개발', rating: 5 },
            { rank: 2, name: 'Teacher', category: 'Education', description: '학생 교육 및 격려', rating: 5 },
            { rank: 3, name: 'Event Planner', category: 'Event', description: '행사 기획 및 조직', rating: 5 },
            { rank: 4, name: 'Sales Manager', category: 'Sales', description: '관계 기반 영업 관리', rating: 4 },
            { rank: 5, name: 'Customer Service Manager', category: 'Service', description: '고객 만족 및 관계', rating: 4 },
            { rank: 6, name: 'Healthcare Manager', category: 'Healthcare', description: '의료 팀 관리', rating: 4 },
            { rank: 7, name: 'Volunteer Coordinator', category: 'Social', description: '자원봉사 조직화', rating: 4 },
            { rank: 8, name: 'Hospitality Manager', category: 'Hospitality', description: '호텔/레스토랑 운영', rating: 4 },
            { rank: 9, name: 'Administrative Manager', category: 'Administration', description: '행정팀 리더십', rating: 3 },
            { rank: 10, name: 'Public Relations Manager', category: 'PR', description: '대중 관계 관리', rating: 3 }
        ],
        compatibility: [
            { type: 'ISFJ', reason: '공감과 배려' },
            { type: 'ESTJ', reason: '조직력의 시너지' },
            { type: 'ESFP', reason: '사교성의 공유' }
        ]
    },
    ENFJ: {
        name: 'ENFJ',
        icon: '⭐',
        description: 'The Protagonist - 열정적이고 영감의 지도자',
        shortDesc: '사람을 움직이는 카리스마 리더',
        strengths: [
            { labelKey: 'leadership', label: 'Leadership', score: 95 },
            { labelKey: 'empathy', label: 'Empathy', score: 90 },
            { labelKey: 'charisma', label: 'Charisma', score: 95 },
            { labelKey: 'communication', label: 'Communication', score: 95 },
            { labelKey: 'inspiration', label: 'Inspiration', score: 90 }
        ],
        weaknesses: [
            { labelKey: 'objectivity', label: 'Objectivity', score: 45 },
            { labelKey: 'criticalThinking', label: 'Critical Thinking', score: 50 },
            { labelKey: 'adaptability', label: 'Adaptability', score: 55 },
            { labelKey: 'stressManagement', label: 'Stress Management', score: 50 },
            { labelKey: 'selfCenteredness', label: 'Self-centeredness', score: 60 }
        ],
        careers: [
            { rank: 1, name: 'Executive Coach', category: 'Development', description: '리더 코칭 및 개발', rating: 5 },
            { rank: 2, name: 'Motivational Speaker', category: 'Speaking', description: '영감 전달 및 강연', rating: 5 },
            { rank: 3, name: 'Human Resources Director', category: 'HR', description: '인사 조직 리더십', rating: 5 },
            { rank: 4, name: 'Marketing Manager', category: 'Marketing', description: '브랜드 메시지 전달', rating: 4 },
            { rank: 5, name: 'Sales Leader', category: 'Sales', description: '판매팀 영감 및 지도', rating: 4 },
            { rank: 6, name: 'Teacher', category: 'Education', description: '학생 영감 및 리더십', rating: 4 },
            { rank: 7, name: 'Counselor', category: 'Psychology', description: '개인 성장 코칭', rating: 4 },
            { rank: 8, name: 'Political Leader', category: 'Politics', description: '정치 리더십', rating: 4 },
            { rank: 9, name: 'Non-profit Director', category: 'Social', description: '사회 운동 지도', rating: 4 },
            { rank: 10, name: 'Corporate Trainer', category: 'Training', description: '조직 교육 및 개발', rating: 4 }
        ],
        compatibility: [
            { type: 'INFJ', reason: '리더십 시너지' },
            { type: 'INFP', reason: '감정과 이상의 공유' },
            { type: 'ENFP', reason: '영감과 열정의 공유' }
        ]
    },
    ENTJ: {
        name: 'ENTJ',
        icon: '🎯',
        description: 'The Commander - 전략적이고 강하의 지휘관',
        shortDesc: '승리의 전략가',
        strengths: [
            { labelKey: 'leadership', label: 'Leadership', score: 95 },
            { labelKey: 'strategy', label: 'Strategy', score: 95 },
            { labelKey: 'decisionMaking', label: 'Decision-making', score: 95 },
            { labelKey: 'logic', label: 'Logic', score: 90 },
            { labelKey: 'ambition', label: 'Ambition', score: 95 }
        ],
        weaknesses: [
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 35 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 40 },
            { labelKey: 'emotionalUnderstanding', label: 'Emotional Understanding', score: 45 },
            { labelKey: 'presentFocus', label: 'Present Focus', score: 50 },
            { labelKey: 'workLifeBalance', label: 'Work-life Balance', score: 40 }
        ],
        careers: [
            { rank: 1, name: 'CEO', category: 'Management', description: '회사 전략 리더십', rating: 5 },
            { rank: 2, name: 'Executive', category: 'Management', description: '경영진 전략 리더', rating: 5 },
            { rank: 3, name: 'Strategic Consultant', category: 'Consulting', description: '기업 전략 컨설팅', rating: 5 },
            { rank: 4, name: 'Military Officer', category: 'Military', description: '전략 군사 리더', rating: 5 },
            { rank: 5, name: 'Judge', category: 'Law', description: '법정 논리적 판결', rating: 4 },
            { rank: 6, name: 'Financial Director', category: 'Finance', description: '재무 전략 리더', rating: 4 },
            { rank: 7, name: 'Product Manager', category: 'Product', description: '제품 전략 수립', rating: 4 },
            { rank: 8, name: 'Project Lead', category: 'Management', description: '프로젝트 전략 주도', rating: 4 },
            { rank: 9, name: 'Sales Leader', category: 'Sales', description: '판매 전략 리더', rating: 4 },
            { rank: 10, name: 'Entrepreneur', category: 'Business', description: '사업 전략 창업', rating: 5 }
        ],
        compatibility: [
            { type: 'INTJ', reason: '전략적 시너지' },
            { type: 'INTP', reason: '논리와 전략의 시너지' },
            { type: 'ESTJ', reason: '리더십 강화' }
        ]
    },
    ESTP: {
        name: 'ESTP',
        icon: '⚡',
        description: 'The Entrepreneur - 역동적이고 도전적인 사업가',
        shortDesc: '즉흥적 액션의 도전가',
        strengths: [
            { labelKey: 'action', label: 'Action', score: 95 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 95 },
            { labelKey: 'problemSolving', label: 'Problem Solving', score: 90 },
            { labelKey: 'persuasion', label: 'Persuasion', score: 85 },
            { labelKey: 'riskTaking', label: 'Risk-taking', score: 90 }
        ],
        weaknesses: [
            { labelKey: 'longTermPlanning', label: 'Long-term Planning', score: 40 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 45 },
            { labelKey: 'politeness', label: 'Politeness', score: 50 },
            { labelKey: 'perseverance', label: 'Perseverance', score: 55 },
            { labelKey: 'detailFocus', label: 'Detail Focus', score: 45 }
        ],
        careers: [
            { rank: 1, name: 'Entrepreneur', category: 'Business', description: '새로운 사업 시작', rating: 5 },
            { rank: 2, name: 'Sales Manager', category: 'Sales', description: '영업 성과 주도', rating: 5 },
            { rank: 3, name: 'Marketing Manager', category: 'Marketing', description: '마케팅 캠페인 주도', rating: 4 },
            { rank: 4, name: 'Pilot', category: 'Aviation', description: '항공기 조종의 도전', rating: 4 },
            { rank: 5, name: 'Firefighter', category: 'Emergency', description: '긴급 상황 대응', rating: 4 },
            { rank: 6, name: 'Detective', category: 'Law Enforcement', description: '사건 수사 해결', rating: 4 },
            { rank: 7, name: 'Athlete', category: 'Sports', description: '스포츠 경쟁 활동', rating: 4 },
            { rank: 8, name: 'Trader', category: 'Finance', description: '주식/재테크 거래', rating: 3 },
            { rank: 9, name: 'Construction Manager', category: 'Construction', description: '건설 프로젝트 주도', rating: 4 },
            { rank: 10, name: 'Salesperson', category: 'Sales', description: '직접 영업 활동', rating: 4 }
        ],
        compatibility: [
            { type: 'ISTP', reason: '실용적 접근의 공유' },
            { type: 'ESFP', reason: '행동과 경험의 공유' },
            { type: 'ESTJ', reason: '결정력의 시너지' }
        ]
    },
    ESFP: {
        name: 'ESFP',
        icon: '🎪',
        description: 'The Entertainer - 활발하고 즐거운 공연가',
        shortDesc: '삶을 즐기는 무대의 별',
        strengths: [
            { labelKey: 'sociability', label: 'Sociability', score: 95 },
            { labelKey: 'energy', label: 'Energy', score: 95 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 90 },
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 95 },
            { labelKey: 'sensing', label: 'Sensing', score: 90 }
        ],
        weaknesses: [
            { labelKey: 'longTermPlanning', label: 'Long-term Planning', score: 35 },
            { labelKey: 'organization', label: 'Organization', score: 40 },
            { labelKey: 'analysis', label: 'Analysis', score: 50 },
            { labelKey: 'seriousness', label: 'Seriousness', score: 50 },
            { labelKey: 'detailFocus', label: 'Detail Focus', score: 45 }
        ],
        careers: [
            { rank: 1, name: 'Entertainer', category: 'Entertainment', description: '무대 공연 및 엔터테인먼트', rating: 5 },
            { rank: 2, name: 'Event Coordinator', category: 'Event', description: '행사 기획 및 진행', rating: 5 },
            { rank: 3, name: 'Sales Representative', category: 'Sales', description: '사람 중심 영업 활동', rating: 4 },
            { rank: 4, name: 'Hospitality Manager', category: 'Hospitality', description: '호스피탈리티 관리', rating: 4 },
            { rank: 5, name: 'Tour Guide', category: 'Travel', description: '여행 가이드 및 경험 제공', rating: 4 },
            { rank: 6, name: 'Teacher', category: 'Education', description: '활동 기반 교육', rating: 3 },
            { rank: 7, name: 'Flight Attendant', category: 'Aviation', description: '승객 서비스 및 안내', rating: 4 },
            { rank: 8, name: 'Personal Trainer', category: 'Fitness', description: '피트니스 코칭 및 동기부여', rating: 4 },
            { rank: 9, name: 'Actor', category: 'Creative', description: '배우 및 공연', rating: 4 },
            { rank: 10, name: 'Makeup Artist', category: 'Beauty', description: '메이크업 및 스타일링', rating: 3 }
        ],
        compatibility: [
            { type: 'ISFP', reason: '감각과 경험의 공유' },
            { type: 'ESTP', reason: '행동과 경험의 공유' },
            { type: 'ESFJ', reason: '사교성의 공유' }
        ]
    },
    ENFP: {
        name: 'ENFP',
        icon: '🌈',
        description: 'The Campaigner - 열정적이고 창의로운 활동가',
        shortDesc: '열정과 영감의 변화 주도자',
        strengths: [
            { labelKey: 'creativity', label: 'Creativity', score: 95 },
            { labelKey: 'passion', label: 'Passion', score: 95 },
            { labelKey: 'sociability', label: 'Sociability', score: 90 },
            { labelKey: 'intuition', label: 'Intuition', score: 90 },
            { labelKey: 'flexibility', label: 'Flexibility', score: 90 }
        ],
        weaknesses: [
            { labelKey: 'organization', label: 'Organization', score: 40 },
            { labelKey: 'planning', label: 'Planning', score: 45 },
            { labelKey: 'detailFocus', label: 'Detail Focus', score: 45 },
            { labelKey: 'perseverance', label: 'Perseverance', score: 50 },
            { labelKey: 'selfControl', label: 'Self-control', score: 55 }
        ],
        careers: [
            { rank: 1, name: 'Content Creator', category: 'Media', description: '창의적 콘텐츠 제작', rating: 5 },
            { rank: 2, name: 'Journalist', category: 'Media', description: '뉴스 보도 및 취재', rating: 4 },
            { rank: 3, name: 'Marketing Specialist', category: 'Marketing', description: '창의 마케팅 전략', rating: 4 },
            { rank: 4, name: 'Startup Founder', category: 'Startup', description: '혁신 스타트업 창업', rating: 4 },
            { rank: 5, name: 'Trainer', category: 'Training', description: '교육 및 워크숍 진행', rating: 4 },
            { rank: 6, name: 'Counselor', category: 'Psychology', description: '창의 상담 및 지원', rating: 4 },
            { rank: 7, name: 'Teacher', category: 'Education', description: '창의 교육 및 영감', rating: 4 },
            { rank: 8, name: 'Event Planner', category: 'Event', description: '창의 이벤트 기획', rating: 4 },
            { rank: 9, name: 'PR Manager', category: 'PR', description: '창의 홍보 전략', rating: 3 },
            { rank: 10, name: 'Designer', category: 'Design', description: '시각 창의 디자인', rating: 4 }
        ],
        compatibility: [
            { type: 'INTJ', reason: '창의성의 상호 자극' },
            { type: 'INFJ', reason: '영감과 이상의 공유' },
            { type: 'ENFJ', reason: '영감과 열정의 공유' }
        ]
    },
    ENTP: {
        name: 'ENTP',
        icon: '🚀',
        description: 'The Debater - 지능적이고 도전적인 논자',
        shortDesc: '변론의 천재 개혁자',
        strengths: [
            { labelKey: 'creativity', label: 'Creativity', score: 90 },
            { labelKey: 'logic', label: 'Logic', score: 90 },
            { labelKey: 'analysis', label: 'Analysis', score: 90 },
            { labelKey: 'persuasion', label: 'Persuasion', score: 85 },
            { labelKey: 'independence', label: 'Independence', score: 85 }
        ],
        weaknesses: [
            { labelKey: 'emotionalExpression', label: 'Emotional Expression', score: 40 },
            { labelKey: 'organization', label: 'Organization', score: 45 },
            { labelKey: 'longTermPlanning', label: 'Long-term Planning', score: 50 },
            { labelKey: 'perseverance', label: 'Perseverance', score: 55 },
            { labelKey: 'focus', label: 'Focus', score: 50 }
        ],
        careers: [
            { rank: 1, name: 'Inventor', category: 'Innovation', description: '새로운 기술 발명', rating: 5 },
            { rank: 2, name: 'Software Developer', category: 'IT', description: '혁신 소프트웨어 개발', rating: 4 },
            { rank: 3, name: 'Engineer', category: 'Engineering', description: '기술 혁신 및 문제해결', rating: 4 },
            { rank: 4, name: 'Entrepreneur', category: 'Business', description: '혁신 사업 창업', rating: 4 },
            { rank: 5, name: 'Lawyer', category: 'Law', description: '법 논거 및 변론', rating: 4 },
            { rank: 6, name: 'Consultant', category: 'Consulting', description: '혁신 컨설팅', rating: 4 },
            { rank: 7, name: 'Journalist', category: 'Media', description: '조사 보도 및 분석', rating: 3 },
            { rank: 8, name: 'Researcher', category: 'Research', description: '혁신 연구 활동', rating: 4 },
            { rank: 9, name: 'Debater', category: 'Speaking', description: '논증 및 토론 활동', rating: 3 },
            { rank: 10, name: 'Marketing Strategist', category: 'Marketing', description: '마케팅 전략 혁신', rating: 3 }
        ],
        compatibility: [
            { type: 'INTP', reason: '지적 자극과 논쟁' },
            { type: 'INTJ', reason: '논리적 시너지' },
            { type: 'ENFP', reason: '창의성의 시너지' }
        ]
    }
};

// 간단 테스트 질문 (12문제)
const TEST_QUESTIONS = [
    {
        text: 'test.q1',
        type: 'IE',
        answers: [
            { text: 'test.q1a1', value: 'I' },
            { text: 'test.q1a2', value: 'E' }
        ]
    },
    {
        text: 'test.q2',
        type: 'SN',
        answers: [
            { text: 'test.q2a1', value: 'S' },
            { text: 'test.q2a2', value: 'N' }
        ]
    },
    {
        text: 'test.q3',
        type: 'TF',
        answers: [
            { text: 'test.q3a1', value: 'T' },
            { text: 'test.q3a2', value: 'F' }
        ]
    },
    {
        text: 'test.q4',
        type: 'JP',
        answers: [
            { text: 'test.q4a1', value: 'J' },
            { text: 'test.q4a2', value: 'P' }
        ]
    },
    {
        text: 'test.q5',
        type: 'IE',
        answers: [
            { text: 'test.q5a1', value: 'E' },
            { text: 'test.q5a2', value: 'I' }
        ]
    },
    {
        text: 'test.q6',
        type: 'SN',
        answers: [
            { text: 'test.q6a1', value: 'N' },
            { text: 'test.q6a2', value: 'S' }
        ]
    },
    {
        text: 'test.q7',
        type: 'TF',
        answers: [
            { text: 'test.q7a1', value: 'F' },
            { text: 'test.q7a2', value: 'T' }
        ]
    },
    {
        text: 'test.q8',
        type: 'JP',
        answers: [
            { text: 'test.q8a1', value: 'P' },
            { text: 'test.q8a2', value: 'J' }
        ]
    },
    {
        text: 'test.q9',
        type: 'IE',
        answers: [
            { text: 'test.q9a1', value: 'I' },
            { text: 'test.q9a2', value: 'E' }
        ]
    },
    {
        text: 'test.q10',
        type: 'SN',
        answers: [
            { text: 'test.q10a1', value: 'S' },
            { text: 'test.q10a2', value: 'N' }
        ]
    },
    {
        text: 'test.q11',
        type: 'TF',
        answers: [
            { text: 'test.q11a1', value: 'T' },
            { text: 'test.q11a2', value: 'F' }
        ]
    },
    {
        text: 'test.q12',
        type: 'JP',
        answers: [
            { text: 'test.q12a1', value: 'J' },
            { text: 'test.q12a2', value: 'P' }
        ]
    }
];

// 프리미엠 분석 텍스트 (각 MBTI별)
const PREMIUM_ANALYSIS = {
    ISTJ: {
        careerPath: 'ISTJ는 체계적인 조직 문화에서 최고의 성과를 냅니다. 감사, 회계, 행정 등 신뢰성이 중요한 분야에서 탁월합니다. 10년 경력으로 리더 위치에 올라 조직을 이끌 수 있습니다.',
        environment: '명확한 규칙과 기준이 있는 환경, 일정과 마감이 있는 구조적 업무, 책임과 성과가 명확하게 인식되는 조직',
        tips: '변화하는 업무에 더 유연하게 대응하려는 노력이 필요합니다. 새로운 기술과 방식을 배우는 데 개방적이 되세요. 팀과의 개인적 관계도 중요합니다.'
    },
    ISFJ: {
        careerPath: 'ISFJ는 돌봄과 지원 역할에 최고의 능력을 발휘합니다. 간호, 교육, 상담 등에서 깊은 만족감을 얻습니다. 고객/환자 관계 관리 분야에서 경력을 쌓을 수 있습니다.',
        environment: '팀과의 협력이 중요한 환경, 개인의 기여가 인정받는 조직, 일정한 관계와 루틴이 있는 업무',
        tips: '자신의 의견을 더 적극적으로 표현하는 것이 경력 발전에 도움이 됩니다. 변화에 대한 두려움을 줄이고 새로운 도전을 받아들이세요.'
    },
    INFJ: {
        careerPath: 'INFJ는 사람들의 성장을 돕는 일에서 가장 큰 보람을 느낍니다. 심리 상담, 코칭, 사회 운동 등에서 탁월합니다. 비전을 가진 리더로 조직을 변화시킬 수 있습니다.',
        environment: '의미있는 일을 하는 조직, 개인 성장을 지원하는 문화, 깊은 관계를 맺을 수 있는 환경',
        tips: '과다한 감정 투자로 인한 소진을 피하세요. 자신의 한계를 설정하고 셀프 케어를 우선시하세요. 실무적 스킬도 함께 발전시키면 더욱 효과적입니다.'
    },
    INTJ: {
        careerPath: 'INTJ는 복잡한 시스템을 설계하고 혁신을 주도합니다. 기술, 과학, 전략 분야의 리더가 되어 조직을 변혁할 수 있습니다. 장기적 비전으로 성공을 이룹니다.',
        environment: '자율성이 높은 환경, 논리적 사고를 존중하는 조직, 도전적인 문제 해결이 필요한 업무',
        tips: '팀과의 소통과 감정 이해에 더 많은 주의를 기울이세요. 다른 관점도 인정하고 함께하는 능력을 키우면 리더십이 더욱 효과적입니다.'
    },
    ISTP: {
        careerPath: 'ISTP는 손으로 만드는 일과 실제 문제 해결에 탁월합니다. 기술, 엔지니어링, 트레이드 분야에서 마스터가 될 수 있습니다. 독립적인 전문가로서 성장합니다.',
        environment: '직접 실행할 수 있는 업무, 자율성이 높은 환경, 논리적이고 실용적인 조직 문화',
        tips: '장기 계획과 팀 협력에 더 신경을 써보세요. 다른 사람의 감정을 이해하려는 노력이 리더십 성장에 도움이 됩니다.'
    },
    ISFP: {
        careerPath: 'ISFP는 예술적 감각과 창의성으로 독특한 가치를 만듭니다. 디자인, 음악, 미술 등 창의 분야에서 자신만의 스타일을 표현할 수 있습니다.',
        environment: '창의적 표현이 자유로운 환경, 개인의 작업 스타일을 존중하는 문화, 감각적 아름다움을 중시하는 조직',
        tips: '현재 즐거움도 중요하지만 장기 목표 설정도 필요합니다. 자신의 작품을 마케팅하는 스킬을 배우면 더 많은 기회가 열립니다.'
    },
    INFP: {
        careerPath: 'INFP는 깊은 감정과 창의성으로 영향력 있는 콘텐츠를 만듭니다. 글쓰기, 상담, 사회운동 등에서 의미있는 변화를 일으킬 수 있습니다.',
        environment: '자신의 가치관을 존중하는 조직, 창의적 자유가 있는 환경, 개인적 성장을 지원하는 문화',
        tips: '실무적 실행력을 높이고 비현실적인 기대를 조정하세요. 감정적 반응만이 아닌 논리적 분석도 함께 키우면 더욱 영향력 있는 리더가 될 수 있습니다.'
    },
    INTP: {
        careerPath: 'INTP는 끝없는 탐구와 혁신으로 기술과 과학을 발전시킵니다. 연구, 개발, 아키텍처 등에서 돌파구를 만들 수 있습니다. 독립적 전문가로 존경받습니다.',
        environment: '깊이 있는 연구를 할 수 있는 환경, 아이디어의 가치를 인정하는 조직, 자율성이 높은 업무',
        tips: '이론만큼 실행도 중요합니다. 프로젝트를 끝내는 것에 더 신경을 쓰세요. 팀과의 소통을 개선하면 영향력이 훨씬 커집니다.'
    },
    ESTJ: {
        careerPath: 'ESTJ는 강력한 리더십으로 조직을 통솔합니다. CEO, 리더 등 최고 경영진 위치에 올라 조직의 방향을 결정할 수 있습니다. 체계적 관리로 성과를 극대화합니다.',
        environment: '명확한 목표와 계획이 있는 조직, 성과가 명확히 인식되는 환경, 리더십을 발휘할 기회',
        tips: '다양한 의견을 더 열심히 들으세요. 변화에 대한 저항을 줄이고 팀의 감정과 동기를 더 고려하면 리더십이 더욱 효과적입니다.'
    },
    ESFJ: {
        careerPath: 'ESFJ는 따뜻한 리더십으로 팀을 하나로 만듭니다. 인사, 관리, 행사 기획 등에서 탁월하며, 관계 중심의 조직 문화를 만들 수 있습니다.',
        environment: '팀협력이 중요한 환경, 개인의 기여가 인정받는 조직, 따뜻한 대인관계가 있는 업무',
        tips: '자신의 의견을 더 강하게 표현하고, 비판을 건설적으로 받아들이세요. 변화에 대한 개방성을 높이면 더 효과적한 리더가 될 수 있습니다.'
    },
    ENFJ: {
        careerPath: 'ENFJ는 사람들을 영감으로 이끄는 카리스마 리더입니다. 리더, 스피커, 코치 등으로 활동하며 조직과 사람들에게 긍정적 변화를 가져올 수 있습니다.',
        environment: '사람과의 상호작용이 많은 환경, 리더십을 발휘할 수 있는 조직, 의미있는 영향력을 미칠 수 있는 업무',
        tips: '객관성을 높이고 모든 사람을 완벽하게 만들려는 기대를 줄이세요. 자신의 한계를 인정하고 휴식을 취하는 것도 중요합니다.'
    },
    ENTJ: {
        careerPath: 'ENTJ는 전략적 비전으로 조직을 혁신합니다. CEO, 창업가, 전략가로 활동하며 시장을 주도할 수 있습니다. 장기적 성공과 영향력을 이룹니다.',
        environment: '자율성이 높은 환경, 전략적 사고를 존중하는 조직, 경쟁적이고 도전적인 업무',
        tips: '다른 사람의 감정과 개인적 관계를 더 소중히 여기세요. 완벽함을 추구하다 관계를 해치지 않도록 주의하세요.'
    },
    ESTP: {
        careerPath: 'ESTP는 즉흥성과 행동력으로 기회를 포착합니다. 창업, 영업, 기업가 정신이 필요한 분야에서 성공할 수 있습니다. 위기 상황에서 탁월한 문제해결 능력을 발휘합니다.',
        environment: '다양한 도전이 있는 환경, 빠른 의사결정이 필요한 조직, 액션 중심의 업무',
        tips: '장기 계획의 중요성을 인식하고 계획 수립에 더 신경을 쓰세요. 감정적으로 상처받은 사람들의 마음을 더 헤아려야 합니다.'
    },
    ESFP: {
        careerPath: 'ESFP는 활발함과 감정 표현으로 즐거운 경험을 만듭니다. 엔터테인먼트, 이벤트, 서비스 분야에서 빛날 수 있습니다. 사람들을 행복하게 만드는 커리어를 이룰 수 있습니다.',
        environment: '다양한 인간관계와 상호작용이 있는 환경, 창의적 표현이 자유로운 조직, 에너지 있는 업무',
        tips: '미래 계획도 함께 세우고 책임감을 높이세요. 깊이 있는 업무도 도전해보면 자신의 잠재력을 더 발견할 수 있습니다.'
    },
    ENFP: {
        careerPath: 'ENFP는 열정과 창의성으로 새로운 길을 만듭니다. 창업, 미디어, 혁신 분야에서 주목할 만한 성과를 만들 수 있습니다. 사람들에게 영감을 줍니다.',
        environment: '창의적 자유가 있는 환경, 새로운 아이디어를 존중하는 조직, 다양한 프로젝트를 진행할 수 있는 업무',
        tips: '한 가지에 집중하고 계획대로 추진하는 훈련이 필요합니다. 체계와 세부사항도 중요함을 기억하세요. 완료율을 높이면 더욱 성공할 것입니다.'
    },
    ENTP: {
        careerPath: 'ENTP는 논리적 창의성으로 새로운 가능성을 보여줍니다. 창업, 혁신, 기술 분야에서 파괴적 성장을 만들 수 있습니다. 컨설턴트, 발명가로 활동할 수 있습니다.',
        environment: '지적 도전이 많은 환경, 논쟁과 아이디어 교환이 활발한 조직, 새로운 가능성을 탐색할 수 있는 업무',
        tips: '한 가지에 오래 집중하고 실행까지 마치려는 노력이 필요합니다. 타인의 감정도 고려하고 완료율을 높이면 더욱 성공할 것입니다.'
    }
};
