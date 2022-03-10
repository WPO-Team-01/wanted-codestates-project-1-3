import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px #d1d5db solid;
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
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  margin: 10px 10px;
`;
const Item = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 10px 0;
  margin-top: -1px;
  border: 1px #e5e7eb solid;
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
