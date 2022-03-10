import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  const data = useSelector((state) => state.contents);

  return (
    <div className="App">
      <MainPage data={data} />
    </div>
  );
}

export default App;
