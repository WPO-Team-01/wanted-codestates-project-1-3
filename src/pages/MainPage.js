import { useState } from "react";

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

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Container>
        <Wrapper>
          <SearchInput />
          <Selector />
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
          <SearchInput />
          <Selector />
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
