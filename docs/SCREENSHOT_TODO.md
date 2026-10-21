# Final project captures — TODO

Status checkpoint (2026-10-22): first-pass pages **DONE**; final captures **PENDING**; rights, private data and publication decisions **NEEDS_OWNER_INPUT**. Priorities and the safe-save gate are tracked in [FINAL_REVIEW_TODO.md](FINAL_REVIEW_TODO.md). Pending captures do not undo confirmed project tests.

All entries below are capture plans, not claims that the screen or flow has been verified. Use genuine app/emulator captures only. No generated app previews, invented data presented as results, or copied repository assets.

## Capture process
- Run the actual project in an available simulator/emulator; record platform, device profile, app version/revision if available, and capture date after capture. Do not guess these values.
- Capture readable portrait screens at consistent dimensions within each project. Keep original files and review them before adding responsive portfolio versions.
- Use public-safe test accounts and data; exclude private contact details, tokens, local configuration and system notifications. Review teammate names and third-party image permissions before public use.
- Capture only implemented flows. Mark unavailable screens as pending rather than substituting a mockup. A screenshot or successful build does not establish a fully verified physical-device flow.
- Add files and update page captions only after the real captures are supplied. The filenames below describe needed subjects, not existing assets or working URLs.

## ReWear
- [ ] **NEEDS_OWNER_INPUT** — Deferred screenshot replacement: `home.png`, `closet.png` and `lounge.png` remain untouched locally and are ignored by exact paths. ReWear uses neutral placeholders with no live references to those originals. Confirm public-safe identities/images and sharing rights before adding approved captures later.
- Existing supplied images: `assets/images/rewear/home.png`, `closet.png`, `lounge.png`. Preserve originals; review privacy and third-party image permissions before publication.
- [ ] **PENDING** — Final home, wardrobe and calendar captures.
- [ ] **PENDING** — Local, Kakao and Google authentication screens, with no private account details. Record only actually observed login outcomes.
- [ ] **PENDING** — Camera/gallery image-input flow, using approved sample clothing labels.
- [ ] **PENDING** — My Forest tab: show the structure/UI; caption the user's contribution as design of the overall structure/UI, not all game logic.
- [ ] **PENDING** — Recycling/upcycling page: keyword-based YouTube search and favorites, using genuine results shown by the app.
- [ ] **PENDING** — Care-label recognition flow using a real label. Do not infer model accuracy from a capture.
- [ ] **PENDING** — Refresh lounge only if a new genuine capture is available; label it as a team-level community feature.

## MeetFit
No screenshots have been supplied. All MeetFit gallery areas currently remain neutral TODO placeholders.
- [ ] **PENDING** — Meeting creation, join request and approval.
- [ ] **PENDING** — Capture the **12-step card-based meeting creation wizard**: representative input cards with progress tracking, previous/next navigation, final review and editing a previous step. Use actual step labels/order; do not invent all twelve screens.
- [ ] **PENDING** — Availability entry and calendar.
- [ ] **PENDING** — Recommendation settings: minimum attendance, required-attendee hard/soft mode, unavailable-time handling, configurable penalties, avoided time ranges and candidate count. Show only actual controls; do not imply arbitrary weights for every scoring criterion.
- [ ] **PENDING** — Actual recommended schedule results; distinguish deterministic rule/scoring output from optional Gemini explanations.
- [ ] **PENDING** — Capture public-safe scenarios using the **four demo accounts** already used for testing: required attendees, hard/soft mode, minimum attendance, schedule conflicts and permission restrictions. Record which cases were actually captured; keep automated backend test evidence separate from scenario screenshots.
- [ ] **PENDING** — DB-stored notifications displayed after polling; do not label these push/WebSocket notifications.
- [ ] **PENDING** — Record what was observed in the emulator and any incomplete steps separately. Full physical-device UI flow remains unverified.
- Do not depict fully E2E-verified Kakao login or production deployment. Demo-account scenarios do not establish complete Kakao-login E2E coverage. Historical checks (46 backend tests, TypeScript pass, Expo Doctor 18/18, iOS simulator build success) are not newly run checks or full device validation.
- `t-hee/MeetFit` is private: no public repository/source link and no visibility change. Keep existing neutral gallery placeholders until real captures are provided.

## CareMate
No screenshots have been supplied. `projects/caremate.html` uses three honest placeholders; replace them only with genuine emulator captures.
- [ ] **PENDING** — Senior screen showing larger typography, stronger contrast, simple instructions and the prominent voice-chat button.
- [ ] **PENDING** — Emergency-contact controls in their actual context, visibly distinct from daily actions. Do not place real calls or display private contacts for a portfolio capture.
- [ ] **PENDING** — Guardian dashboard UI summarizing medication, schedules, alerts and location, using public-safe test information. Do not expose health data, contacts or real personal locations.
- [ ] **PENDING** — Record senior/guardian navigation with actual implemented labels. A capture documents the UI, not measured accessibility, medical effectiveness or completed usability testing.
- [ ] **PENDING** — Record capture context and whether the screen matches the academic project scope. The team-owned CareMate repository includes later additions; do not imply later AI training, Siri/widgets, security work or model performance are the user's contributions.
- Personal scope: frontend lead and senior-friendly UI/guardian dashboard development, plus backend/API integration participation. Caption team AI features separately; do not credit the user with the entire backend or database.

## WallGuard
Primary source: `docs/WALLGUARD_BRIEF.md`. WallGuard is the React Native / Expo / TypeScript app within the IoT retaining-wall monitoring system. `projects/wallguard.html` retains honest emulator/hardware placeholders.
- **Confirmed result:** the project owner successfully tested actual ESP32 measurements → FastAPI reception → database persistence → WallGuard app retrieval/display in a test environment. Captures are still pending; the integration is not mock-only or unverified. Production-cloud deployment and field safety validation remain separate, unconfirmed scopes.
- [ ] **PENDING** — Document the already successful physical data flow with public-safe sensor/ingestion, persisted DB record and corresponding app display captures. Use only genuine evidence; do not invent device models, test counts, benchmarks or test incidents.
- [ ] **PENDING** — Wall list/home and wall registration, using public-safe wall names.
- [ ] **PENDING** — Single-device/multiple-wall workflow: select a registered wall, start/stop a measurement session, show the active session, then switch to another wall. Do not imply simultaneous sessions for one ESP32.
- [ ] **PENDING** — Detail view: current X/Y/Z and rain readings, five-level risk label, history chart and alert records. Label mock/test readings explicitly. Captures do not validate production safety thresholds; app refresh uses about 7-second polling, not push/WebSocket.
- [ ] **PENDING** — If evidence is available, document active-session ingestion/storage separately from no-active-session behavior (201 stored vs 202 not stored). Do not expose device tokens or infer physical integration from a response alone.
- [ ] **PENDING** — Hardware: real ESP32 + SCL3300-D01 + rain-sensor assembly, and device mounted on the experimental wall model. Confirm lab/teammate permissions before adding photos.
- [ ] **PENDING** — Calibration screens only if functional and verified; record emulator/mock vs physical-device scope. Do not imply completed remote firmware/cloud integration.
- [ ] **PENDING** — Approved team poster figures or experiment photos only after rights review. Caption the 6 scale-model cases, 4 overturning observations and 0.7° experimental reference as team research, not personal experiments or field prediction accuracy.
- Exclude Wi-Fi credentials, internal IPs, tokens, personal addresses and lab/participant data. No fabricated CCTV output, battery measurements, Kalman/Deep Sleep implementation or cloud-integration proof.
- Keep the repository private and omit public source-code links. Preserve software implementation, provisional risk values and future extensions as separate claims.

## CampusCare
Solo native Kotlin/Android XML app for university students, 2026.03–06. **Confirmed runtime evidence:** Android Studio emulator execution, local notification testing and a classroom laptop demonstration succeeded. Separate physical-phone testing and reboot testing are not confirmed. `projects/campuscare.html` retains three neutral screenshot placeholders; pending captures do not undo the confirmed tests.
- [ ] **PENDING** — Capture genuine 8-question lifestyle onboarding and progress indication, plus profile-based checklist/daily goal configuration.
- [ ] **PENDING** — Capture routine completion score, streaks, growth stages and badges using genuine public-safe test records. Caption the “health score” as checklist completion, not a medically validated health indicator.
- [ ] **PENDING** — Capture the home screen's time-of-day filters, profile-initialized routines and independent checklist-visibility/notification settings. Do not imply filtering changes the daily score.
- [ ] **PENDING** — Capture calendar CRUD, past-date record editing, meals/exercise/mood/other selected habits and daily reports. Use public-safe sample schedules and record actual emulator context after capture.
- [ ] **PENDING** — Capture monthly average score, recorded days, recording rate, weekly score trends and badges/feedback. These are real app report fields; do not fabricate populated records or performance claims.
- [ ] **PENDING** — Capture per-routine notification toggles, multiple schedules and permission handling. Capture the drinking-event flow and local reminders at -1h, event time and +2h using actual app behavior. Prior local-notification testing is confirmed; do not invent timing precision or new test counts.
- [ ] **PENDING** — BootReceiver rescheduling is code-supported; describe a reboot test only if independently observed and confirmed later. Do not infer a reboot-test success from the emulator notification test.
- [ ] **PENDING** — Verify each captured screen against the actual implementation before replacing placeholders; do not fabricate progress, scores, test results or personal data.
- Local persistence uses SharedPreferences; do not depict a backend, Room database, cloud sync or AI recommendation as implemented. Repository remains private, without a public source-code button.
- Use final Android emulator captures only; do not substitute PowerPoint placeholder images for app screenshots. Confirm captions reflect actual onboarding, home, calendar, daily/monthly reports and notification settings.
- **Owner confirmation required:** separate physical-phone testing, reboot testing, any measured/external-user outcomes and optional genuine troubleshooting details. Preserve the confirmed emulator, local-notification and classroom-demo facts. Repository publication remains undecided and the source stays private/unlinked.

## 너의 숨소리
- [ ] **PENDING** — Request genuine research figures, analysis/visualization outputs or approved report excerpts. Do not invent an app/emulator screen for this research project.
- [ ] **NEEDS_OWNER_INPUT** — Confirm permission and anonymize participant information before inclusion. Do not add unverified prediction metrics.
- `projects/yourbreath.html` has four neutral figure slots; use actual anonymized figures from the final research presentation, not generated charts or mobile screenshots.
- [ ] **NEEDS_OWNER_INPUT** — Before/after noise reduction waveforms: confirm selection and permission, then remove subject identifiers, recording filenames/paths and private responses.
- [ ] **PENDING** — Audio feature and quality-analysis graphs: review MFCC/Chroma/Spectral Centroid/ZCR, YAMNet feature structures, SNR/silence-ratio evidence against the actual approved figures. Do not invent values or imply all plots exist before receipt.
- [ ] **PENDING** — Traditional ML evaluation chart: verify subject-group-based GroupKFold labeling and the final presentation's approximate Random Forest accuracy 0.82, F1 0.89 and AUC 0.75. Do not label these medical or production results.
- [ ] **PENDING** — CNN fold-level chart: reconcile inconsistent best-F1 values before publication. Preserve the reported 0.7321 average F1 / 5-fold stratified CV; do not label it subject-independent without confirmation.
- [ ] **NEEDS_OWNER_INPUT** — Verify consent, figure captions and de-identification of all selected assets before public display. No participant names, identifying filenames, raw CSV rows, private questionnaire responses or recording paths.
- Owner confirmed the academic study → competition follow-up relationship: PSBI quantification was considered early and developed further for competition entry. Keep original academic ML/CNN charts separate from PSBI follow-up analysis; PSQI questionnaire scores are not PSBI outputs.
- [ ] **PENDING** — Identify whether each supplied figure belongs to the original 2025 academic study or competition follow-up materials before captioning it. Preserve the four current figure slots until genuine final-presentation figures are inserted.
- **PENDING_OWNER_CONFIRMATION:** personal PSBI code contributions, detailed follow-up roles and the experiment scope of any 10-minute recording protocol. Do not apply conflicting README leadership/roles to the original study or expose/link the collaborator repository before permission/privacy review.
