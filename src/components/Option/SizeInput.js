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
  margin-top: -1px;
  border: 1px #e5e7eb solid;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  margin-top: 10px;
`;

const SizeInput = ({ width, height }) => {
  return (
    <Container>
      <Input placeholder={`가로 (현재 : ${width}px)`} />
      <Input placeholder={`세로 (현재 : ${height}px)`} />
    </Container>
  );
};

export default SizeInput;
