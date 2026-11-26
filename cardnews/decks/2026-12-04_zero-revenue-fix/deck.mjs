// 2026-12-04 · AI Biz PT 「유튜브 자동화, 얼굴 없는 역사 채널로 누적 5억 6천만 원 넘게 — 구독 10만에 수익 0원이던 사람이 바꾼 두 가지」(rNFO81-3oEI) — 국내 요즘 터진 영상
// 1.12만 회, 채널 평소의 1.7배, 시간당 348회 (vidIQ 아웃라이어, 2026-11-26 수집). 근거 = source.md
export default {
  title: '구독 10만, 수익 0원 → 바꾼 두 가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'AI Biz PT', title: '유튜브 자동화, 얼굴 없는 역사 채널로 누적 5억 6천만 원 넘게' },
  credit: '© AI Biz PT',
  date: '2026-12-04', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'AI Biz PT', video: 'https://www.youtube.com/watch?v=rNFO81-3oEI' },
  post: `구독 10만, 조회 2,900만인데 수익은 0원이었던 유튜버 이야기예요.
AI Biz PT가 소개한 얼굴 없는 채널 사례, 판을 바꾼 두 가지를 정리했어요(수익 숫자는 본인 공개 기준).
여러분 채널은 조회 대비 구독, 어느 정도인가요?

#유튜브자동화 #얼굴없는유튜버 #유튜브수익화`,
  cards: [
    { type: 'noteCover', size: 70, title: '구독 10만인데 수익 ==0원==이었대요' },
    { type: 'noteMap', items: ['[[남의 영상|pink]] 모음의 함정', '판 바꾼 [[두 가지|blue]]', '본 숫자는 [[조회 대비 구독|teal]]'] },
    { type: 'noteItem', no: '1', head: '[[남의 영상|pink]] 모음의 함정', size: 48,
      text: '얼굴 없는 유튜버 A씨(AI Biz PT 소개 사례)는\n웃긴 영상 모음 채널로 시작했어요.\n\n구독 10만, 조회 2,900만 회를 넘겼지만\n수익화는 끝내 [[안 됐대요|blue]].\n\n이유는 본인 말로 "남의 영상이 모아 준\n조회"였기 때문— 채널은 결국 [[6,000달러|orange]]에\n팔았다고 해요(약 840만 원, 본인 공개 기준).' },
    { type: 'noteItem', no: '2', head: '판 바꾼 [[두 가지|blue]]', size: 48,
      text: '역사 채널로 옮기며 바꾼 건 두 가지였어요.\n\n하나, 이미 터지는 [[주제|pink]]로 옮기기\n(아웃라이어 점수·시간당 조회수로 고름).\n\n둘, [[대본|green]]을 고치기 — 조회는 늘어도\n구독이 안 붙으면 "이야기가 안 붙잡았다"는\n신호로 보고 대본부터 다시 썼대요.' },
    { type: 'noteItem', no: '3', head: '본 숫자는 [[조회 대비 구독|teal]]', size: 48,
      text: '영상이 3만 2천 회를 찍었을 때\n구독자는 겨우 [[31명|pink]]이었대요.\n\n보통은 여기서 썸네일을 바꾸지만,\nA씨는 [[평균 시청 시간|blue]]을 봤대요.\n\n대본을 고친 다음 영상은 7만 회에\n구독 763명 — 역사 채널은 지금까지\n[[누적 40만 달러|orange]](약 5억 6천만 원, 본인 공개 기준)래요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
