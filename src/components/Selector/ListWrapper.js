import styled from "styled-components";

const Ul = styled.ul`
  width: 250px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  min-height: 500px;
`;

const ListWrapper = () => {
  return (
    <div>
      <Ul></Ul>
    </div>
  );
};

export default ListWrapper;
