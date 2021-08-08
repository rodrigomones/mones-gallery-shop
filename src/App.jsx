import "./App.css";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import CartComponent from "./components/CartComponent";
import { Checkout } from "./components/CheckOut";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import MainHero from "./components/MainHero";
import TextAnimation from "./components/MainHero/TextAnimation";
import { HomeCards } from "./components/Home/HomeCards";

function App() {
  return (
    <CartProvider value={[]}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <MainHero
                titulo={"Fotografía"}
                subtitulo={"Analógica"}
                body={<TextAnimation />}
              />
              <Home />
              <HomeCards />
            </Route>
            <Route path="/category/:category_id">
              <MainHero />
              <ItemListContainer greeting={"Listado de fotografías"} />
            </Route>
            <Route
              exact
              path="/item/:product_id"
              component={ItemDetailContainer}
            />
            <CartComponent path="/cart" />
            <Checkout path="/checkout" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
