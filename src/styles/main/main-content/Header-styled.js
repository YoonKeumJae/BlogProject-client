import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 8px;
  border-bottom: 1px solid #c5c5c5;

  .title {
    font-size: 20px;
  }

  .lnb {
    display: flex;
    gap: 12px;

    .menu {
      color: #ccc;

      svg {
        margin-right: 4px;
      }

      &:hover {
        color: #000000;
      }
    }
  }
`;

export default StyledHeader;
