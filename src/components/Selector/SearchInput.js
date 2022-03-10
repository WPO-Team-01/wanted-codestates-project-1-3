import styled from "styled-components";
const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  box-sizing: border-box;
`;
const SearchInput = ({ value, setValue, enter }) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // const onKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     enter();
  //   }
  // };

  return (
    <div>
      <Input
        type="text"
        placeholder="search"
        value={value}
        onChange={onChange}
        // onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default SearchInput;
