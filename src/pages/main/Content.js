import StyledContent from '@styles/main/Content-styled';
import Header from './main-content/Header';
import ContentItem from './main-content/ContentItem';

const DUMMY_CONTENTS = [
  {
    id: 'content1',
    title: 'RESONANCE',
    description: `공명카페에 갔다.  I'm about to raise the roof 공명 그 안의 moves퍼져가가네 like the news 잠들었...`,
    date: '2023.06.06',
  },
  {
    id: 'content2',
    title: 'Make A Wish (Birthda...',
    description: `Me you 우린 여길 떠나려 해 빨리 올라타 마음은 같은 곳에 겨우 그런 고민은 다음번에나 해 시간이 부족하...`,
    date: '2023.04.23',
  },
  {
    id: 'content3',
    title: '무대로 (Déjà Vu; 舞代路)',
    description: `우린 이렇게 만났고 이건 시작일 뿐이야 매일 기다려온 이 순간 또 먼 길을 돌아도 만나게 되는 걸 반복된 이 ...`,
    date: '2023.03.23',
  },
  {
    id: 'content4',
    title: '다시 만나는 날',
    description: `Oh 약속할게 다시 만나는 날 안아줄게 한 마디 말보다 반가움에 눈물 차올라도 나 이번엔 전할래 내 마음...`,
    date: '2023.02.19',
  },
  {
    id: 'content5',
    title: '더현대 푸드트럭',
    description: `종류가 많아서 먹을 게 많다. 22개의 푸드트럭이 있다고 한다. 사람이 진짜 너무 많고 딤섬이 맛있다. 우육면은...`,
    date: '2023.02.14',
  },
  {
    id: 'content6',
    title: 'Make A Wish (Birthda...',
    description: `Me you 우린 여길 떠나려 해 빨리 올라타 마음은 같은 곳에 겨우 그런 고민은 다음번에나 해 시간이 부족하...`,
    date: '2023.02.05',
  },
  {
    id: 'content7',
    title: '다시 만나는 날',
    description: `Oh 약속할게 다시 만나는 날 안아줄게 한 마디 말보다 반가움에 눈물 차올라도 나 이번엔 전할래 내 마음...`,
    date: '2023.02.19',
  },
  {
    id: 'content8',
    title: '무대로 (Déjà Vu; 舞代路)',
    description: `우린 이렇게 만났고 이건 시작일 뿐이야 매일 기다려온 이 순간 또 먼 길을 돌아도 만나게 되는 걸 반복된 이 ...`,
    date: '2023.03.23',
  },
];

const Content = () => (
  <StyledContent>
    {/* Main Header */}
    <Header />

    {/* Main Content */}
    <div className='main-content'>
      {DUMMY_CONTENTS.map((content) => (
        <ContentItem key={content.id} content={content} />
      ))}
    </div>

    {/* Content Paging */}
    <div className='page-box'>
      <span className='clicked-page'>1</span>
    </div>
  </StyledContent>
);

export default Content;
