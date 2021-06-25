// import { Carousel } from "./components/Carousel";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Carousel /> */}
      {/* <ItemListContainer greeting={"MONES"} /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
