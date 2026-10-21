# WallGuard — Verified Portfolio Brief (2026-10-21)

## Identity / naming (confirmed by project owner)

- **Portfolio project title:** IoT 기반 옹벽 안전 모니터링 시스템
- **Mobile application name:** WallGuard
- **ICEE:** related competition/project working label, **not a separate development project**.
- **Academic poster title:** 초정밀 기울기 계측 및 CCTV 연계형 스마트 옹벽 재난 대응 시스템
- **Project period:** 2026.05–2026.08 (portfolio/resume record; award later)
- **Personal role (confirmed earlier by project owner):** development across ESP32 firmware/sensor-module code, FastAPI/backend, mobile app. Does **not** mean the civil-engineering model experimentation was solely theirs.
- **Award:** 2026 IoTing Life: 융합 아이디어 경진대회 우수상, 2026-09-28, 경상국립대학교 공학교육혁신센터 (verified via application screenshot shared in earlier conversation).
- **Repository:** https://github.com/t-hee/retaining-wall-moniter (user-owned, private when checked 2026-10-21; `moniter` is the actual repo spelling).

## Project goals and multidisciplinary context (academic poster)

Periodic on-site retaining-wall inspection leaves time gaps. Team explored a system combining scale-model overturning experiments, IoT 3-axis tilt/rain sensing, a monitoring application and risk alerts. This is an interdisciplinary project; do not imply the mobile developer alone conducted all civil-engineering experiments.

### Civil engineering experiment — team/paper finding, not personal implementation claim

- 3 wall shapes: L, inverted L, inverted T; 2 nominal scales (3m and 7m) = 6 test cases.
- Artificial rainfall 33–133 mm/hr is described in the academic poster.
- Poster reports 4 of the 6 scale-model walls overturned (L and inverted-T at both sizes), with conspicuous Y-axis changes, and identifies 0.7 degrees as an experimental reference threshold.
- Cite and qualify these as findings in the team's **scale-model experiment**, not as universally validated on-site collapse prediction thresholds.
- The poster contains the full author list and institution names; obtain permission/confirm suitability before publishing a full copy or crops.

## System architecture — repository evidence

```text
SCL3300-D01 3-axis inclinometer + rain sensor
                    ↓ SPI/analog/digital signals
ESP32 firmware (startup baseline calibration, moving average,
               angle deltas + rain readings, JSON over Wi-Fi)
                    ↓ POST /api/v1/readings/esp32
FastAPI (ingestion, measurement sessions, server-side risk/alerts)
                    ↕
SQLAlchemy / Alembic / PostgreSQL (persistent-mode schema)
                    ↕
React Native + Expo + TypeScript (WallGuard app: wall list,
              details, readings/history, 5-level risk, alerts,
              session start/stop)
```

**Important implementation distinction:** one physical ESP32 is moved between registered walls. The backend associates incoming readings with the **currently active wall measurement session**; only one wall/session is active for that device at a time. The firmware knows the device ID, not each wall ID. With an active session, a valid ingestion may return 201 and be stored; without one, 202 and not stored. App home and detail refresh via approximately 7-second polling, **not WebSocket/push real-time**.

### Owner-confirmed physical integration — v1.1 factual correction

The project owner directly confirmed successful **physical sensor → FastAPI → database → WallGuard app** integration testing. Actual ESP32 sensor measurements were received by the backend, persisted in the database and retrieved/displayed in the mobile app in a **test environment**. This supersedes earlier uncertainty about the complete physical data path; it is not merely code-level or mock-only implementation.

Confirmed flow: physical ESP32 readings → FastAPI reception → DB persistence → WallGuard retrieval/display. Do not invent test counts, benchmark results, exact test devices, dates or debugging incidents. Functional integration success does not establish production cloud deployment, field safety validation, completed remote calibration or confirmed power-management features. Pending screenshots are pending presentation evidence, not a reason to revert the confirmed integration result to unverified.

### Risk levels (backend contract, provisional development thresholds)

| Representative tilt | App level |
|---|---|
| <= 0.1° | 안전 |
| >0.1° to <=0.3° | 주의 |
| >0.3° to <=0.5° | 위험 |
| >0.5° to <0.7° | 한계 |
| >=0.7° | 즉각 대응 |

Backend uses baseline-relative X/Y deltas when present (`max(abs(deltaX), abs(deltaY))`), and also considers changes, rain plus increasing tilt, and data freshness. Firmware diagnostic states are **not** the authoritative displayed risk. Threshold module explicitly calls these **provisional development values**, not production-validated civil-engineering safety criteria. Avoid claims of guaranteed prediction, safety certification, or validated early warning efficacy.

## Function ownership — user-confirmed vs team

**User-confirmed concrete software contribution** (including the owner's v1.1 confirmation):
- ESP32 firmware: SCL3300 readings, startup baseline calibration, moving-average processing, rainfall data handling and JSON transmission.
- FastAPI/backend: measurement ingestion, wall/session linkage, database persistence, risk classification and data retrieval.
- React Native / Expo app: wall management, recording/measurement sessions, risk display, history/graphs, alerts and API integration.
- These are personal software contributions. Civil-engineering experiments remain team research.

**Concrete repository-supported software capabilities (do not automatically claim sole personal ownership of each):**
- ESP32 SCL3300 sensor reading, rain detection, startup baseline calibration, moving-average smoothing, JSON POST.
- Wall CRUD, wall/device/measurement-session separation, start/stop/active-session APIs.
- PostgreSQL and Alembic models/migrations for devices/walls/sessions/readings/alerts.
- Server-side five-tier risk assessment, alert records, and offline/delayed-data handling.
- Expo app's wall list, detail history/graph, risk labels, alerts and API-backed polling.
- Remote-calibration API/state machine is described in backend docs; **completed remote-calibration/production-cloud integration remains unconfirmed**, separately from the successful test-environment physical data integration above.

## Poster vs source code: critical claims to separate

1. **CCTV:** It appears in the academic poster title, but the poster conclusion describes video/deep-learning integration as a **future extension**. Do NOT list working CCTV anomaly detection as delivered.
2. **Battery/solar/Deep Sleep:** Hardware and power-saving strategy are described on the poster, but the reviewed firmware sketch does not evidence deployed deep-sleep control, and backend payload docs say battery is not currently measured. Present as the experimental/proposed system context; confirm practical implementation before claiming personally coded power management.
3. **Noise filtering:** Poster mentions moving average/Kalman; the reviewed `.ino` clearly implements a moving-average buffer. Do not assert Kalman implemented in the current sketch without a verified alternative code version.
4. **Cloud:** Test-environment physical sensor/backend/DB/app integration is confirmed successful. Separately, `docs/cloud-deployment.md` is a deployment guide and says cloud resources are not created automatically; production HTTPS/cloud deployment remains unconfirmed. Do not infer a fully deployed internet-accessible ESP32→Render→Supabase system from the integration test.
5. **Real-time:** The poster uses the expression, but the app README documents 7-second **polling**; phrase as '주기적 갱신 기반 모니터링' rather than instant push.
6. **Risk threshold:** Poster experimental interpretation and backend's provisional operational bands must not be presented as independently field-validated safety standards.

## Suggested detailed page (projects/wallguard.html)

1. **Hero:** WallGuard / 옹벽 안전 모니터링 시스템; highlight successful physical data integration in a test environment; 2026.05–08 and later award. No public source button while private.
2. **Problem & team research:** gaps in periodic manual checks; concise poster-derived team experiments. Label the 6 experiments and results as team research, separate from own development.
3. **My Contributions:** show the concrete owner-confirmed firmware, backend/DB/session/risk and app responsibilities above. Explain cross-layer role, not solo ownership of civil-engineering experiments.
4. **Data flow / architecture:** sensor → firmware → FastAPI → DB → app. Add visually distinct active-session assignment for the single movable device.
5. **Main Features:** X/Y/Z and rain readings; risk in 5 levels; history & alerts; registering walls and session lifecycle. Mark implemented vs mock/guide where necessary.
6. **Engineering Decisions:** distinguish (a) hardware move & calibration/session mapping, (b) server-authoritative risk labels, (c) polling and historical context.
7. **통합 구현 및 검증:** replace the unverified troubleshooting placeholder with a compact physical readings → FastAPI → DB → app flow and the confirmed test-environment success. Do not invent troubleshooting incidents or resolved bugs; specific migration/network/calibration resolutions remain unconfirmed.
8. **Experiment results:** poster data summarized, labeled team experiment, 6 cases/4 overturning, not field-tested predictive performance.
9. **Outcome:** highlight integration-test success and IoTing Life 우수상 (2026-09-28); distinguish functional testing from production deployment and field safety validation. Consolidate the safety-threshold disclaimer near the risk table. Repo remains private, without a public source-code button. Academic poster can be featured only after rights approval.

## Final screenshot/media TODO (do not demand now)

- Emulator: wall list/home; wall detail current X/Y/Z and rain condition; five-level risk state; history chart; alert view; measurement start/stop/active session; calibration screens if functional.
- Hardware: ESP32 + SCL3300 + rain sensor assembled; experimental wall model and mounted device, respecting lab/teammate photo permissions.
- Capture the already confirmed physical test path: real sensor reading, backend reception, persisted DB record and matching app display, using public-safe evidence. Exact devices/test counts remain unspecified; do not invent them.
- Architecture diagram created using verified code flow; optional cropped plot/table and experiment diagram from poster if approved.
- Ensure device tokens, Wi-Fi details, internal IPs, names/addresses and experimental personal data are not visible.

## Questions to confirm before writing first-person troubleshooting or deployment claims

- What additional test-setup details and public-safe captures can document the already confirmed physical sensor/backend/DB/app test? General physical integration success is confirmed and is no longer an open question.
- What specific technical problem did the owner personally troubleshoot, and how was it resolved (particularly Alembic migration, calibration or networking)?
- Which poster photos/figures and academic work can be shared on a public portfolio?

## Source provenance

- User-provided one-page KSCE 2026 academic poster; poster is evidence of team research, **not individual ownership**. The source filename is omitted from public documentation for privacy.
- GitHub `t-hee/retaining-wall-moniter` README, `backend/README.md`, `backend/app/services/risk.py`, `backend/app/core/thresholds.py`, `firmware/RetainingWallMonitor/README.md`, `firmware/RetainingWallMonitor/RetainingWallMonitor.ino`, `src/hooks/use-focus-polling.ts`, `docs/cloud-deployment.md`, verified 2026-10-21.
- User's prior ICEE/WallGuard conversations and 2026 application screenshot for personal role, project dates and award.
- Direct project-owner v1.1 confirmation: successful complete physical ESP32 → FastAPI → DB → WallGuard retrieval/display in a test environment, plus the concrete personal software contributions listed above. This supersedes earlier integration-status uncertainty.
