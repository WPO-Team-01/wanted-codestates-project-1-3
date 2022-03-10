import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  height: 35px;
  padding: 5px 12px;
  border-width: 0;
  border: 1px #d1d5db solid;
  border-radius: 5px;
  ::placeholder {
    color: gray;
    font-weight: bold;
  }
`;

const SearchBar = () => {
  return <Input placeholder="검색" />;
};

export default SearchBar;
