import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hello World!"} />
    </div>
  );
}

export default App;
