import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;

  padding: 64px 0 16px;
  margin-bottom: 16px;

  border-bottom: 1px solid #c5c5c5;

  .gnb {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;

    .mini-profile {
      width: 16px;
      vertical-align: bottom;
      border-radius: 50%;

      margin-right: 4px;
    }

    button {
      text-align: center;

      width: 64px;
      color: #8e8e8e;

      &:hover {
        color: black;
      }

      &:first-child {
        width: auto;
      }
    }
  }

  .blog-title {
    text-align: center;
  }
`;

export default StyledHeader;
