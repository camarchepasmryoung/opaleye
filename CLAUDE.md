# 흰지로 전체 자동화 — 터진 영상 → 주 5편 (나만 쓰는 뷰트랩)

목표: 일주일에 롱폼 5편. 시영은 결과를 검토하고, 경험 자리를 채우고, 하루에 몰아서 촬영만 한다.
"주간 배치 돌려" / "0단계부터" / "이번 주 5편" → 스킬 `weekly-batch`(`.claude/skills/weekly-batch/SKILL.md`)를 그대로 따른다.

## 구조
| 경로 | 무엇 | 누가 고치나 |
|---|---|---|
| `config/channels.json` | 레퍼런스 채널(국내·영미·일본·대만) | 시영·Claude (url만 넣으면 id 자동) |
| `config/settings.json` | 배수 기준(5배/10배)·기준선·권역별 최소 조회수 | 시영 |
| `config/방향필터.md` | 우리 채널에 맞는 주제 기준 — 필터의 단일 출처 | 시영 |
| `pipeline/*.py` | 수집·발굴·국내 확인·자막·대시보드 (AI 토큰 0) | Claude |
| `data/` | 수집 결과(outliers·fit·kr_check·자막) | 스크립트 |
| `batches/YYYY-Www/` | 주간 산출물 — 편마다 1_패키징·2_요약·3_대본 | Claude |
| `dashboard/index.html` | 검증 대시보드(배수·구독자·국내 사례) | build_dashboard.py |
| `cardnews/` | 매일 카드뉴스 — 규칙 위키 `cardnews/wiki/`, 작업 전 `cardnews/CLAUDE.md` 먼저 | Claude |

## 규칙 원본 (읽기만)
- 채널 정체성·말투: `~/youtube-pd/youtube-pd/wiki/1-내-채널.md`
- 패키징: `~/youtube-pd/youtube-pd/wiki/3-패키징.md` + 노션 제목 라이브러리 `collection://33f54dd1-2578-45ee-8c67-dfe980206506`
- 대본: `~/youtube-pd/youtube-pd/wiki/대본규칙/` (카드·규칙집) + 검사기 `_tools/대본검사.py`
- 위 파일은 이 저장소에서 고치지 않는다. 시영 피드백은 siyoung-feedback-capture 라우터로.

## 안전
- 자막은 로그인·쿠키 없이 yt-dlp(원본 언어 자막만, 번역 자막은 429 차단) → 실패분만 vidIQ 자막 API. 시영 계정·브라우저를 쓰지 않으므로 계정 정지 위험 없음.
- API 키는 `.env`(git 제외). 하루 한도 20,000 units — 주간 배치 1회 약 4,000 units(수집 ~300 + 국내 확인 ~3,800). 채널 발굴(discover.py)은 +2,000, 필요할 때만.

## 대시보드
- 아티팩트: https://claude.ai/artifact/8MXpoEQoQDMvZNfp9bGEwq — 갱신은 `python3 pipeline/build_dashboard.py` 뒤 Artifact publish에 `url`로 이 주소(다른 대화에서도 같은 주소 유지)
