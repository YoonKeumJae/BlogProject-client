import MainHeader from '@components/root/MainHeader';
import Aside from '@components/root/MainAside';
import StyledError from '@styles/pages/Error-styled';

const ErrorPage = () => {
  return (
    <>
      {/* Blog Header */}
      <MainHeader />

      {/* Aside Section */}
      <Aside />

      <StyledError>
        <p>존재하지 않는 페이지입니다.</p>
      </StyledError>
    </>
  );
};

export default ErrorPage;
