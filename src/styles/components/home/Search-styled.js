import styled from 'styled-components';

const StyledSearch = styled.form`
  .search-box {
    position: relative;

    width: 236px;
    border-bottom: 1px solid #000000;

    .search-type {
      position: absolute;
      left: -62px;

      border: none;
      border-bottom: 1px solid #000000;

      padding: 5px;

      &:focus {
        outline: none;
      }
    }

    .input-query {
      width: inherit;
      height: 25px;

      padding-inline-start: 12px;
      border: none;

      &:hover,
      &:focus {
        outline: none;
      }
    }

    .search-button {
      position: absolute;
      top: 0;
      right: 0;

      color: #ccc;

      &:hover {
        color: black;
      }
    }
  }
`;

export default StyledSearch;
