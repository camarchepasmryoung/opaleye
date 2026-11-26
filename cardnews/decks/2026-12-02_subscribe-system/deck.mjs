// 2026-12-02 · Collin Michael 「If nobody subscribes to your channel, do this.」(x5aZ0DnEL4w) — 요즘 터진 영상
// 6.55만 회, 채널 평소의 36배, 구독 38만 (vidIQ 아웃라이어, 2026-11-26 수집). 근거 = source.md
export default {
  title: '구독을 부르는 법, 다르게 불러야 해요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Collin Michael', title: 'If nobody subscribes to your channel, do this.' },
  credit: '© Collin Michael',
  date: '2026-12-02', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'Collin Michael', video: 'https://www.youtube.com/watch?v=x5aZ0DnEL4w' },
  post: `"구독 눌러 주세요" 애니메이션만 넣는 거, 구독 부탁이 아니었대요.
구독 38만 유튜버 Collin Michael이 쓰는 구독 유도법을 정리했어요.
여러분 영상엔 구독할 '이유'가 들어가 있나요?

#유튜브구독자 #유튜브성장 #엔드카드`,
  cards: [
    { type: 'noteCover', size: 70, title: '"구독 눌러 주세요"가 ==안 통하는== 이유' },
    { type: 'noteMap', items: ['[[언제|pink]] 부탁하나', '[[이유|blue]]까지 같이', '[[반복 노출|teal]]이 핵심'] },
    { type: 'noteItem', no: '1', head: '[[언제|pink]] 부탁하나', size: 48,
      text: '영상 시작하고 30초 안에 뜨는\n구독 애니메이션, 다들 본 적 있죠.\n\nCollin은 이게 [[부탁이 아니다|blue]]고 해요.\n아직 아무것도 못 받은 사람에게\n구독을 묻는 거라서요.\n\n[[가치를 준 뒤|green]]에, 말로 직접 구독을\n부탁해야 한다고 말해요.' },
    { type: 'noteItem', no: '2', head: '[[이유|blue]]까지 같이', size: 48,
      text: '그냥 "구독해 주세요"가 아니라\n[[왜 구독해야 하는지|pink]]를 같이 말하래요.\n\n예를 들어 "매주 이 주제로 올리니\n다음 편도 보고 싶다면 구독하세요"처럼요.\n\n시청자가 영상에서 원했던 것과\n[[같은 이유|green]]로 연결해야 한다고 봐요.' },
    { type: 'noteItem', no: '3', head: '[[반복 노출|teal]]이 핵심', size: 48,
      text: 'Collin은 오래된 마케팅 \'7번 법칙\'을 끌어와요.\n한 사람이 내 영상을 [[여러 번|blue]] 볼수록\n구독할 확률이 올라간다는 거예요.\n\n그래서 영상 끝에 다음 영상·재생목록을\n[[엔드카드|pink]]로 연결해 시청을 이어가요.\n\n이 방식으로 재생목록에서만 조회수\n[[78.9만 회|orange]]를 더 받았다고 해요(Collin 본인 분석).' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
