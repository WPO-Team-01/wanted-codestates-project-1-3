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
  console.log(availableInput);
  console.log(available);

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
          />
          <Selector data={available} />
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
          />
          <Selector data={selected} />
        </Wrapper>
        {/* 셋팅메뉴 */}
        <PopoverWrapper>
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            <SettingsIcon />
          </Button>
          {isModalOpen ? <Popover /> : ""}
        </PopoverWrapper>
      </Container>
    </div>
  );
};

export default MainPage;
