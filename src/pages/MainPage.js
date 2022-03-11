import { useSelector, useDispatch } from "react-redux";
import {
  initialization,
  allSelect,
  moveToSelect,
  removeFromSelect,
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
import Popover from "../components/Selector/Popover";
import { useState, useMemo } from "react";
import Selector, { ListType } from "../components/Selector/Selector";

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
  const data = useSelector((state) => state.contents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

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
    if (isMoveOneMode) {
      dispatch(removeFromSelect(isSelected, data));
    } else {
      dispatch(removeFromSelect(multiSelected, data));
      setMultiSelected([]);
    }
  };
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
          <Selector
            data={available}
            title={titleInput[0]}
            isMoveOneMode={isMoveOneMode}
            multiSelected={multiSelected}
            setMultiSelected={setMultiSelected}
          />
          <Selector
            data={availableSearching}
            title={titleInput[0]}
            type={ListType.Available}
            isMoveOneMode={isMoveOneMode}
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
          <Button onClick={() => dispatch(allSelect(data))}>
            <KeyboardDoubleArrowRightIcon />
          </Button>
          <Button onClick={() => dispatch(initialization(data))}>
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
          <Selector
            data={selected}
            title={titleInput[1]}
            isMoveOneMode={isMoveOneMode}
            multiSelected={multiSelected}
            setMultiSelected={setMultiSelected}
          />
          <Selector
            data={data.selected}
            title={titleInput[1]}
            type={ListType.Selected}
            isMoveOneMode={isMoveOneMode}
          />
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
