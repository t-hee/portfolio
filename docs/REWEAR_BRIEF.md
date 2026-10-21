# ReWear detail page brief (verified sources)

## Project identity
- Name: Re:wear / ReWear
- Period: 2025-09 to 2025-12 (existing portfolio facts)
- Team project; mobile clothing-care and sustainable fashion platform.
- Repository (team member-owned): https://github.com/juuu-sung/Re-wear-project
- Team repo is for reference/linking, **not** the portfolio repo. Do not modify it.

## Verified user contributions
- Mobile authentication functionality and frontend development for home, wardrobe and calendar (user-confirmed).
- Designed the overall structure and UI of the gamified **My Forest / 나의 숲** tab. Do not claim ownership of all game logic.
- Developed the recycling/upcycling page, including keyword-based YouTube video search and favorites.
- YOLOv8 laundry care-label symbol detection model development, including real label-photo collection with others' help and personal symbol annotation using Korean standards.
- Partial backend implementation and backend/database integration.
- These are verified responsibility areas, not proof of sole authorship of every related screen, module or code change. Do not attribute the entire application, EfficientNet-B0 model, Gemini integration, community module or all My Forest game logic to the user.

## Verified problem-solving cases
Use concise Korean **문제 → 행동 → 배움** entries on the page. These details are user-confirmed; avoid extra causes, metrics or outcomes.

1. **Korean care-label training data:** insufficient relevant training data → collected real clothing-label photos with help from others and personally annotated symbols using Korean standards → learned the ML data preparation workflow. No confirmed dataset size, accuracy or performance improvement.
2. **Git collaboration:** uploaded media, local config and development data were shared unintentionally → improved ignored/tracked file management with the team, reducing environment-related confusion → learned to distinguish shared source from local files and check tracking state. Do not infer an exact root cause or claim `.gitignore` fixes DB consistency or removes Git history.
3. **React Native UI:** AI-generated layouts differed in simulators → manually debugged spacing, alignment, font sizes and colors → learned to review generated layouts on simulator screens and refine visual consistency. No exact rendering cause or quantified outcome confirmed.

## Team project architecture (not all individually authored)
- React Native / Expo mobile application.
- FastAPI backend with PostgreSQL.
- YOLOv8 care-label recognition; EfficientNet-B0 garment analysis; Gemini API to generate care instructions (documented in shared repo README and presentation).
- Core features: care-label photo/selection, closet, wear/wash calendar and reminders, reuse/upcycling, community and the gamified My Forest tab. Keep overall team architecture separate from the verified personal scope above.
- Repo README may not match current configuration/package versions; avoid hardcoding SDK versions or claims of full deployability. Document prototype/demo status accurately.

## Image captions
- `assets/images/rewear/home.png`: Home — laundry notifications, photo/manual care-label lookup, garment thumbnails, weekly calendar.
- `assets/images/rewear/closet.png`: Closet — categories and registered garment cards.
- `assets/images/rewear/lounge.png`: Lounge — user posts, likes/comments and fashion sharing.
These originals remain local and are excluded by exact `.gitignore` paths pending privacy and rights review. The page uses neutral phone-frame placeholders; replace them only with approved captures. Do not use image search or fabricate screenshots.

## Awards (verified against user's latest application screenshot)
- 2025학년도 캡스톤디자인 경진대회 — 대상, 2026-01-07, 경상국립대학교 IC-PBL센터.
- 2025년 캡스톤디자인 경진대회 — 장려상, 2026-02-05, 경상국립대학교 RISE 사업단.
Two awards belong to the same ReWear project.

## Page plan
1. Breadcrumb/back to homepage.
2. Hero with project title, concise Korean problem/solution summary, role, period, awards, repository link, and phone-frame placeholders until actual captures are approved.
3. Overview and user problem.
4. My contributions: show the verified responsibility areas above; distinguish My Forest structure/UI design from game logic and personal contributions from team-wide implementation.
5. Three app screens with accurate descriptive captions.
6. Architecture diagram (app / FastAPI / DB / AI inference / Gemini API): mark as team architecture.
7. Problem-solving section: the three verified cases above, using Problem → Action → Lesson (문제 → 행동 → 배움). Do not add unverified tests, causes, metrics, performance results or lessons.
8. Awards with verified dates; omit broader personal reflections until confirmed. The specific lessons in the three problem-solving cases are confirmed.
9. Back to projects.

## Publication checklist
- Screenshots show a teammate/test account name and third-party garment images. Review public-display permission, privacy and image rights before making the website live.
- Do not rehost or copy code/assets from the team repo unless permission/license is confirmed. Linking to the repo is fine.
- No made-up authorship, metrics, completed features, or deployment claims.
