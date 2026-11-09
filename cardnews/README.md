# 카드뉴스 시스템 — 매일 1개 (인스타·스레드·유튜브 커뮤니티)

규칙의 단일 출처는 `wiki/`(시작은 `wiki/0-INDEX.md`), 작업 순서는 `CLAUDE.md`.

- 규격: 1080×1080 정방형, 정지 PNG(모션 없음)
- 기본 테마: 노트·고딕 (`template/note.mjs` + 덱에 `font: 'pretendard'`)
- 렌더: `node cardnews/template/render.mjs cardnews/decks/<폴더>`
- 대시보드: `node cardnews/dashboard/build.mjs` → `dashboard/index.html`
- 올리기 전: 덱 폴더 `source.md` 사실 체크 7개 전부 `[x]` (`wiki/6-사실-체크.md`)
