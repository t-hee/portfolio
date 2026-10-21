# Developer Portfolio — starter

프론트엔드·모바일 앱 개발 중심 개인 취업 포트폴리오의 **기획 및 개발 준비용 저장소**입니다.

> 현재는 초기 설정 단계입니다. `index.html`, CSS, JavaScript는 아직 생성하지 않았습니다. 다음 단계에서 Codex로 구현합니다.

## 개발 흐름

1. `PORTFOLIO_SPEC.md`에서 확정 디자인 및 사이트 구조 확인
2. `PROJECT_FACTS.md`의 정확한 경력·수상 정보와 미확인 사항 확인
3. VS Code에서 폴더 열기 → Codex에게 `AGENTS.md` 준수하도록 지시
4. 구현 단계별로 `index.html`, `css/style.css`, `js/main.js`, `projects/*.html` 작성
5. 로컬 브라우저에서 확인, 모바일 대응 및 링크 점검
6. GitHub 저장소와 연결 → GitHub Pages로 배포

## 운영 원칙

- 확인되지 않은 개인 기여도, 기술 스택, 성과 지표, 개발 완료 상태는 추측해 쓰지 않습니다.
- 현재 빈 폴더들은 Git에서 유지되도록 `.gitkeep` 파일을 포함합니다.
- 연락처·깃허브 주소·이력서 PDF는 공개 전에 사용자가 직접 확인합니다.
- 공개 포트폴리오에는 집 주소, 전화번호, 생년월일 등 불필요한 개인정보를 포함하지 않습니다.

## 예정된 폴더 구조

```text
portfolio_starter/
├── AGENTS.md                 # Codex 작업 규칙
├── PORTFOLIO_SPEC.md         # 디자인, 정보 구조 및 UI 요구사항
├── PROJECT_FACTS.md          # 검증된 경력·수상 데이터와 미확인 항목
├── README.md
├── .gitignore
├── index.html                # 다음 단계에서 생성
├── css/
│   └── style.css             # 다음 단계에서 생성
├── js/
│   └── main.js               # 다음 단계에서 생성
├── projects/
│   ├── rewear.html           # 이후 단계에서 생성
│   ├── meetfit.html
│   └── caremate.html
└── assets/
    ├── images/               # 사용자가 제공하는 실제 프로젝트 화면
    └── docs/                 # 공개 허가한 이력서 PDF 등
```

## 로컬 실행 (구현 이후)

간단한 정적 파일 미리보기로도 확인할 수 있지만, 상대 경로 확인을 위해 `python3 -m http.server 5500`으로 웹 서버를 열거나 VS Code의 로컬 미리보기 도구를 사용하세요.

## 배포 관련

정적 HTML/CSS/JS만 사용하므로 GitHub Pages 무료 호스팅을 목표로 합니다. 외부 API 비밀키, 인증 정보, 개인 정보를 커밋하지 마세요. GitHub Pages 프로젝트 저장소 경로에서도 작동하도록 상대 경로를 사용합니다.
