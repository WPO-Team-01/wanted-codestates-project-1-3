import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { moveToSelect, removeFromSelect } from "./redux/contents/contentsSlice";
import Option from "./components/Option/Option";
import Selector from "./components/Selector/Selector";

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
      <button onClick={asdf}>추가</button>
      <button onClick={remove}>지우기</button>
      <Selector />
      <Option />
    </div>
  );
}

export default App;
