import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #e5e7eb;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  margin-top: 10px;
`;

const TitleInput = ({ title1, title2 }) => {
  return (
    <Container>
      <Input placeholder="타이틀을 입력해 주세요." defaultValue={title1} />
      <Input placeholder="타이틀을 입력해 주세요." defaultValue={title2} />
    </Container>
  );
};

export default TitleInput;
