import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ReplayIcon from "@mui/icons-material/Replay";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import SearchInput from "../components/Selector/SearchInput";
import Button from "../components/Selector/Button";
import Selector from "../components/Selector/Selector";
import Option from '../components/Option/Option';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  box-sizing: border-box;
  height: ${props => String(props.height)+"px"};
`;

const Wrapper = styled.div`
  margin: 0 10px;
  width: ${props => String(props.width)+"px"};
  height: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  height: 100%;
`;

const PopoverWrapper = styled.div`
  position: relative;
`;

const MainPage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isTitleChange, setIsTitleChange] = useState(false);
  const [titleInput, setTitleInput] = useState([
    "available options",
    "selected options",
  ]); // available, selected
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isMoveOneMode, setIsMoveOneMode] = useState(false);
  const [isDisplaySelectItem, setIsDisplaySelectItem] = useState(false);
  const [itemSize, setItemSize] = useState("M");
  const [areaSize, setAreaSize] = useState([300, 800]); // 가로, 세로

  const [available, setAvailable] = useState(data.available);
  const [selected, setSelected] = useState(data.selected);
  // Selector에 props로 내려주는 state(배열 값)
  const [availableInput, setAvailableInput] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  // input값 가져오는 state
  const availableData = data.available;
  const selectedData = data.selected;
  // data값 보관하는 const 값

  const availableSearching = () => {
    setAvailable(
      availableData.filter((e) => {
        return e.name.includes(availableInput);
      })
    );
  };
  const selectedSearching = () => {
    setSelected(
      selectedData.filter((e) => {
        return e.includes(selectedInput);
      })
    );
  };

  // 1. input 에 입력할 때마다 바로바로 검색되는 경우
  useEffect(() => availableSearching(), [availableInput]);
  useEffect(() => selectedSearching(), [selectedInput]);
  // 위 두줄로 작동(주석 해제하면 됨.)

  // 2. input 에 입력 뒤 엔터키를 쳐야만 검색되는 경우
  // SearchInput 태그에 enter props로 내려주는 것과,
  // searchInput 파일안의 onKeyPress 핸들러로 작동

  return (
    <div>
      <Container height={areaSize[1]}>
        <Wrapper width ={areaSize[0]}>
          <SearchInput
            value={availableInput}
            setValue={setAvailableInput}
            enter={availableSearching}
          />
          <Selector data={available} title={titleInput[0]} itemSize={itemSize}/>
        </Wrapper>
        {/* 버튼모음*/}
        <BtnWrapper>
          <Button>
            <ReplayIcon />
          </Button>
          <Button>
            <ArrowForwardIosIcon />
          </Button>
          <Button>
            <ArrowBackIosNewIcon />
          </Button>
          <Button>
            <KeyboardDoubleArrowRightIcon />
          </Button>
          <Button>
            <KeyboardDoubleArrowLeftIcon />
          </Button>
        </BtnWrapper>
        <Wrapper width ={areaSize[0]}>
          <SearchInput
            value={selectedInput}
            setValue={setSelectedInput}
            enter={selectedSearching}
          />
          <Selector data={selected} title={titleInput[1]} itemSize={itemSize} />
        </Wrapper>
        {/* 셋팅메뉴 */}
        <PopoverWrapper>
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            <SettingsIcon />
          </Button>
          {isModalOpen ? (
            <Option
              titleChange={isTitleChange}
              setTitleChange={setIsTitleChange}
              title={titleInput}
              setTitle={setTitleInput}
              searchMode={isSearchMode}
              setSearchMode={setIsSearchMode}
              moveOneMode={isMoveOneMode}
              setMoveOneMode={setIsMoveOneMode}
              displaySelectItem={isDisplaySelectItem}
              setDisplaySelectItem={setIsDisplaySelectItem}
              itemSize={itemSize}
              setItemSize={setItemSize}
              areaSize={areaSize}
              setAreaSize={setAreaSize}
            />
          ) : (
            ""
          )}
        </PopoverWrapper>
      </Container>
    </div>
  );
};

export default MainPage;
