import StyledCategoryList from '@styles/main/post/detail-post/CategoryList-styled';

const DUMMY_CATEGORY_ITEMS = [
  {
    id: 'categoryItem1',
    title: 'RESONANCE',
    commentCount: 2,
    date: '2023.06.06',
  },
  {
    id: 'categoryItem2',
    title: 'Make A Wish (Birthda...',
    commentCount: 5,
    date: '2023.02.14',
  },
  {
    id: 'categoryItem3',
    title: '무대로 (Déjà Vu; 舞代路)',
    commentCount: 2,
    date: '2023.02.05',
  },
  {
    id: 'categoryItem4',
    title: '다시 만나는 날',
    commentCount: 14,
    date: '2023.02.01',
  },
  {
    id: 'categoryItem5',
    title: '더현대 푸드트럭',
    commentCount: 6,
    date: '2023.01.01',
  },
];

const CategoryList = () => {
  return (
    <StyledCategoryList>
      {/* Category title */}
      <div className='category-name'>
        <span className='selected-category'>맛그당어</span>
        <span className='category-class'>카테고리 글</span>
      </div>

      {/* Post Item List */}
      <div className='category-item-list'>
        {DUMMY_CATEGORY_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className={`category-item ${idx === 0 ? 'selected' : ''}`}
          >
            <div className='item-left'>
              <span className='item-title'>{item.title}</span>
              <span>{`(${item.commentCount})`}</span>
            </div>
            <div className='item-right'>{item.date}</div>
          </div>
        ))}

        {/* Category paging */}
        <div className='category-page-container'>
          <span className='selected-category-page'>1</span>
          <span className='category-page'>2</span>
        </div>
      </div>
    </StyledCategoryList>
  );
};

export default CategoryList;
