import { useSelector, useDispatch } from "react-redux";
import {
  initialization,
  allSelect,
  moveToSelect,
  removeFromSelect,
  allRemoveSelect,
} from "../redux/contents/contentsSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ReplayIcon from "@mui/icons-material/Replay";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import SearchInput from "../components/Selector/SearchInput";
import Button from "../components/Selector/Button";
import Option from "../components/Option/Option";
import { useState, useMemo } from "react";
import Selector, { ListType } from "../components/Selector/Selector";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  box-sizing: border-box;
  height: ${(props) => String(props.height) + "px"};
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const Wrapper = styled.div`
  margin: 0 10px;
  width: ${(props) => String(props.width) + "px"};
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

const MainPage = () => {
  const data = useSelector((state) => state.contents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // select에서 available
  const [moveAvailable, setMoveAailable] = useState([]);
  // available 에서 select
  const [moveSelected, setMoveSelected] = useState([]);

  const dispatch = useDispatch();

  const [isTitleChange, setIsTitleChange] = useState(false);
  const [titleInput, setTitleInput] = useState([
    "available options",
    "selected options",
  ]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isMoveOneMode, setIsMoveOneMode] = useState(true);
  const [isDisplaySelectItem, setIsDisplaySelectItem] = useState(false);
  const [itemSize, setItemSize] = useState("M");
  const [areaSize, setAreaSize] = useState([300, 800]); // 가로, 세로

  // Selector에 props로 내려주는 state(배열 값)
  const [availableInput, setAvailableInput] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  // input값 가져오는 state

  const selectedSearching = useMemo(() => {
    return data.selected.filter((item) => item.name.includes(selectedInput));
  }, [data, selectedInput]);

  const availableSearching = useMemo(() => {
    return data.available.filter((item) => item.name.includes(availableInput));
  }, [data, availableInput]);

  const handleRemoveFromSelect = () => {
    if (!moveAvailable.length) {
      return alert("필드를 선택해 주세요");
    }
    dispatch(removeFromSelect(moveAvailable));
    setMoveSelected([]);
    setMoveAailable([]);
  };

  const handleMoveToSelect = () => {
    if (!moveSelected.length) {
      return alert("필드를 선택해 주세요");
    }
    dispatch(moveToSelect(moveSelected));
    setMoveSelected([]);
    setMoveAailable([]);
  };

  const onAllSelected = () => {
    if (data.available.length) {
      dispatch(allSelect());
    } else {
      alert("추가할 데이터가 없습니다.");
    }
    setMoveSelected([]);
    setMoveAailable([]);
  };

  const onAllRemoveSelected = () => {
    if (data.selected.length) {
      dispatch(allRemoveSelect());
    } else {
      alert("제거할 데이터가 없습니다.");
    }
    setMoveSelected([]);
    setMoveAailable([]);
  };

  return (
    <div>
      <Container height={areaSize[1]}>
        <Wrapper width={areaSize[0]}>
          <SearchInput
            value={availableInput}
            setValue={setAvailableInput}
            enter={availableSearching}
            isSearchMode={isSearchMode}
          />
          <Selector
            data={availableSearching}
            title={titleInput[0]}
            type={ListType.Available}
            isMoveOneMode={isMoveOneMode}
            select={moveSelected}
            setMultiSelected={setMoveSelected}
            fieldCount={data.available.length}
            selectCount={moveSelected.length}
            isDisplaySelectItem={isDisplaySelectItem}
            itemSize={itemSize}
          />
        </Wrapper>
        {/* 버튼모음*/}
        <BtnWrapper>
          <Button onClick={() => dispatch(initialization(data))}>
            <ReplayIcon />
          </Button>
          <Button
            onClick={() => {
              handleMoveToSelect();
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
          <Button
            onClick={() => {
              handleRemoveFromSelect();
            }}
          >
            <ArrowBackIosNewIcon />
          </Button>
          <Button onClick={onAllSelected}>
            <KeyboardDoubleArrowRightIcon />
          </Button>
          <Button onClick={onAllRemoveSelected}>
            <KeyboardDoubleArrowLeftIcon />
          </Button>
        </BtnWrapper>
        <Wrapper width={areaSize[0]}>
          <SearchInput
            value={selectedInput}
            setValue={setSelectedInput}
            enter={selectedSearching}
            isSearchMode={isSearchMode}
          />
          <Selector
            data={selectedSearching}
            title={titleInput[1]}
            type={ListType.Selected}
            isMoveOneMode={isMoveOneMode}
            select={moveAvailable}
            setMultiSelected={setMoveAailable}
            fieldCount={data.selected.length}
            selectCount={moveAvailable.length}
            isDisplaySelectItem={isDisplaySelectItem}
            itemSize={itemSize}
          />
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
