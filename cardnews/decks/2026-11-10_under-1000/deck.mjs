// 2026-11-10 · Dan the creator 「If you have less than 1,000 subscribers, NEVER do this」(Wx5gF0jkgZI) — 요즘 터진 주제
// 47.3만 회, 채널 평소의 16.8배 (data/outliers.json, 2026-11-08 수집). 근거 = source.md
export default {
  title: '구독자 1,000명 전에 하지 말 것 4가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', font: 'pretendard',
  src: { creator: 'Dan the creator', title: 'If you have less than 1,000 subscribers, NEVER do this' },
  credit: '© Dan the creator',
  date: '2026-11-10', status: '초안',
  inkW: 692,     // 가장 긴 줄 잉크 폭 — PNG로 잼
  source: { channel: 'Dan the creator', video: 'https://www.youtube.com/watch?v=Wx5gF0jkgZI' },
  // 유튜브 커뮤니티 게시물 본문 (대시보드에서 복사)
  post: `구독자 1,000명이 안 됐다면, 이 4가지부터 멈춰 보세요.
구독자 33.9만 유튜버 Dan the creator가 꼽은 작은 채널 실수를 정리했어요.
몇 개나 해당되는지 댓글로 알려 주세요.

#유튜브초보 #구독자늘리기 #작은채널`,
  cards: [
    { type: 'noteCover', size: 58, title: '구독자 1,000명 전에 ==하지 말 것==' },
    { type: 'noteMap', items: ['[[자기소개|pink]]부터 하기', '바로 [[구독|blue]] 부탁하기', '[[큰 채널|teal]] 따라 하기', '좁은 [[니치|orange]] 걱정하기'] },
    { type: 'noteItem', no: '1', head: '자기소개 말고, [[얻을 것|pink]]부터', size: 34,
      text: '"안녕하세요, 저는요"로 시작하는 영상 많죠.\n\n그런데 처음 보는 사람은 나를 몰라요.\n궁금한 건 \'이걸 보면 뭘 얻나\' 하나예요.\n재미든, 배움이든, 정보든요.\n\n첫 문장부터 시청자가 [[얻을 것|blue]]을 말하세요.\n제목·썸네일에서 한 약속과 같은 걸로요.' },
    { type: 'noteItem', no: '2', head: '구독 부탁은, [[다 주고 나서|blue]]', size: 34,
      text: '시작 1분도 안 돼서 "구독 눌러 주세요".\n\n음식이 나오기도 전에 식당에서\n"별점 5개 부탁드려요" 하는 것과 같아요.\n아직 맛도 안 봤는데요.\n\n원하던 걸 다 준 [[뒤에|green]] 부탁하거나,\n아예 부탁하지 말고 [[내용|pink]]으로 보여 주세요.' },
    { type: 'noteItem', no: '3', head: '큰 채널 말고, [[비슷한 크기|teal]]', size: 34,
      text: '잘된 영상은 큰 채널에서 찾기 쉽죠.\n\n하지만 구독자 200만 채널에 통한 게\n200명 채널에도 통하는 일은 드물어요.\n\n같은 분야에서 구독자 [[1만 명 이하|orange]] 채널의\n잘된 영상을 보세요. Dan도 구독자 1~2천 명일 때\n[[비슷한 크기|blue]] 채널을 보고 주제를 정했대요.' },
    { type: 'noteItem', no: '4', head: '좁은 니치는, [[느릴 뿐|orange]]', size: 34,
      text: '"내 주제가 너무 좁아서 안 크나?" 싶을 때 있죠.\n\nDan은 좁으면 처음엔 조금 느릴 뿐이래요.\n유튜브가 맞는 사람을 찾는 데 시간이 걸린다고요.\n\n한번 찾으면 [[비슷한 사람|green]]을 더 쉽게 찾아요.\n큰 주제처럼 경험 많은 채널 수천 곳과\n[[경쟁할 일|pink]]도 줄어요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
