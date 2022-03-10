import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import TitleInput from "./TitleInput";
import SizeInput from "./SizeInput";

const Container = styled.section`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
`;

// 삭제예정
let title1 = "available optionsasdsad";
let title2 = "selected options";
// 삭제예정 제목 props
let width = "200px";
let height = "50px";
// 삭제예정 사이즈 조절 props

const Option = () => {
  return (
    <Container>
      <Menu title="타이틀" mode="Button" />
      <TitleInput title1={title1} title2={title2} />
      <Menu title="검색" mode="Button" />
      <Menu title="하나씩만 옮기기" mode="Button" />
      <Menu title="선택된 아이템 갯수 표시" mode="Button" />
      <Menu title="아이템 크기" mode="Radio" />
      <SizeInput width={width} height={height} />
    </Container>
  );
};

export default Option;
