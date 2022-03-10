import React from "react";
import styled from "styled-components";
import Menu from "../Option/Menu";
import TitleInput from "../Option/TitleInput";
import SizeInput from "../Option/SizeInput";

const Container = styled.section`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  position: absolute;
  right: 0;
  background: #fff;
`;

// 삭제예정
let title1 = "available optionsasdsad";
let title2 = "selected options";
// 삭제예정 제목 props
let width = "200px";
let height = "50px";
// 삭제예정 사이즈 조절 props

const Popover = ({
  titleChange,
  setTitleChange,
  title,
  setTitle,
  searchMode,
  setSearchMode,
  moveOneMode,
  setMoveOneMode,
  displaySelectItem,
  setDisplaySelectItem,
  itemSize,
  setItemSize,
  areaSize,
  setAreaSize,
}) => {
  return (
    <Container>
      <Menu title="타이틀" mode="Button" state={titleChange} setState={setTitleChange} />
      <TitleInput title={title} setTitle={setTitle} state={titleChange} />
      <Menu title="검색" mode="Button" state={searchMode} setState={setSearchMode} />
      <Menu title="하나씩만 옮기기" mode="Button" state={moveOneMode} setState={setMoveOneMode} />
      <Menu
        title="선택된 아이템 갯수 표시"
        mode="Button"
        state={displaySelectItem}
        setState={setDisplaySelectItem}
      />
      <Menu title="아이템 크기" mode="Radio" state={itemSize} setState={setItemSize} />
      <SizeInput width={width} height={height} state={areaSize} setState={setAreaSize} />
    </Container>
  );
};

export default Popover;
