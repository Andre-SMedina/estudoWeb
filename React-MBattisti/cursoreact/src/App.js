import "./App.css";
import FirstComponent from "./components/FirstComponent";
import AnotherComponent from "./components/AnotherComponent";
import Images from "./components/Images";
import Hooks from "./components/Hooks";
import List from "./components/List";
import RenderCond from "./components/renderCond";
import Fragment from "./components/fragment";
import Container from "./components/container";

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={5} y={8} />
      <Fragment />
      <Container>
        <h1>Este é filho container</h1>
      </Container>
    </div>
  );
}

export default App;
