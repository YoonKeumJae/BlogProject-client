import { Link } from 'react-router-dom';

import DefaultProfileImage from '@assets/default-profile-image.png';
import StyledHeader from '@styles/main/Header-styled';

const Header = () => {
  return (
    <StyledHeader>
      {/* Global Navigation */}
      <nav className='gnb'>
        <Link to='/'>
          <button>홈</button>
        </Link>
        <button>태그</button>
        <Link to='/user'>
          <button>
            <img
              className='mini-profile'
              src={DefaultProfileImage}
              alt='default profile image'
            />
            <span>걍하지</span>
          </button>
        </Link>
        <button>로그인</button>
      </nav>

      {/* Blog Title */}
      <h2 className='blog-title'>블로그 명</h2>
    </StyledHeader>
  );
};

export default Header;
