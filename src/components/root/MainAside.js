import DefaultProfileImage from '@assets/default-profile-image.png';
import Category from '@components/home/Category';
import Search from '@components/home/Search';
import StyledMainAside from '@styles/components/root/MainAside-styled';

const MainAside = () => (
  <StyledMainAside>
    {/* User Profile */}
    <div className='user-profile'>
      <img
        className='profile-image'
        src={DefaultProfileImage}
        alt='default user profile image'
      />
      <h3 className='name'>user name</h3>
      <p className='description'>user description</p>
    </div>

    {/* Filter Section */}
    <div className='filter'>
      {/* Category */}
      <Category />

      {/* Search */}
      <Search />
    </div>
  </StyledMainAside>
);

export default MainAside;
