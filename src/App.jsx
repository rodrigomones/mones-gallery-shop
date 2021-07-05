import Carousel from "./components/Carousel";
import "./App.css";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Carousel
              titulo={"LAS MEJORES OFERTAS"}
              subtitulo={"Encontrá todo lo que necesites en un solo lugar"}
            />
            <ItemListContainer />
          </Route>
          <Route path="/category/:category_id">
            <Carousel />
            <ItemListContainer greeting={"Listado de productos"} />
          </Route>
          <Route
            exact
            path="/item/:product_id"
            component={ItemDetailContainer}
          />
          <CheckOut path="/cart" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
