import Carousel from "./components/Carousel";
import "./App.css";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import CartComponent from "./components/CartComponent";

function App() {
  return (
    <CartProvider value={[]}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Carousel
                titulo={"LAS MEJORES OFERTAS"}
                subtitulo={"Envío gratis gastando más de $10000!"}
              />
              <ItemListContainer />
            </Route>
            <Route path="/category/:category_id">
              <Carousel />
              <ItemListContainer greeting={""} />
            </Route>
            <Route
              exact
              path="/item/:product_id"
              component={ItemDetailContainer}
            />
            <CartComponent path="/cart" />
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
