// 2026-11-19 · ClickTheory 「Why Your Small YouTube Channel Isn't Growing」(2uxM8ifXcrg) — 요즘 터진 영상
// 8.9천 회, 채널 평소의 3.5배 (vidIQ 수집, 2026-11-12). 근거 = source.md
export default {
  title: '첫 1,000명은 테스트 기간이에요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'ClickTheory', title: "Why Your Small YouTube Channel Isn't Growing" },
  credit: '© ClickTheory',
  date: '2026-11-19', status: '검수완료',
  inkW: 900,     // 본문 48px 가장 긴 줄 — PNG로 잼
  blockW: 960,   // 48px 본문이 꺾이지 않게 상자 폭 넓힘
  lh: 1.62,      // 줄 간격 살짝 좁혀 위아래에 맞춤
  gapHead: 38,
  source: { channel: 'ClickTheory', video: 'https://www.youtube.com/watch?v=2uxM8ifXcrg' },
  post: `첫 1,000명은 숫자가 아니라, 날 알아보는 사람을 찾는 테스트 기간이래요.
구독자 1.9천 유튜버 ClickTheory가 작은 채널만 가진 강점을 정리했어요.
여러분은 지금 뭘 실험해 보고 계세요?

#유튜브초보 #작은채널 #구독자늘리기`,
  cards: [
    { type: 'noteCover', size: 66, title: '첫 1,000명은, ==테스트 기간==이에요' },
    { type: 'noteMap', items: ['작아서 [[유리해요|pink]]', '매번 [[바꾸지 마세요|blue]]', '[[1,000명|teal]]은 숫자가 아니에요', '넘어도 [[흔들려요|orange]]'] },
    { type: 'noteItem', no: '1', head: '작아서, 오히려 [[유리해요|pink]]', size: 48,
      text: '큰 채널은 이미 만든 이미지가 있어서\n갑자기 다 바꾸면 사람들이 떠나요.\n\n작은 채널은 [[잃을 게 없어요|blue]].\n주제·포맷을 마음껏 실험해도 괜찮대요.\n\n구독자 100명을 보고 "너무 작다"가 아니라\n"뭐든 [[해볼 수 있다|teal]]"고 생각하래요.' },
    { type: 'noteItem', no: '2', head: '매번, [[바꾸지 마세요|blue]]', size: 48,
      text: '영상 하나가 30회 나오면 썸네일을 바꾸고,\n다음이 20회면 주제를 바꾸고,\n쇼츠로, 또 다른 분야로 자꾸 옮겨요.\n\n이러면 [[뭐가 통하는지|orange]] 끝내 못 알아낸대요.\n\n첫 1,000명은 매주 터지라고 있는 게 아니라\n내가 뭘 잘 만드는지 [[찾는 시기|pink]]래요.' },
    { type: 'noteItem', no: '3', head: '[[1,000명|teal]]은, 숫자가 아니에요', size: 48,
      text: '영상 하나 보고 "이 사람 콘텐츠 좋다"\n생각하는 사람 10명이\n한 번 구독하고 사라진 1,000명보다\n[[낫다고 해요|blue]].\n\n한 사람이 날 알아보고, 다음 영상도 보고,\n그다음 주에도 찾아오면\n그게 진짜 [[시작|green]]이래요.' },
    { type: 'noteItem', no: '4', head: '1,000명 넘어도, [[영상은 흔들려요|orange]]', size: 48,
      text: '1,000명을 찍었다고 끝이 아니에요.\n그 이후에도 조회수 30회짜리 영상이\n나올 수 있다고 해요.\n\n구독자 수는 목표가 아니라\n[[찐팬을 늘려가는 과정|pink]]일 뿐이에요.\n\n다음 영상에서 \'내 콘텐츠를 좋아하는 한 사람\'을\n또 만드는 게 할 일이래요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
