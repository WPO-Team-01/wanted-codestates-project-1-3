import styled from "styled-components";

const SearchInput = () => {
  const Input = styled.input`
    width: 250px;
    padding: 10px;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
  `;

  return (
    <div>
      <Input type="text" placeholder="search" />
    </div>
  );
};

export default SearchInput;
