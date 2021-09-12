import SetState from "./components/SetState";
import UseState2 from "./components/UseState2";
import Rendering from "./components/UseEffect";
import UseEffect from "./components/UseEffect";
import GoApi from "./components/GoApi";
import GoApi2 from "./components/GoApi2";

function App() {

  const text = "props 테스트";

  const obj = {
    name: "yoon",
    age: 12
  }

  return (
    <div className="App">
      {/* <SetState />
      <UseState2 /> */}
      {/* <UseEffect name={obj.name}/> */}
      <GoApi />
    </div>
  );
}

export default App;
