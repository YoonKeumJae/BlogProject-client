import styled from 'styled-components';

const StyledAside = styled.section`
  display: flex;
  flex-direction: row;

  .user-profile {
    .profile-image {
      width: 160px;
      vertical-align: middle;
      object-fit: contain;
    }

    .name {
      margin: 4px 0 0;
      font-weight: 600;
    }

    .description {
      font-size: 14px;
      font-weight: 500;
      color: #6b6b6b;
    }
  }

  .filter {
    flex-grow: 1;
    padding-left: 24px;

    display: flex;
    justify-content: space-between;
  }
`;

export default StyledAside;
