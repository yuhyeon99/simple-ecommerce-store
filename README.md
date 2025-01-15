### Simple E-commerce Store

**React와 최신 기술 스택을 활용한 간단한 전자상거래 웹 애플리케이션 학습 프로젝트**

---

## **프로젝트 개요**

Simple E-commerce Store는 사용자가 상품을 탐색, 장바구니 관리, 주문 처리 등 전자상거래 애플리케이션의 핵심 기능을 체험할 수 있도록 설계된 학습용 프로젝트입니다. 최신 기술 스택을 활용해 실무에서 자주 사용하는 기능을 학습하고, 프로젝트를 체계적으로 구성하는 데 초점을 맞췄습니다.

---

## **주요 기능**

### **사용자 기능**
- **제품 목록 보기**: 제품의 이미지, 이름, 가격 표시
- **검색 및 필터링**: 제품 검색, 카테고리별 필터링
- **장바구니**:
  - 제품 추가 및 삭제
  - 수량 변경
  - 장바구니 총 금액 계산
- **주문 처리**:
  - 사용자 정보 입력 (이름, 이메일 등)
  - 주문 완료 후 데이터 저장

### **관리자 기능 (Optional)**
- 제품 추가, 수정, 삭제
- 주문 내역 관리

---

## **주요 버전**

- **Node.js**: `^18.17.1`
- **React**: `^18.3.1`
- **React-DOM**: `^18.3.1`
- **React-Query**: 최신 버전
- **Recoil**: 최신 버전
- **Emotion**: 최신 버전
- **TypeScript**: `~5.6.2`
- **Vite**: `^6.0.5`

---

## **기술 스택**

### **프론트엔드**
- **ReactJS 18**: 컴포넌트 기반 UI 개발
- **TypeScript 5**: 강력한 정적 타입 검사
- **Emotion**: CSS-in-JS 스타일링
- **React-Query**: 데이터 동기화 및 캐싱
- **Recoil**: 상태 관리 (장바구니 등)

### **백엔드**
- **Supabase**:
  - NoSQL 데이터베이스로 제품, 주문, 사용자 데이터 저장
  - 인증(Auth) 기능 제공

### **빌드 및 배포**
- **Vite**: 빠른 개발 서버와 빌드 도구
- **GitHub Actions**: CI/CD 파이프라인 구성

### **패키지 관리**
- **PNPM**: 의존성 관리 및 최적화

### **테스트**
- **Vitest**: 유닛 테스트 작성 및 실행

---

## **프로젝트 구조**

```
simple-ecommerce-store/
├── src/
│   ├── components/        # UI 컴포넌트
│   ├── pages/             # 페이지 단위 컴포넌트
│   ├── hooks/             # 커스텀 훅
│   ├── recoil/            # Recoil 상태 관리
│   ├── services/          # API 통신 로직 (React-Query)
│   ├── styles/            # Emotion 스타일링
│   ├── utils/             # 공통 유틸리티 함수
│   └── App.tsx            # 루트 컴포넌트
├── public/                # 정적 파일
├── tests/                 # Vitest 테스트 코드
├── package.json           # 프로젝트 의존성
├── vite.config.ts         # Vite 설정 파일
└── README.md              # 프로젝트 설명
```

---

## **설치 및 실행**

### 1. 프로젝트 클론
```bash
git clone https://github.com/yourusername/simple-ecommerce-store.git
cd simple-ecommerce-store
```

### 2. 의존성 설치
```bash
# PNPM 사용
pnpm install
```

### 3. 개발 서버 실행
```bash
pnpm dev
```

### 4. 빌드
```bash
pnpm build
```

---

## **기능 구현 세부 단계**

### **1. 초기 세팅**
- `create-vite`를 사용하여 React + TypeScript 템플릿 생성
- 주요 라이브러리 설치: React-Query, Recoil, Emotion, Supabase 등
- GitHub Actions 워크플로 설정

### **2. 사용자 기능 개발**
- 제품 목록 페이지, 검색 및 필터링 구현
- 장바구니 및 주문 처리 기능 추가

### **3. 스타일링**
- Emotion을 사용한 컴포넌트별 스타일 관리
- 반응형 디자인 적용

### **4. 데이터 연동**
- Supabase를 활용한 제품 데이터 및 주문 처리
- React-Query로 데이터 캐싱 및 서버 동기화

### **5. 테스트**
- Vitest로 주요 컴포넌트 및 로직 테스트
