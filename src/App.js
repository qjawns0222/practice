import "./App.css";
import List from "./components/list";
import Add from "./components/add";

import User from "./components/user";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User />
        <Add />
        <List />
      </header>
    </div>
  );
}

export default App;
