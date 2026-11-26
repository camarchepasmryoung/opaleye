// 2026-12-03 · First Draft 「I tried YouTube for 6 months. Here's what happened」(cDzcOwsKlts) — 요즘 터진 영상
// 1.66만 회, 채널 평소의 1.9배 (vidIQ 아웃라이어, 2026-11-26 수집). 근거 = source.md
export default {
  title: '조회수 100만, 그중 86%가 영상 1개였어요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'First Draft', title: "I tried YouTube for 6 months. Here's what happened" },
  credit: '© First Draft',
  date: '2026-12-03', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'First Draft', video: 'https://www.youtube.com/watch?v=cDzcOwsKlts' },
  post: `6개월 만에 조회수 100만, 그런데 86%가 영상 딱 1개였대요.
17살 유튜버 First Draft가 직접 공개한 애널리틱스와 안 통했던 것·통했던 것을 정리했어요.
여러분 채널에도 '혼자 다 하는' 영상이 있나요?

#유튜브분석 #유튜브초보 #애널리틱스`,
  cards: [
    { type: 'noteCover', size: 68, title: '조회수 100만… 그런데 ==영상 1개==가 다 했어요' },
    { type: 'noteMap', items: ['[[1개 영상|pink]]이 86%', '안 통했던 [[3가지|blue]]', '통했던 [[3가지|teal]]'] },
    { type: 'noteItem', no: '1', head: '[[1개 영상|pink]]이 86%', size: 48,
      text: '17살 First Draft는 6개월 만에\n채널 조회수 100만을 넘겼어요.\n\n그런데 그중 [[86%|blue]]가 영상 딱 1개에서\n나왔다고 직접 밝혀요.\n\n터진 그달엔 조회수 34만 2천 회,\n구독 3천 명이 늘었대요(본인 애널리틱스 화면).' },
    { type: 'noteItem', no: '2', head: '안 통했던 [[3가지|blue]]', size: 48,
      text: 'SEO·태그 신경 쓰기 — 가장 잘된 영상에서\n태그·해시태그 비중은 [[3% 미만|pink]]이었대요.\n\n업로드 직후 스튜디오 계속 새로고침하기\n— 숫자가 안 오르니 기분만 나빠졌대요.\n\n기획보다 편집에 힘쓰기 — 가장 잘된 영상은\n[[편집이 제일 엉성했는데|orange]]도 터졌다고 해요.' },
    { type: 'noteItem', no: '3', head: '통했던 [[3가지|teal]]', size: 48,
      text: '한 사람에게 말하듯 찍기 — 발표하듯 읽지 않고,\n[[보는 사람 한 명|blue]]에게 말하듯 했대요.\n\n썸네일 3개씩 만들어 테스트하기\n— 못할 것 같던 쪽이 되려 잘됐다고 해요.\n\n처음 3개월은 [[숫자를 신경 끄기|green]]\n— 구독자가 쌓이는 데 시간이 걸린다고 봐요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
