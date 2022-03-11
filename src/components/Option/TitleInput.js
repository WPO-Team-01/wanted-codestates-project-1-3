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

const TitleInput = ({ title, setTitle, state }) => {
  const handleTitleInput = (e, num) =>{
    if(state){
      let tempTitleList = [...title];
      tempTitleList[num] = e.target.value;
      setTitle((title) => tempTitleList);
    }
  };


  return (
    <Container>
      <Input placeholder="타이틀을 입력해 주세요." defaultValue={title[0]} onChange={(e)=> handleTitleInput(e, 0)} />
      <Input placeholder="타이틀을 입력해 주세요." defaultValue={title[1]} onChange={(e) => handleTitleInput(e, 1)} />
    </Container>
  );
};

export default TitleInput;
