import styled from 'styled-components';

const StyledTagBox = styled.div`
  .tag-list {
    position: absolute;
    top: 0;
    left: 84px;

    display: flex;
    flex-direction: row;
    justify-content: start;

    .tag-item {
      border: 1px solid #ccc;

      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 3px;
      padding: 3px;
      background-color: tomato;
      border-radius: 5px;
      color: white;

      font-size: 10px;

      cursor: pointer;

      &:hover {
        background-color: gray;
      }
    }
  }

  .tag-box {
    display: flex;
    align-items: center;
    gap: 16px;

    height: 64px;
    padding: 16px 24px 0;
    margin: 0 16px;

    background-color: #f8f8f8;

    input {
      flex-grow: 1;
      padding-inline: 12px;
      height: 36px;
      border: 1px solid #d9d9d9;

      &:focus {
        outline: none;
      }
    }
  }
`;

export default StyledTagBox;
