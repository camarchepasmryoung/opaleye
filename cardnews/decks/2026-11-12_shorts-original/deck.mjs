// 2026-11-12 · 이슈: 2026-10-01 유튜브 쇼츠 추천 '원본 우선' 업데이트
// 1차: 유튜브 고객센터 커뮤니티 공지(2026-10-01, ppc.land 인용으로 확인) + vidIQ 「YouTube Literally Just Changed the Algorithm」(7vkhoCM67PU) 속 Rene Ritchie 발표. 근거 = source.md
export default {
  title: '쇼츠 알고리즘, 원본을 고르기 시작했어요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'YouTube 공지 · vidIQ', title: 'YouTube Literally Just Changed the Algorithm' },
  credit: '© YouTube · vidIQ',
  date: '2026-11-12', status: '초안',
  inkW: 746,     // 가장 긴 줄 잉크 폭 (본문 41px) — PNG로 잼
  source: { channel: 'YouTube 공지 / vidIQ', video: 'https://www.youtube.com/watch?v=7vkhoCM67PU' },
  // 유튜브 커뮤니티 게시물 본문 (대시보드에서 복사)
  post: `유튜브가 쇼츠 추천에서 원본 콘텐츠를 더 앞에 두겠다고 공지했어요 (2026년 10월 1일).
남의 영상을 거의 그대로 올리는 채널은 노출이 줄어들 거래요. 내 롱폼을 자른 쇼츠는 괜찮은지도 정리했어요.
여러분 쇼츠에는 '내 것'이 들어가 있나요?

#유튜브쇼츠 #쇼츠알고리즘 #유튜브업데이트`,
  cards: [
    { type: 'noteCover', size: 68, title: '쇼츠 알고리즘이 ==원본==을 고른대요' },
    { type: 'noteMap', items: ['무엇이 [[바뀌었나|pink]]', '\'[[그대로|blue]]\'의 기준', '이미 해 온 [[채널|teal]]', '내 영상 [[자르기|orange]]'] },
    { type: 'noteItem', no: '1', head: '무엇이 [[바뀌었나|pink]]', size: 41,
      text: '2026년 10월 1일, 유튜브가 공지했어요.\n쇼츠 추천에서 [[원본 콘텐츠|blue]]를 더 앞에 두겠대요.\n\n반대로, 다른 크리에이터 영상을 별다른 변화 없이\n모아 올리거나 다시 올리는 채널은\n쇼츠 피드 노출이 [[줄어들|orange]] 거래요.\n\nvidIQ도 "알고리즘 변경을 이렇게 콕 집어\n공지한 건 처음 본다"고 했어요.' },
    { type: 'noteItem', no: '2', head: '\'[[그대로|blue]]\'의 기준', size: 41,
      text: '유튜브가 원본으로 [[안 쳐 주는|pink]] 것:\n화면 내용을 읽어 주기만 하는 내레이션,\n자잘한 편집, 템플릿으로 찍어 낸 변환.\n\n유튜브가 원하는 것:\n내 [[해설|green]], 나만의 편집, 내 이야기.\n\n남의 장면을 써도, 새 의미를 더해서\n원본과 [[다른 것|orange]]이 되면 괜찮아요.' },
    { type: 'noteItem', no: '3', head: '해 온 채널도, [[다시 평가|teal]]', size: 41,
      text: '그동안 모음·재업로드로 조회수를 내 온\n채널도 많죠. 지금까지는 그게 통했으니까요.\n\n유튜브는 원본 위주로 바꾸면\n노출을 [[다시 평가|blue]]한다고 했어요.\n다만 [[언제·어떻게|pink]] 다시 보는지는\n공개하지 않았어요.\n\n규칙은 언제든 바뀔 수 있다는 걸 기억하세요.' },
    { type: 'noteItem', no: '4', head: '내 영상 자르기, [[괜찮아요|orange]]', size: 41,
      text: '팟캐스트·롱폼을 잘라 쇼츠로 올리는 건\n어떨까요?\n\n유튜브가 겨냥한 건 [[남의 영상|pink]]을\n바꾸지 않고 쓰는 경우예요.\n그래서 vidIQ는 내 영상을 자르는 건\n대상이 아니라고 봐요.\n\n다만 판단은 [[자동 시스템|blue]]이 해서,\n실수가 생길 수 있다는 점은 알아 두세요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
