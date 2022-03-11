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
import Popover from "../components/Selector/Popover";
import Selector from "../components/Selector/Selector";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  margin: 0 10px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
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
  const [itemSize, setItemSize] = useState("XS");
  const [areaSize, setAreaSize] = useState([200, 50]); // 가로, 세로

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

  useEffect(() => {
    setAvailable(data.available);
    setSelected(data.selected);
  }, [data]);

  // 1. input 에 입력할 때마다 바로바로 검색되는 경우
  useEffect(() => availableSearching(), [availableInput]);
  useEffect(() => selectedSearching(), [selectedInput]);
  // 위 두줄로 작동(주석 해제하면 됨.)

  // 2. input 에 입력 뒤 엔터키를 쳐야만 검색되는 경우
  // SearchInput 태그에 enter props로 내려주는 것과,
  // searchInput 파일안의 onKeyPress 핸들러로 작동

  return (
    <div>
      <Container>
        <Wrapper>
          <SearchInput
            value={availableInput}
            setValue={setAvailableInput}
            enter={availableSearching}
            isSearchMode={isSearchMode}
          />
          <Selector data={available} title={titleInput[0]} />
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
        <Wrapper>
          <SearchInput
            value={selectedInput}
            setValue={setSelectedInput}
            enter={selectedSearching}
            isSearchMode={isSearchMode}
          />
          <Selector data={selected} title={titleInput[1]} />
        </Wrapper>
        {/* 셋팅메뉴 */}
        <PopoverWrapper>
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            <SettingsIcon />
          </Button>
          {isModalOpen ? (
            <Popover
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
