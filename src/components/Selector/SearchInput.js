import styled from "styled-components";

const SearchInput = () => {
  const Input = styled.input`
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    box-sizing: border-box;
  `;

  return (
    <div>
      <Input type="text" placeholder="search" />
    </div>
  );
};

export default SearchInput;
