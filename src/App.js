import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import { moveToSelect, removeFromSelect } from "./redux/contents/contentsSlice";
import Option from "./components/Option/Option";
import Selector from "./components/Selector/Selector";
import "./App.css";
import SearchInput from "./components/Selector/SearchInput";
import ListWrapper from "./components/Selector/ListWrapper";
import Button from "./components/Selector/Button";
import Popover from "./components/Selector/Popover";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ReplayIcon from "@mui/icons-material/Replay";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
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

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contents);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const asdf = () => {
    dispatch(moveToSelect([9]));
  };

  const remove = () => {
    dispatch(removeFromSelect([9]));
  };

  console.log(data);

  return (
    <div className="App">
      <Container>
        <Wrapper>
          <SearchInput />
          <ListWrapper />
          {/* listwrapper 안에 title, list, 갯수 */}
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
            <ArrowBackIosIcon />
          </Button>
          <Button>
            <KeyboardDoubleArrowRightIcon />
          </Button>
          <Button>
            <KeyboardDoubleArrowLeftIcon />
          </Button>
        </BtnWrapper>
        <Wrapper>
          <SearchInput />
          <ListWrapper />
        </Wrapper>
        {/* 셋팅메뉴 */}
        <PopoverWrapper>
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            <SettingsIcon />
          </Button>
          {isModalOpen ? <Popover /> : ""}
        </PopoverWrapper>
      </Container>

      <button onClick={asdf}>추가</button>
      <button onClick={remove}>지우기</button>
      <Selector />
      <Option />
    </div>
  );
}

export default App;
