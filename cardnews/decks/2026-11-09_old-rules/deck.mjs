// 2026-11-09 · vidIQ 「The YouTube Advice Keeping Small Channels Stuck」(kIVXD5855SM) 재가공
// 숫자 출처: vidIQ 영상 자막 · 내 채널 = data/self_channel.md (2026-11-08 수집)
// 레이아웃 규칙: cardnews/template/design-rules.md
const SRC = '출처 · vidIQ 「The YouTube Advice Keeping Small Channels Stuck」';

export default {
  title: '유통기한 지난 유튜브 조언 4가지',
  series: 'vidIQ × 흰지로',
  brand: '흰지로의 오답노트',
  theme: 'glass',
  date: '2026-11-09',
  status: '초안',
  source: { channel: 'vidIQ', video: 'https://www.youtube.com/watch?v=kIVXD5855SM' },
  // v3 (2026-11-09 비워내기): 6장 · 장마다 `01.` 헤드라인 + 그림 1 + 맨 글자 한 줄 · 블록 안 글 없음
  cards: [
    {
      type: 'coverPlain',
      rules: ['니치를 정해라', '태그를 꼼꼼히', '시청 시간이 전부', '매일 올려라'],
      kicker: '아직도 이렇게 하고 계세요?',
      title: '유통기한 지난\n유튜브 조언 4가지',
    },
    {
      type: 'step', no: '01', old: '니치를 정해라',
      head: '주제 말고\n한 사람을 정하세요',
      visual: { type: 'image', img: 'assets/bkwa6-6cYlk.jpg' },
      line: '구독자 6천 명 채널이 \'50대 이후\' 한 사람만 불러서\n36만 회가 나왔어요.',
    },
    {
      type: 'step', no: '02', old: '태그를 꼼꼼히 달아라',
      head: '검색할 말을\n제목에 넣으세요',
      visual: { type: 'dots', n: 10, on: 8 },
      line: '작은 채널 떡상 영상 10개 중 8개는\n태그가 하나도 없었어요.',
    },
    {
      type: 'step', no: '03', old: '시청 시간이 전부다',
      head: '끝까지 보고\n\'잘 봤다\' 싶게',
      visual: { type: 'bars', rows: [{ stars: '★★★★★', good: true }, { stars: '★☆☆☆☆', good: false }] },
      line: '똑같이 10분을 봐도,\n별점 4~5점을 받은 시간만 쳐줘요.',
    },
    {
      type: 'step', no: '04', old: '매일 올려라',
      head: '약속한 주기만\n지키면 돼요',
      visual: { type: 'chart', points: [
        { gap: '129일 쉼' },
        { d: '10.08', v: '2.5배', h: 70 },
        { d: '10.19', v: '24.6배', h: 300, hi: true },
        { d: '10.25', v: '4.3배', h: 100 },
        { d: '10.31', v: '1.2배', h: 50 },
      ] },
      line: '저도 129일을 쉬었는데,\n복귀 두 번째 영상이 평소의 24.6배였어요.',
    },
    {
      type: 'step',
      head: '\'알고리즘\'을\n\'시청자\'로 바꿔 읽어 보세요',
      visual: { type: 'save' },
      line: '저장해 두고, 다음 영상 올리기 전에 꺼내 보세요.',
      src: '출처 · vidIQ',
    },
  ],
};
