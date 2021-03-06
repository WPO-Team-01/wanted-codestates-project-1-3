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
  // select์์ available
  const [moveAvailable, setMoveAailable] = useState([]);
  // available ์์ select
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
  const [areaSize, setAreaSize] = useState([300, 800]); // ๊ฐ๋ก, ์ธ๋ก

  // Selector์ props๋ก ๋ด๋?ค์ฃผ๋ state(๋ฐฐ์ด ๊ฐ)
  const [availableInput, setAvailableInput] = useState("");
  const [selectedInput, setSelectedInput] = useState("");
  // input๊ฐ ๊ฐ์?ธ์ค๋ state

  const selectedSearching = useMemo(() => {
    return data.selected.filter((item) => item.name.includes(selectedInput));
  }, [data, selectedInput]);

  const availableSearching = useMemo(() => {
    return data.available.filter((item) => item.name.includes(availableInput));
  }, [data, availableInput]);

  const handleRemoveFromSelect = () => {
    if (!moveAvailable.length) {
      return alert("ํ๋๋ฅผ ์?ํํด ์ฃผ์ธ์");
    }
    dispatch(removeFromSelect(moveAvailable));
    setMoveSelected([]);
    setMoveAailable([]);
  };

  const handleMoveToSelect = () => {
    if (!moveSelected.length) {
      return alert("ํ๋๋ฅผ ์?ํํด ์ฃผ์ธ์");
    }
    dispatch(moveToSelect(moveSelected));
    setMoveSelected([]);
    setMoveAailable([]);
  };

  const onAllSelected = () => {
    if (data.available.length) {
      dispatch(allSelect());
    } else {
      alert("์ถ๊ฐํ? ๋ฐ์ดํฐ๊ฐ ์์ต๋๋ค.");
    }
    setMoveSelected([]);
    setMoveAailable([]);
  };

  const onAllRemoveSelected = () => {
    if (data.selected.length) {
      dispatch(allRemoveSelect());
    } else {
      alert("์?๊ฑฐํ? ๋ฐ์ดํฐ๊ฐ ์์ต๋๋ค.");
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
        {/* ๋ฒํผ๋ชจ์*/}
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
        {/* ์ํ๋ฉ๋ด */}
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
