import styled from 'styled-components';

const StyledContentItem = styled.div`
  width: 260px;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ebebeb;

    width: 260px;
    height: 260px;

    img {
      object-fit: contain;
      vertical-align: middle;
    }
  }

  .title {
    font-size: 18px;

    margin: 12px 0 8px;
  }

  .description {
    font-size: 14px;

    margin-bottom: 4px;
    color: #676767;
  }

  .date {
    font-size: 12px;

    color: #bcbcbc;
  }
`;

export default StyledContentItem;
