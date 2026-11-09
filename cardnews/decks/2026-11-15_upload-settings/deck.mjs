// 2026-11-15 · Amplify Views 「The RIGHT Way to Upload YouTube Videos in 2026 (Best Settings)」(nfPAqlr8G3Y) — 요즘 터진 영상
// 32.6만 회, 채널 평소의 93배 (data/outliers.json, 2026-11-08 수집). 유튜브 기능은 공식 도움말로 확인. 근거 = source.md
export default {
  title: '영상 올릴 때 꼭 확인할 설정 4가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Amplify Views', title: 'The RIGHT Way to Upload YouTube Videos in 2026 (Best Settings)' },
  date: '2026-11-15', status: '초안',
  inkW: 762,     // 가장 긴 줄 잉크 폭 (본문 41px) — PNG로 잼
  source: { channel: 'Amplify Views', video: 'https://www.youtube.com/watch?v=nfPAqlr8G3Y' },
  post: `영상 올릴 때 이 설정 하나 잘못 누르면, 좋은 영상도 안 보여요.
평소보다 93배 터진 Amplify Views 영상 속 업로드 설정을 유튜브 공식 도움말로 확인해 정리했어요.
여러분은 아동용 설정, 어떻게 해 두셨어요?

#유튜브업로드 #유튜브설정 #유튜브초보`,
  cards: [
    { type: 'noteCover', size: 70, title: '영상 올릴 때 ==이 설정==부터' },
    { type: 'noteMap', items: ['[[아동용|pink]] 설정', '[[연령 제한|blue]]', '[[해시태그|teal]] 개수', '제목·썸네일·[[첫 문장|orange]]'] },
    { type: 'noteItem', no: '1', head: '아동용은, [[진짜 아동용|pink]]만', size: 41,
      text: '\'아이가 봐도 되니까 아동용\'이라고 누르면 안 돼요.\n\n아동용으로 정하면 [[댓글·알림|blue]], 최종 화면·카드,\n나중에 볼 동영상 저장 같은 기능이 꺼져요.\n(유튜브 고객센터)\n\n어른도 보는 영상이면 [[\'아니요, 아동용이 아닙니다\'|green]].' },
    { type: 'noteItem', no: '2', head: '연령 제한은, [[꺼 두세요|blue]]', size: 41,
      text: '조금 거친 말이 있다고 연령 제한을 걸면\n볼 수 있는 사람이 확 줄어요.\n\n연령 제한 영상은 [[18세 미만|orange]]과\n[[로그인하지 않은 사람|pink]]은 볼 수 없어요.\n대부분의 다른 사이트에 붙여 넣어도 안 보이고요.\n(유튜브 고객센터)' },
    { type: 'noteItem', no: '3', head: '해시태그는 [[1~3개|teal]]', size: 41,
      text: '설명란에 해시태그를 잔뜩 넣는 분들 있죠.\n\n유튜브는 설명란 해시태그 중 [[최대 3개|blue]]만\n제목 옆에 보여 줘요. 60개가 넘으면\n해시태그 [[전부를 무시|pink]]하고요. (유튜브 고객센터)\n\nAmplify Views는 1개만 쓴대요.\n이 영상이 [[누구를 위한 건지|green]] 알려 주는 용도로요.' },
    { type: 'noteItem', no: '4', head: '제목·첫 문장, [[같은 말|orange]]로', size: 41,
      text: 'Amplify Views는 유튜브가 제목뿐 아니라\n썸네일·설명·[[첫 60초|blue]]까지 보고\n누구에게 보낼지 정한다고 해요.\n\n그래서 셋이 [[같은 말|pink]]을 하게 맞추래요.\n제목이 \'구독자 1,000명 빨리 모으는 법\'이면\n첫 문장도 "구독자 1,000명 빨리 모으는 법을\n알려 드릴게요"로요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
