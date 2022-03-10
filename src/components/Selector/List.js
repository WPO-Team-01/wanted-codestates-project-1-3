import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
`;
const SubContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 1px #e5e7eb solid;
`;
const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 10px;
  border-bottom: 1px #e5e7eb solid;
  box-sizing: border-box;
  :hover {
    background: #f1f3f8;
  }
`;

const List = ({ data }) => {
  return (
    <Container>
      <Title>available option</Title>
      <SubContainer>
        {data.map((item, index) => (
          <Item key={item.id}>
            {item.emoji}&nbsp;&nbsp;
            {item.name}
          </Item>
        ))}
      </SubContainer>
    </Container>
  );
};

export default List;
