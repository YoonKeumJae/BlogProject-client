import DefaultProfileImage from '../../assets/default-profile-image.png';
import StyledAside from '../../styles/main/Aside-styled';
import Category from './main-aside/Category';
import Search from './main-aside/Search';

const Aside = () => (
  <StyledAside>
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
    <form className='filter'>
      {/* Category */}
      <Category />

      {/* Search */}
      <Search />
    </form>
  </StyledAside>
);

export default Aside;
