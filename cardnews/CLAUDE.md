# 카드뉴스 — 매일 1개 (인스타·스레드·유튜브 커뮤니티)

목표: 주 7개를 한 번에 만들고, 시영이 하루 검수 → 매일 아침 발행.

## 만들기 전에 반드시
1. `wiki/0-INDEX.md` → `wiki/1-기획-규칙.md`·`wiki/2-디자인-규칙.md`를 읽는다.
2. 한 덱 = 한 주제. 장마다 그림 하나. 글은 레퍼런스 분량.

## 다 만든 뒤 반드시 — 사실 체크
- 덱 폴더 `source.md`(카드 문장 ↔ 원문 대조표) + `wiki/6-사실-체크.md` 체크리스트 7개를 전부 `[x]`로. 하나라도 남으면 `검수완료` 금지.
- 렌더러가 미완이면 경고, 대시보드에 `사실 체크 미완` 표시.

## 시영 피드백이 오면
- 원문 요지를 `wiki/9-피드백-로그.md`에 날짜로 적고, 다시 쓰일 규칙은 `wiki/1~4`에 올린다.

## 경로
| 경로 | 무엇 |
|---|---|
| `wiki/` | 카드뉴스 규칙 (LLM 위키) |
| `template/note.mjs` (+ `font: 'pretendard'`) | ★기본 테마 노트·고딕. `glass.mjs`·`paper.mjs`는 보관 |
| `template/render.mjs` | 덱 → PNG |
| `decks/YYYY-MM-DD_<주제>/` | 덱 하나 (`deck.mjs` · `assets/` · `out-glass/` · `captions.md`) |
| `dashboard/` | 주간 대시보드 + 넘겨 보기 뷰어 |

## 명령
- 렌더: `node cardnews/template/render.mjs cardnews/decks/<폴더>` (덱의 `theme` 사용, `--theme`로 덮어쓰기)
- 대시보드 갱신: `node cardnews/dashboard/build.mjs`
- Aside 예약(원클릭): `node cardnews/aside.mjs <시작일> <끝일>` → 검수완료 덱 이미지를 `~/.aside/u/0/cardnews_upload/`로 복사 + `HANDOFF_aside_prompt.txt` 생성 → `aside --permission full-access "$(cat cardnews/HANDOFF_aside_prompt.txt)"`. 같은 날짜에 덱이 2개면 멈춘다
- 글꼴은 `template/assets/PretendardVariable.woff2`(저장소 안). 못 불러오면 render.mjs가 멈춘다
