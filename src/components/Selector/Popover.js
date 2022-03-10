import styled from "styled-components";

const MenuWrapper = styled.div`
  border: 1px solid #c3c3c3;
  position: absolute;
  top: 60px;
  width: 200px;
  right: 0;
  background-color: #fff;
  border-radius: 4px; ;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Circle = styled.span`
  display: inline-block;
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const Popover = () => {
  return (
    <MenuWrapper>
      {/* list */}
      <Menu>
        <span>타이틀</span>
        <Circle></Circle>
      </Menu>
    </MenuWrapper>
  );
};

export default Popover;
