# Aside에 줄 프롬프트

매주 자동 생성 — 손으로 쓰지 않는다.
1. `node cardnews/aside.mjs 2026-11-16 2026-11-22` (검수완료 덱만, 이미지 복사 + `HANDOFF_aside_prompt.txt` 생성)
2. `aside --permission full-access "$(cat cardnews/HANDOFF_aside_prompt.txt)"`
