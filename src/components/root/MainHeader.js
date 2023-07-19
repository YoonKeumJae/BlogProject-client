import { Link } from 'react-router-dom';

import DefaultProfileImage from '@assets/default-profile-image.png';
import StyledMainHeader from '@styles/components/root/MainHeader-styled';

const MainHeader = () => {
  return (
    <StyledMainHeader>
      {/* Global Navigation */}
      <nav className='gnb'>
        <Link to='/'>
          <button>홈</button>
        </Link>
        <Link to='user'>
          <button>
            <img
              className='mini-profile'
              src={DefaultProfileImage}
              alt='default profile image'
            />
            <span>걍하지</span>
          </button>
        </Link>
        <Link to='auth/signin'>
          <button>로그인</button>
        </Link>
        <Link to='auth/signup'>
          <button>회원가입</button>
        </Link>
      </nav>

      {/* Blog Title */}
      <h2 className='blog-title'>블로그 명</h2>
    </StyledMainHeader>
  );
};

export default MainHeader;
