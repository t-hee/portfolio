# Portfolio Specification v1.0

_Last updated: 2026-10-21. Planning approved; implementation not started._

## 1. Positioning / 목표

- Purpose: recruitment portfolio, reachable by a simple public URL, readable by hiring managers on desktop/mobile.
- Identity: frontend & mobile application developer with experience integrating backend services, AI models, databases, and IoT systems.
- Message: do not claim to be primary AI researcher or backend specialist across all projects. Highlight **personal contribution**, end-user experience, system integration, and problem-solving.
- Main language: Korean. Section headings may use concise English labels.
- Tone: professional, clear, factual; avoid inflated marketing language.

### Approved hero copy (Korean)

- Eyebrow: `Frontend & Mobile Developer`
- Heading: `기술을 연결해, 사용자가 쓰기 쉬운 서비스를 만듭니다.`
- Intro: `안녕하세요. 프론트엔드와 모바일 앱 개발을 중심으로, 백엔드와 AI 기술까지 서비스에 연결하는 개발자 한태희입니다.`
- Primary CTA label: `프로젝트 보기` (anchor scroll to Projects)
- Secondary CTA: `GitHub` (display only when actual URL provided)

### Approved about copy (initial draft, refine with user before final publication)

`사용자 경험을 고민하고, 서비스의 완성도를 높이는 개발자입니다.`

`React Native를 활용한 모바일 앱 개발을 중심으로 다양한 프로젝트를 수행했습니다. CareMate에서는 고령층 사용자의 접근성을 고려해 프론트엔드 개발을 주도했으며, ReWear에서는 모바일 앱 개발과 YOLOv8 기반 세탁 기호 인식 모델 구현에 참여했습니다. 또한 MeetFit을 단독 개발하며 프론트엔드부터 백엔드, 데이터베이스 연동까지 서비스 구현 전반을 경험했습니다.`

Three competency cards:
1. `Mobile Development` — React Native 중심의 모바일 앱 구현
2. `User-Centered UI` — 사용자 특성에 맞춘 UI/UX 설계
3. `System Integration` — API, DB, AI, IoT 연동 경험

## 2. IA / Information architecture

One-page main navigation, in this order:

1. Hero — developer tagline, intro, scroll CTA
2. About — focused bio + 3 strengths
3. Projects — large featured cards + smaller additional project cards
4. Skills & Achievements — experience-based tech groups, awards timeline, certificates/language
5. Contact — GitHub, email, public-safe resume PDF (links added only after confirmation)

Featured projects, display order:
1. `ReWear` — frontend + YOLOv8 care-label symbol detection + partial backend; two distinct contest awards for one project
2. `MeetFit` — independently developed mobile scheduling recommendation service, frontend/backend/DB
3. `CareMate` — frontend lead, accessibility-focused UI for elderly users and guardians

Other projects: `WallGuard` (retaining wall safety monitoring system app), `CampusCare`, `너의 숨소리`. Confirm whether to add detail pages for these later.

Routes (planned, not yet implemented):
- `index.html`
- `projects/rewear.html`
- `projects/meetfit.html`
- `projects/caremate.html`
- others as needed, after content approval

## 3. Design system

- Direction: **Minimal & Professional**; content-first, calm, legible.
- Main background `#FAFAFA`; cards `#FFFFFF`; body text `#18181B`; hairline borders `#E4E4E7`; accent navy `#345B8E`.
- Fonts: `Pretendard` for Korean, `Inter` for Latin; system fallbacks acceptable. Avoid bundling external font files in starter.
- Content max width: approx. 1100px. Comfortable whitespace and consistent spacing scale.
- Cards: thin borders, subtle shadows, moderately rounded corners; no heavy gradients.
- Desktop: prominent hero, 2-column featured project cards; mobile: stacked cards, collapsible accessible navigation.
- Animation: subtle hover/focus and smooth section navigation; respect reduced-motion preferences.
- Minimum click/tap target sizing, legible body type, strong text/background contrast.
- All project images must be **genuine user-supplied images/screenshots**. No invented app previews, demo metrics, or fake GitHub links.

## 4. Project card design

Each featured project card should show:
- Real screenshot thumbnail (until available, neutral placeholder clearly labeled)
- Name, short one-sentence project summary
- Project period
- User's actual role/contribution
- Select verified tech tags
- Actual award badges (if applicable)
- `상세 보기` link only after detail page exists

Use `PROJECT_FACTS.md` as source of truth; do not merge personal contributions with team-wide functions.

## 5. Project detail template

Consistent structure for every detail page:

1. Hero — project name, one-line summary, image, role, period, team context (if confirmed)
2. Overview — problem and goals
3. My Contributions — exact personally implemented modules/functions
4. Key Features — genuine app screenshots and annotated functions
5. Technical Architecture — app/API/DB/AI diagram, accurate division of responsibility
6. Problem Solving — `issue → analysis → fix → result`; only real, user-confirmed troubleshooting
7. Results & Retrospective — awards, evidence, remaining limitations, lessons
8. Links — verified repo/demo/report links only

Project-specific notes:
- **ReWear:** separate user's YOLOv8 work from team-wide EfficientNet-B0/Gemini-related functionality. Link two genuine award records to one project.
- **CareMate:** emphasize large, clear actions, legibility and contrast, separate elderly/guardian UIs, and API integration. Avoid claiming teammate AI model work as user's.
- **MeetFit:** highlight solo project ownership, mobile UI, FastAPI and DB/recommendation integration, but verify deployed/unfinished features before publication.
- **WallGuard:** is the name of the app **inside** the IoT retaining-wall safety monitoring project. `ICEE` is related to the contest name, not a separate project; do not create a duplicate card.

## 6. Skills, certifications, language, awards

Candidate skills to validate and show grouped by actual usage:
- Frontend & Mobile: React Native, Expo, TypeScript, Kotlin
- Backend & Database: Python, FastAPI, PostgreSQL (confirm applicable projects)
- AI / Integration: YOLOv8, EfficientNet-B0, Gemini API (distinguish personally built vs used by team)
- IoT: ESP32

Credentials and exact award records are in `PROJECT_FACTS.md`. Treat the screenshot dated 2026-10-21 as newer than the earlier internship-experience resume. Do **not** present the Big Data Analysis Engineer written exam as full certification.

## 7. Privacy, SEO and quality

- Never publish residential address, phone number, birthdate, student number, private document IDs.
- Public email, GitHub profile, and resume PDF require explicit user confirmation. If unavailable, omit rather than use dummy `href="#"`.
- Use page titles, descriptions, semantic headings, accessible links/alt text, open graph metadata when confirmed.
- Must work as static files via GitHub Pages; use **relative paths** including from detail pages (`../css/style.css`).
- Audit mobile readability, navigation, focus indicators, loading, missing images and links.
- Avoid any external services/analytics requiring credentials unless explicitly approved.

## 8. Implementation phases

1. Confirm scaffold and facts; connect git repository (user-led).
2. Create minimal working `index.html` + shared stylesheet + JavaScript; focus on hero, navigation, all main sections with accurate copy.
3. User reviews actual screenshots/layout in local browser, adjusts colors/spacing/typography.
4. Add ReWear detail, then MeetFit and CareMate detail pages, after receiving real project visual assets and troubleshooting notes.
5. Add Other Projects, certificates, language, awards, verified external links, publish-safe resume.
6. Responsive/accessibility QA, GitHub Pages deployment, domain optional.

## 9. Unresolved — ask rather than guess

- GitHub username/profile URL, public contact email, resume PDF
- Actual project screenshot assets, repo URLs, demos/videos
- Exact project-by-project personally implemented feature lists and bug-fix stories
- MeetFit current completion state and final architecture/stack
- WallGuard app stack and features beyond verified ESP32/FastAPI/mobile components
- Details/period/team and final technology of other projects, where incomplete
