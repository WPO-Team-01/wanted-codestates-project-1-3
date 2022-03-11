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

const SizeInput = ({ state, setState }) => {
  const handleSizeInput = (e, num) => {
    let tempSizeList = [...state];
    tempSizeList[num] = e.target.value;
    setState((state) => tempSizeList);
  };

  return (
    <Container>
      <Input placeholder={`가로 (현재 : ${state[0]}px)`} onChange={(e) => handleSizeInput(e, 0)}/>
      <Input placeholder={`세로 (현재 : ${state[1]}px)`} onChange={(e) => handleSizeInput(e, 1)}/>
    </Container>
  );
};

export default SizeInput;
