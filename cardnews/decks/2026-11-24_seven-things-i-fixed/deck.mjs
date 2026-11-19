// 2026-11-24 · Madeline Hegedus Too 「I failed at YouTube, until I did this」(Gbid3govh34) — 요즘 터진 영상
// 2.3만 회, 채널 평소의 11.7배 (vidIQ outliers, 2026-11-19 수집). 근거 = source.md
export default {
  title: '유튜브, 그만두고 싶었던 순간들 5가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Madeline Hegedus Too', title: 'I failed at YouTube, until I did this' },
  date: '2026-11-24', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'Madeline Hegedus Too', video: 'https://www.youtube.com/watch?v=Gbid3govh34' },
  post: `올리는데도 조회수가 20회뿐이던 시절, 포기하고 싶었대요.
유튜버 Madeline Hegedus가 꼽은, 성장을 막았던 습관 7가지 중 5가지를 정리했어요.
여러분은 지금 어떤 순간을 지나고 있나요? 댓글로 알려 주세요.

#유튜브초보 #유튜브실수 #작은채널`,
  cards: [
    { type: 'noteCover', size: 64, title: '유튜브, ==그만두고 싶었던== 순간들' },
    { type: 'noteMap', items: ['[[쪽팔림|pink]]이 무서워서', '너무 멀리 [[생각하기|blue]]', '그냥 [[취미|teal]]라고 말하기', '너무 많이 [[올리기|orange]]', '안 좋은 날 [[포기하기|green]]'] },
    { type: 'noteItem', no: '1', head: '[[쪽팔림|pink]]이 무서워서, 시작을 못 했어요', size: 48,
      text: '카메라 앞에서 혼자 말하는 거,\n솔직히 지금도 이상해요.\n\n가족이나 친구가 뭐라고 할지\n[[신경 쓰여서|blue]] 못 올리는 사람 정말 많아요.\n저도 그렇게 생각하는 사람이\n있다는 걸 알지만 괜찮아요.\n\n그래도 [[비슷한 고민|green]]을 하는 사람에게\n도움이 된다면, 그걸로 충분하다고 생각하기로 했어요.' },
    { type: 'noteItem', no: '2', head: '너무 멀리까지 [[생각하기|blue]]', size: 48,
      text: '마이크부터 조명, 편집, 악플 대응까지\n미리 다 준비하려고 하면\n한 발짝도 못 떼요.\n\n유튜브가 커지면서 겪을 일들을\n[[미리 다 걱정|pink]]하다 보면\n시작하기도 전에 지쳐 버려요.\n\n지금 바로 앞에 있는 [[한두 단계|green]]만\n보고 가기로 했어요.' },
    { type: 'noteItem', no: '3', head: '그냥 [[취미|teal]]라고 말했어요', size: 48,
      text: '누가 물어보면 "그냥 취미예요"라고\n얼버무리던 때가 있었어요.\n\n돈 얘기를 하면 안 될 것 같았거든요.\n근데 조회수가 오른다고\n[[돈이 저절로 따라오진|blue]] 않더라고요.\n\n브랜드 협업이든 상품 판매든\n[[사업으로 대하기로|pink]] 마음먹은 뒤에야\n수익이 따라오기 시작했어요.' },
    { type: 'noteItem', no: '4', head: '너무 많이 [[올리기|orange]]도 문제였어요', size: 48,
      text: '꾸준함이 중요하다고들 하죠.\n그런데 너무 자주 올리면\n[[번아웃|pink]]이 와요.\n\n처음부터 조회수가 잘 안 나오는데\n계속 밀어붙이면 지쳐서 포기하게 돼요.\n\n저는 일주일에 한 번, [[같은 요일|blue]]에\n몇 달이고 꾸준히 올리는 쪽을 택했어요.' },
    { type: 'noteItem', no: '5', head: '안 좋은 날, [[포기하기|green]]', size: 48,
      text: '몇 주, 몇 달 올려도\n조회수가 안 오를 때가 있어요.\n\n이 시기를 [[딥(dip)|blue]]이라고 부르는데\n대부분 사람들이 여기서 포기한대요.\n\n그런데 그 구간을 [[버티고 나면|pink]]\n결과가 따라온다고 해요.\n저도 지금 그 과정을 지나고 있어요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
