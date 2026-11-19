// 2026-11-27 · 이슈: 유튜브 스튜디오 '애널리틱스' → '인사이트' 개편 (2026-11-13 시행, 데스크톱). 근거 = source.md
// vidIQ 「YouTube Launches Massive Creator Update - Everything's Different Now」(42D94fDC1GE) 반응 영상 + 유튜브 고객센터·보도 교차 확인
export default {
  title: '유튜브 스튜디오, 애널리틱스가 사라졌어요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'vidIQ · YouTube 고객센터', title: 'YouTube Studio Analytics → Insights' },
  credit: '© YouTube',
  date: '2026-11-27', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'vidIQ', video: 'https://www.youtube.com/watch?v=42D94fDC1GE' },
  post: `유튜브 스튜디오에서 '애널리틱스' 탭을 못 찾겠다면, 이름이 '인사이트'로 바뀌어서 그래요.
유튜브 고객센터가 2026년 11월 13일부터 확인한 변경 사항을 정리했어요.
여러분 스튜디오는 벌써 바뀌었나요? 댓글로 알려 주세요.

#유튜브스튜디오 #유튜브업데이트 #유튜브분석`,
  cards: [
    { type: 'noteCover', size: 60, title: '유튜브 스튜디오, ==애널리틱스가 사라졌어요==' },
    { type: 'noteMap', items: ['[[이름|pink]]이 바뀌었어요', '[[패널|blue]] 단위로 묶였어요', '[[참여 조회수|teal]]가 숨었어요', '[[AI 요약|orange]]이 생겼어요'] },
    { type: 'noteItem', no: '1', head: '[[애널리틱스|pink]]가, [[인사이트|blue]]로', size: 48,
      text: '유튜브 스튜디오에서\n채널 성과를 보던 "애널리틱스" 탭이\n[[11월 13일부터|teal]] "인사이트"로 바뀌었어요.\n\n"트렌드" 탭도 "리서치"로\n이름이 바뀌었고요.\n\n유튜브 고객센터와 여러 매체가\n데스크톱 기준 변경을 확인했어요.' },
    { type: 'noteItem', no: '2', head: '데이터가, [[패널|blue]] 단위로 묶였어요', size: 48,
      text: '예전엔 조회수·구독자·수익이\n한 줄로 쭉 나열돼 있었는데,\n\n이제는 [[블록(패널)|pink]]마다 나뉘어서\n화면에 깔끔하게 배치돼요.\n\n패널을 클릭하면 더 자세한\n[[고급 모드|teal]]로 들어가는 식이에요.' },
    { type: 'noteItem', no: '3', head: '[[참여 조회수|teal]]가, 꼭꼭 숨었어요', size: 48,
      text: '예전엔 큼직하게 보이던\n"참여 조회수(engaged views)"가\n이제는 [[작은 패널 안쪽|blue]]에 들어가 있어요.\n\n유튜브 전문가 채널 vidIQ도\n이 지표를 찾는 데 시간이 걸렸다고\n영상에서 직접 보여줬어요.\n\n데이터가 사라진 게 아니라\n[[위치만 바뀐|pink]] 거니 당황하지 마세요.' },
    { type: 'noteItem', no: '4', head: '[[AI 요약 카드|orange]]가, 새로 생겼어요', size: 48,
      text: '채널 인사이트 화면 중간에\nAI가 뽑아주는 요약 카드가\n[[새로 추가|blue]]됐어요.\n\n채널 성과, 콘텐츠 패턴, 시청자\n충성도 같은 걸 요약해 보여준대요.\n\n"리포트 보기"를 누르면\n[[더 자세한 분석|teal]]으로 들어갈 수 있어요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
