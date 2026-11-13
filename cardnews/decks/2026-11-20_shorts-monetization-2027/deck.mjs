// 2026-11-20 · 뉴스 — 유튜브 쇼츠 크리에이터 풀 수익 기준 변경 (2027-02-01 시행, 2026-08-10 공지). 근거 = source.md
export default {
  title: '쇼츠 수익, 1,000만 회를 못 채우면',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'YouTube 고객센터', title: 'YouTube Shorts monetization policies' },
  credit: '© YouTube',
  date: '2026-11-20', status: '초안',
  inkW: 900,     // 본문 48px 가장 긴 줄 — PNG로 잼
  blockW: 960,   // 48px 본문이 꺾이지 않게 상자 폭 넓힘
  lh: 1.62,      // 줄 간격 살짝 좁혀 위아래에 맞춤
  gapHead: 38,
  source: { channel: 'YouTube 고객센터', video: 'https://support.google.com/youtube/answer/12504220?hl=en' },
  post: `2027년 2월 1일부터 쇼츠로 돈 벌려면 90일마다 1,000만 조회수를 채워야 해요.
유튜브 고객센터 공지를 바탕으로, 바뀌는 쇼츠 수익 기준을 정리했어요.
여러분 쇼츠는 최근 90일 조회수가 얼마나 되세요?

#유튜브쇼츠 #유튜브수익화 #유튜브정책`,
  cards: [
    { type: 'noteCover', size: 62, title: '쇼츠 수익, 1,000만 회 못 채우면 ==멈춰요==' },
    { type: 'noteMap', items: ['뭐가 [[바뀌나|pink]]', '[[매달|blue]] 다시 검사', '못 채우면 [[이렇게|teal]]', '새로 [[시작하는 사람|orange]]은'] },
    { type: 'noteItem', no: '1', head: '2027년 2월부터, [[1,000만 회|pink]]', size: 48,
      text: '유튜브 고객센터 공지에 따르면,\n2027년 2월 1일부터 쇼츠 크리에이터 풀\n수익을 받으려면 최근 [[90일 동안|blue]]\n유효 쇼츠 조회수 1,000만 회를\n채워야 한대요.\n\n2026년 8월 10일에 발표된 변경이고,\n기존 쇼츠 파트너에게 적용돼요.' },
    { type: 'noteItem', no: '2', head: '한 번이 아니라, [[매달|blue]] 검사', size: 48,
      text: '한 번 통과했다고 끝나는 게 아니에요.\n\n매달 \'최근 90일 유효 조회수 1,000만 회\'를\n[[다시 확인한다|teal]]고 알려졌어요.\n\n한 달 기준을 못 채우면 그달 쇼츠 수익만\n멈추고, 다음 90일 동안 다시 채우면\n[[자동으로 재개된다|pink]]고 보도됐어요.' },
    { type: 'noteItem', no: '3', head: '못 채우면, [[이렇게 돼요|teal]]', size: 48,
      text: '기준을 못 채워도 유튜브 파트너 프로그램\n자체에서 빠지는 건 아니에요.\n\n롱폼 영상 수익은 [[그대로 받고|blue]],\n쇼츠 크리에이터 풀 수익만 멈춘대요.\n\n신청을 다시 할 필요도 없이\n조회수가 다시 쌓이면 [[자동으로|orange]]\n돌아온다고 해요.' },
    { type: 'noteItem', no: '4', head: '새로 [[시작하는 사람|orange]]은', size: 48,
      text: '지금 처음 파트너 프로그램에 들어가려면\n구독자 1,000명과 함께 최근 1년\n[[시청시간 8,000시간|blue]] 또는 최근 90일\n[[쇼츠 조회수 2,000만 회|pink]] 중 하나가\n필요하다고 보도됐어요.\n\n이 수치는 외신 보도 기준이고,\n고객센터 원문으로는 [[아직 확인 전|orange]]이에요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
