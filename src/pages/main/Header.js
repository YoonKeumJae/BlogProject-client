import DefaultProfileImage from '../../assets/default-profile-image.png';
import StyledHeader from '../../styles/main/Header-styled';

const Header = () => (
  <StyledHeader>
    {/* Global Navigation */}
    <nav className='gnb'>
      <button>홈</button>
      <button>태그</button>
      <button>
        <img
          className='mini-profile'
          src={DefaultProfileImage}
          alt='default profile image'
        />
        <span>걍하지</span>
      </button>
      <button>로그인</button>
    </nav>

    {/* Blog Title */}
    <h2 className='blog-title'>블로그 명</h2>
  </StyledHeader>
);

export default Header;
