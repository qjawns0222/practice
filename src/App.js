import logo from "./logo.svg";
import "./App.css";
import Add from "./components/add";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List />
        <Add />
      </header>
    </div>
  );
}

export default App;
