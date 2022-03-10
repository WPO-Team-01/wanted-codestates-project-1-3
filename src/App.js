import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { moveToSelect, removeFromSelect } from "./redux/contents/contentsSlice";
import styled from "styled-components";
import MainPage from "./pages/MainPage";

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

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contents);

  const asdf = () => {
    dispatch(moveToSelect([9]));
  };

  const remove = () => {
    dispatch(removeFromSelect([9]));
  };

  console.log(data);

  return (
    <div className="App">
      <MainPage />

      <button onClick={asdf}>추가</button>
      <button onClick={remove}>지우기</button>
    </div>
  );
}

export default App;
