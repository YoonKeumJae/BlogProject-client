import DefaultProfileImage from '@assets/default-profile-image.png';
import TestPostImage from '@assets/test-post-image.png';

import StyledPostContent from '@styles/main/post/detail-post/PostContent';

const PostContent = () => {
  return (
    <StyledPostContent>
      {/* Post Title */}
      <div className='post-header'>
        <div className='category-box'>
          <span>맛그당어</span>
        </div>
        <h3 className='post-title'>RESONANCE</h3>
        <div className='post-others'>
          <div className='post-user'>
            <img src={DefaultProfileImage} alt='default user profile image' />
            <span>유저명</span>
          </div>
          <div className='post-date'>2023.06.06</div>
        </div>
      </div>

      {/* Post Content */}
      <div className='post-content'>
        <div className='post-content-box'>
          <img src={TestPostImage} alt='Test Image' />
          <p>
            {`공명카페에 갔다. I'm about to raise the roof 공명 그 안의
            moves 퍼져가가네 like the news 잠들었던 널 깨워 힘은 더 커져 가 When
            we raise the roof We're not in control 함께 있는 너 So we just get
            bigger 힘은 더 커져 가 When we raise the roof Imma wake you up (They
            sleeping) Imma wake you up (Sleeping) 난 가고 있어 우린 더 커져 가
            When we raise the roof`}
          </p>
          <p>
            {`Imma wake you up (They sleeping) Let me shake things up (Shake
            shake) We can take it off 우린 더 커져 가 길을 쓸고 다닌 스트릿 이젠
            그냥 클래식 (Blow that) 주머니는 헐렁했지 (I show that) 자 찍어
            Cheese (Clack) 필름 속의 친구 다들 make V (You know that) Let's go
            mob 너의 움직임이 그대로 여기로 Yeah Fresh off 다시 뜨거워진 New
            decades 내 친구 같은 'friends' 보며 밤 새 (밤 새) 어쩌면 우린 같은
            평행선 위에 들어 봐 DJ drops it (Drop)`}
          </p>
        </div>
      </div>

      {/* Post Footer */}
      <div className='post-footer'>
        <div className='tag-box'>#공명 #레조넌스 #합정 #카페</div>
        <div className='post-button-list'>
          <button className='like-box'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 45 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M31.2891 5.5C27.6592 5.5 24.4811 7.02625 22.5 9.60609C20.5189 7.02625 17.3408 5.5 13.7109 5.5C10.8215 5.50318 8.05132 6.62692 6.00818 8.62466C3.96503 10.6224 2.81576 13.331 2.8125 16.1562C2.8125 28.1875 21.0568 37.9259 21.8338 38.3281C22.0386 38.4358 22.2675 38.4922 22.5 38.4922C22.7325 38.4922 22.9614 38.4358 23.1662 38.3281C23.9432 37.9259 42.1875 28.1875 42.1875 16.1562C42.1842 13.331 41.035 10.6224 38.9918 8.62466C36.9487 6.62692 34.1785 5.50318 31.2891 5.5ZM22.5 35.5438C19.2902 33.715 5.625 25.3842 5.625 16.1562C5.62779 14.0602 6.4806 12.0508 7.9964 10.5687C9.5122 9.08658 11.5673 8.25273 13.7109 8.25C17.1299 8.25 20.0004 10.0306 21.1992 12.8906C21.3052 13.1428 21.4854 13.3585 21.717 13.5103C21.9486 13.6621 22.2212 13.7432 22.5 13.7432C22.7788 13.7432 23.0514 13.6621 23.283 13.5103C23.5146 13.3585 23.6948 13.1428 23.8008 12.8906C24.9996 10.0255 27.8701 8.25 31.2891 8.25C33.4327 8.25273 35.4878 9.08658 37.0036 10.5687C38.5194 12.0508 39.3722 14.0602 39.375 16.1562C39.375 25.3705 25.7062 33.7133 22.5 35.5438Z'
                fill='#8D8D8D'
              />
            </svg>
            <span>21</span>
          </button>
          <div className='update-and-delete'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      </div>
    </StyledPostContent>
  );
};

export default PostContent;
