# Project and Credential Facts — Verified vs To Confirm

_Source priority: user-provided Nexon internship application screenshots received on 2026-10-21 (awards, credentials, language), then earlier written experience resume/project slides. If sources conflict, ask user; do not silently overwrite user-supplied corrections._

## 1. Profile

- Name: `한태희` / `Han Taehee`
- Education: 경상국립대학교 컴퓨터공학과, 2023.03–2027.02 (졸업예정; verify current status before publishing)
- Positioning: frontend & mobile developer; backend/AI/DB/IoT integration experience
- No public GitHub/email/resume URL confirmed yet. **Do not fabricate them**.

### Portfolio checkpoint — 2026-10-22
- **DONE:** six first-pass detail pages exist: `projects/rewear.html`, `projects/meetfit.html`, `projects/caremate.html`, `projects/wallguard.html`, `projects/campuscare.html`, `projects/yourbreath.html`. This means initial content implementation, not final evidence review or deployment.
- **PENDING:** final factual/source cross-check, genuine media insertion, browser/mobile/accessibility QA and GitHub Pages public URL verification. Priority backlog: `docs/FINAL_REVIEW_TODO.md`; detailed capture tasks: `docs/SCREENSHOT_TODO.md`.
- **NEEDS_OWNER_INPUT:** final public contacts; personal/team authorship gaps including PSBI; source/figure permissions and private-repository publication decisions. Do not invent missing evidence or complete unverified tasks.
- **DONE — owner-authorized safe-save exclusion:** the three local ReWear originals (`assets/images/rewear/home.png`, `closet.png`, `lounge.png`) are excluded by exact `.gitignore` paths; live image references are replaced with neutral HTML/CSS placeholders. Originals remain unchanged locally. **NEEDS_OWNER_INPUT:** review identities, privacy and sharing rights before adding approved screenshots later; this deferred review no longer blocks committing the image-free portfolio source.

## 2. Language (latest confirmed)

- TOEIC Speaking: **140 points, IH**, acquisition date **2026-10-16**.

## 3. Credentials (latest confirmed)

| Credential | Date | Status | Issuer |
|---|---|---|---|
| SQLD | 2024-12-13 | 취득 | 한국데이터산업진흥원 |
| ADsP | 2026-08-28 | 취득 | 한국데이터산업진흥원 |
| 정보처리기사 | 2026-09-11 | 취득 | 한국산업인력공단 |
| 빅데이터분석기사 | 2026-09-23 | **필기 합격 (최종 자격 취득 아님)** | 한국데이터산업진흥원 |

- Big Data written-exam result validity date shown in source: **2028-09-23**; do not mistake this for credential expiration.

## 4. Awards (latest application screenshots, replace older resume dates)

| Award date | Competition (exact as currently transcribed) | Prize | Organizer | Project |
|---|---|---|---|---|
| 2026-01-07 | 2025학년도 캡스톤디자인 경진대회 | 대상 | 경상국립대학교 IC-PBL센터 | ReWear |
| 2026-01-21 | 2025학년도 융복합·ICT 활용 공모전 | 우수상 | 경상국립대학교 정보전산처 | 너의 숨소리 |
| 2026-02-05 | 2025년 캡스톤디자인 경진대회 | 장려상 | 경상국립대학교 RISE 사업단 | ReWear |
| 2026-09-28 | 2026 IoTing Life: 융합 아이디어 경진대회 | 우수상 | 경상국립대학교 공학교육혁신센터 | 옹벽 안전 모니터링 시스템 / WallGuard |

Important: ReWear earned **two distinct awards** for the **same project**. Do not create two project pages/cards.

## 5. Project facts

### ReWear (Re:Wear)
- Period: 2025.09–2025.12 (prior resume)
- Type: team project / AI-supported clothes care application
- Personally contributed (user-confirmed scope):
  - Authentication functionality; mobile frontend for home, wardrobe and calendar.
  - Overall structure and UI design of the gamified **My Forest / 나의 숲** tab. This does **not** establish ownership of all game logic.
  - Recycling/upcycling page, including keyword-based YouTube video search and favorites.
  - Partial backend implementation and backend/database integration.
  - YOLOv8 laundry care-label symbol detection model development; collected real clothing-label photos with help from others and personally annotated symbols using Korean standards.
- Team/system-level functions: EfficientNet-B0 garment analysis, Gemini guidance, care-label photo/selection, wardrobe, wear/wash calendar and reminders, reuse/upcycling, community and My Forest. **Team architecture and the entire application's implementation are not solely the user's work.** EfficientNet-B0, Gemini integration, community and all My Forest game logic must not be attributed to the user without further confirmation.
- User-confirmed problem-solving cases (Problem → Action → Lesson):
  1. Insufficient Korean care-label training data → collected real label photos with others' help and personally annotated symbols using Korean standards → learned the ML data preparation workflow. No dataset size, accuracy or performance outcome confirmed.
  2. Uploaded media, local config and development data were shared unintentionally → improved ignored/tracked file management with the team, reducing environment-related confusion → learned to distinguish shared source from local files and review tracking state. Do not claim ignore rules fix database consistency or delete existing Git history; no exact root cause confirmed.
  3. AI-generated React Native layouts differed in simulators → manually debugged spacing, alignment, font sizes and colors → learned to validate generated UI in actual simulator screens and refine visual consistency. No quantified result or exact rendering root cause confirmed.
- Results: two distinct awards listed above.
- Need confirmation: team size, precise code/module authorship beyond the scope above, model training configuration and dataset details, additional troubleshooting, demo/media URLs, and deployment/completion status. Team repository link is recorded in `docs/REWEAR_BRIEF.md`.

### MeetFit
- Solo project; academic period **2026.03–2026.06**, followed by improvements and testing. No further dates confirmed.
- User-confirmed stack: React Native / Expo / TypeScript mobile app; FastAPI, SQLAlchemy, PostgreSQL and Alembic backend.
- Implemented: meeting creation, joining and approval; availability/calendar; schedule recommendations; DB-stored notifications retrieved by polling (not push/WebSocket).
- Meeting Creation UX: **12-step card-based wizard** with progress tracking, previous/next navigation, final review and editing individual steps. Describe the intent to make complex settings manageable; no measured usability improvement confirmed. Exact step-by-step titles/order not supplied.
- Recommendation motivation: fixed criteria cannot fit every meeting. Core algorithm is deterministic rule/scoring evaluation with fixed scoring rules and user-configurable per-meeting constraints.
- Confirmed controls: minimum attendance; required-attendee hard/soft mode; unavailable-time handling; configurable penalties; avoided time ranges; candidate count. Hard mode treats required attendance as a constraint; soft mode reflects required-attendee participation in scoring. Do not claim arbitrary user-defined weights for every criterion or invent formulas, penalty options, tie-breakers or performance results.
- Recommendation flow: user settings → candidate evaluation → ranked results. Gemini is optional for explanations, **not the core algorithm**.
- Historical verification: **46 backend tests passed**, TypeScript checks passed, **Expo Doctor 18/18**, iOS simulator build succeeded. These are past verification records, not checks rerun during portfolio editing.
- Multi-user scenario testing used **4 demo accounts**, separately from automated backend tests. Tested conditions included required attendees, hard/soft modes, minimum attendance, schedule conflicts and permission restrictions. Do not invent exhaustive coverage, scenario counts or new results.
- Verification limits: full physical-device UI flow unverified; demo-account testing does not establish full Kakao-login E2E validation. Do not claim production deployment or fully verified Kakao login.
- User-confirmed problem-solving cases (Problem → Action → Lesson):
  1. Fixed recommendation criteria could not accommodate different meetings → designed per-meeting controls for the confirmed constraints and penalties → learned to distinguish fixed scoring rules from configurable constraints.
  2. One account could not represent varied user schedules/permissions → tested varied scenarios with four demo accounts and ran separate automated backend tests → learned to distinguish scenario checks, automated tests and verified scope.
  3. Meeting setup involved many settings → structured input as a 12-step card wizard with progress, previous/next, final review and step editing → learned to provide both manageable steps and a clear review/edit path.
- Source repository `t-hee/MeetFit` is **private**. Do not add a public source link or change repository visibility.
- Need confirmation: final emulator screenshots, public-safe demo/media URLs, exact DB schema and any further implementation/troubleshooting details. Do not fabricate screenshots, metrics or deployment/completion claims.

### CareMate
- AI-assisted daily care app for seniors and guardians; **3-person team**, academic project period **2026.03–2026.06**.
- Team-owned repository: https://github.com/juuu-sung/CareMate. Link and credit as a team repository; do not clone or modify it for portfolio work.
- User-confirmed team stack: React Native, Expo, TypeScript, FastAPI and PostgreSQL. Team architecture does not imply sole authorship.
- Verified personal contributions:
  - Led mobile frontend development.
  - Designed senior-friendly UI with larger typography, stronger contrast and simple instructions.
  - Prioritized a prominent voice-chat button and visually distinct emergency-contact controls.
  - Separated senior and guardian experiences and navigation.
  - Built guardian dashboard UI summarizing medication, schedules, alerts and location. Do not infer a particular location-tracking mechanism or medical functionality.
  - Participated in backend/API integration; **not the entire backend or database implementation**.
  - Prepared presentation/report (previously confirmed resume fact).
- Design challenges/lessons may discuss only the confirmed decisions: readability through typography/contrast/simple copy; hierarchy of voice chat and emergency controls; role-specific information and navigation. These are design considerations, not formal usability or effectiveness findings. No invented technical bugs or troubleshooting incidents.
- Repository includes features added after the academic presentation. Do not attribute later AI model training, Siri/widgets, security work or measured model performance to the user. Do not claim medical effectiveness, formal usability testing, production deployment or unverified outcomes.
- Need confirmation: genuine emulator screenshots, additional feature/code authorship beyond the scope above, exact backend/API modules, any real troubleshooting or test evidence, and deployment status. Do not fabricate images, metrics or completed validation.

### WallGuard — mobile app for retaining wall safety monitoring system
- Period: 2026.05–2026.08 (prior resume)
- Context: IoT-based retaining-wall safety monitoring project, sometimes referred to in earlier conversation as `ICEE`, a contest-related name. Not a separate project.
- Primary detailed source: `docs/WALLGUARD_BRIEF.md`; the project owner's direct confirmation below supersedes earlier uncertainty about physical integration.
- Personally contributed (confirmed by project owner):
  - ESP32 firmware: SCL3300 sensor readings, startup baseline calibration, moving-average processing, rainfall data handling and JSON transmission.
  - FastAPI/backend: measurement ingestion, wall/measurement-session linkage, database persistence, risk classification and data retrieval.
  - React Native / Expo / TypeScript WallGuard app: wall management, recording/measurement sessions, risk display, history/graphs, alerts and API integration.
- **Successful physical integration test, directly confirmed by the owner:** actual ESP32 sensor measurements were received by FastAPI, persisted in the database and retrieved/displayed by the WallGuard mobile app in a test environment. This is end-to-end physical-device data integration, not code-only or mock-only implementation. Do not invent test counts, timings, exact test devices, benchmarks or debugging incidents.
- Stack/data flow: SCL3300-D01 + rain sensor → ESP32 → FastAPI → PostgreSQL (SQLAlchemy/Alembic) → app retrieval through API. One movable ESP32 is associated with one active wall measurement session at a time; app home/detail use approximately 7-second polling, not WebSocket/push streaming.
- Civil-engineering scale-model experiments are **team research**, not the user's sole personal experiment achievement. The five risk bands are provisional development thresholds; physical integration success does not establish field safety validation or measured prediction/alert efficacy.
- Remaining limitations: production cloud deployment, remote firmware/cloud calibration integration, battery measurement/Deep Sleep and other power-management features remain unconfirmed. CCTV/deep-learning analysis is future work. Repository remains private; no public source-code button.
- Associated award: 2026 IoTing Life: 융합 아이디어 경진대회 우수상 on 2026-09-28.
- Need confirmation: genuine emulator/hardware captures, specific troubleshooting and resolutions, detailed test setup and any later production-cloud or field-validation evidence. Do not treat pending captures as absence of the already confirmed physical integration test.

### CampusCare
- Solo native Android project for university students managing daily health habits; period **2026.03–2026.06**.
- Source repository: `t-hee/CampusCare` (https://github.com/t-hee/CampusCare), currently **private**. Do not publish a public source link or change visibility without owner authorization.
- Confirmed stack: Kotlin, Android XML layouts, Activity/Intent, SharedPreferences, AlarmManager, BroadcastReceiver and BootReceiver. ScoreUtils supplies shared date-based scoring rules.
- Source-confirmed implementation:
  - 8-question lifestyle onboarding with progress indication.
  - Profile-based routine and daily goal initialization; users can independently adjust checklist visibility and notification settings. Time-of-day checklist filters.
  - Routine completion score, streaks, growth stages and badges.
  - Date-specific lifestyle records for meals, exercise, mood and other selected habits. Calendar CRUD, past-record editing and daily reports.
  - Monthly reports: average score, recorded days, recording rate, weekly score trends, badges and feedback. These are app report fields, not measured project-performance results.
  - Per-routine notification toggles and multiple schedules. Drinking-event-specific care routines and local AlarmManager reminders at **-1h / event time / +2h**.
  - Notification permission handling and boot-time rescheduling logic through receivers. Implementation does not establish a successful independent reboot test.
- Confirmed engineering improvements:
  - Replaced generic persistence keys such as `breakfast` with date-scoped keys such as `record_20260613_breakfast` to separate daily records, support past-date editing/calendar integration and avoid date mixing. The example key is not a project/test date.
  - Scores use completed routines / total active routines, independent of the visible filter. Home and reports share date-based calculations through ScoreUtils. Do not invent the prior scoring implementation, an incident, exact percentage scaling or zero-routine behavior.
- Personal scope: end-to-end solo implementation of native Android UI/navigation, local persistence, calendar, scoring, reports, notification scheduling and emulator testing/classroom demo. Do not invent troubleshooting incidents or user feedback.
- Data is stored locally via **SharedPreferences**. No confirmed backend, Room database, cloud sync or AI recommendation.
- “Health score” reflects checklist/routine completion, **not a medically validated health score**. No medical effectiveness, measured user outcomes or usability-testing results confirmed.
- **New owner-confirmed runtime verification:** successfully ran and tested the app in the **Android Studio emulator**, including local notifications, and demonstrated it on a laptop during class. This supersedes any earlier implication that runtime behavior was entirely unverified.
- Separate physical-phone testing, independent reboot tests, production deployment and external-user testing are **not confirmed**. BootReceiver behavior is code-supported, not independently reboot-tested. No benchmark results or test counts confirmed.
- Genuine final emulator screenshots, repository-publication decision and any optional genuine troubleshooting review remain pending. Do not mistake pending captures for lack of the already confirmed emulator/notification/demo testing.

### 너의 숨소리
- **Phase 1 — 개척학기제 original study:** 2025.09–2025.12. This is the academic research period, not the completion date of all follow-up work.
- Official research title: **잠들기 전 호흡 소리로 수면의 질 예측**.
- Program: 경상국립대학교 개척학기제, PL Lab. **3 members; Han Taehee was team leader**.
- **Phase 2 — competition follow-up, owner-confirmed:** the same research was reorganized and supplemented for entry as **너의 숨소리**, developing the breathing-based quantification/PSBI analysis perspective. It is an extension of the original project, not a separate project. Exact entry dates and follow-up completion dates are unconfirmed; do not invent them.
- **Phase 3 — award:** 2026.01, 2025학년도 융복합·ICT 활용 공모전 우수상, 경상국립대학교 정보전산처. The separately verified award record is **2026-01-21**; retain that homepage record without adding a duplicate. Month-only display on the detail page is consistent with it.
- Authoritative sources as confirmed by the owner: 2025 second-semester university final project report; final research presentation and presentation script; owner's latest resume. These take priority over conflicting collaborator README descriptions for the 2025 study.
- **PSQI versus PSBI, owner-confirmed:** PSQI (Pittsburgh Sleep Quality Index) was referenced when organizing sleep questionnaire items, to record subjective sleep state and connect survey responses with audio. Do not imply formal/full PSQI administration or independently validated clinical labels beyond this reference role. PSBI (Pre-Sleep Breathing Index) is a self-developed breathing-feature-based quantification index for pre-sleep state. A breathing-based index was considered from early academic planning and PSBI analysis was developed further during competition follow-up. PSQI questionnaire scores and PSBI output scores are distinct.
- Follow-up repository content includes Stability, Tension, Readiness, and PSBI calculation/verification code. This confirms the broader project context, not sole personal implementation or independently established PSBI accuracy. Keep follow-up PSBI analysis separate from the original study's ML/CNN metrics.
- Verified personal contributions:
  - Team leadership and research-process coordination; recruitment document and promotional-post preparation.
  - Google Form survey structure and question organization; review of survey/audio label-matching structure.
  - Audio file naming, metadata and dataset organization.
  - Review of audio conversion/preprocessing outputs; organization of SNR and silence-ratio quality-control results.
  - Analysis of classical and YAMNet feature structures; review of missing-value/outlier processing.
  - Organization of model-evaluation results; confusion-matrix, F1 and cross-validation visualization.
  - Research reports, presentation slides, explanation and presentation; research reorganization and result communication for competition entry. Do not infer additional PSBI code-development responsibilities.
- Do not claim the owner independently implemented every ML model, trained the CNN, or personally owned the entire team pipeline.
- Team pipeline: breathing audio/sleep survey collection → survey/audio matching → audio preprocessing and quality inspection → MFCC, Chroma, Spectral Centroid, ZCR feature extraction and YAMNet representation exploration → traditional ML model training/comparison → separately evaluated Mel-Spectrogram 2D CNN experiment → metric analysis/visualization. Do not infer YAMNet was the CNN input or a particular feature set produced every reported metric.
- Verified team research results from the final presentation:
  - All numeric results below describe the **original academic study**, not the follow-up PSBI analysis.
  - **95 collected sleep records**, not necessarily 95 participants or the final post-QC sample count.
  - Traditional ML candidates: Logistic Regression, Random Forest, XGBoost; subject-group-based **GroupKFold** evaluation reported.
  - Random Forest: approximately **0.82 accuracy, 0.89 F1, 0.75 AUC**.
  - Separate 2D CNN: approximately **0.7321 average F1**, using **5-fold stratified cross-validation**. Subject-independent CNN validation is not confirmed.
  - Treat as research experiment results, not production/medical performance or equivalent-protocol head-to-head benchmarks. Do not publish CNN best-fold metrics until inconsistent slide values are reconciled.
- Associated award: 융복합·ICT 활용 공모전 우수상 (2026-01-21).
- **Owner-confirmed relationship / remaining repository discrepancy:** `https://github.com/jae-ho93/yourbreath` is collaborator-owned and includes the competition-oriented extension. The relationship to the original study is now confirmed as follow-up development of the same project. The README's different team-leader/role descriptions must not replace the official original-study allocation. **PENDING_OWNER_CONFIRMATION:** exact personal PSBI implementation contributions, detailed follow-up code ownership/roles and whether the README's 10-minute recording protocol applies to specific original-study or follow-up experiments. The authoritative original report names Han Taehee as team leader responsible for analysis, visualization and reporting.
- Verified report-based research cases (문제 → 조치 → 배움):
  1. Survey/audio correspondence needed for usable training records → organized filename rules and metadata, reviewed survey-response/audio-label matching → learned the importance of cross-data consistency for analysis reliability. Do not invent a specific matching bug.
  2. Environmental recordings differed in noise/silent segments → organized before/after noise reduction outputs, SNR and silence-ratio QC results → learned to inspect input quality before model training. No measured denoising gain confirmed.
  3. Limited collected data required caution in generalization → visualized CV/metrics and distinguished model validation designs/results → learned to explain evaluation conditions and research limits alongside metrics. No additional debugging incidents or new performance results confirmed.
- **PENDING_OWNER_CONFIRMATION — publication/privacy:** the publicly visible collaborator repository contains CSV entries with participant-identifying filenames. Do not expose raw participant data, names, filenames, recording paths or private survey responses. Do not publish a portfolio repository link until collaborator permission and repository privacy have been reviewed. Do not modify the collaborator repository.
- **PENDING_OWNER_CONFIRMATION:** exact PSBI personal implementation scope; separation of competition materials and original-study materials; permitted final-presentation figure insertion and participant de-identification; GitHub publication/permission review; conflicting CNN best-F1 values; final wording/mobile QA. Additional personal troubleshooting only if needed after factual review. No fabricated charts, app screens, debugging incidents or new metrics.

## 6. Never guess

Do not infer employment history from academic projects, claim deployed apps when not deployed, invent model accuracy/test results, guess GitHub links, or turn written-exam pass into a completed certification. Ask user before publishing uncertain facts.
