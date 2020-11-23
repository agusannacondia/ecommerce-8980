import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./contexts/Cart/CartContext";
import Categories from "./components/Categories/Categories";
import Category from "./components/Category/Category";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting={"Bienvenido al E-commerce"} />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/categories/:categoryId">
            <Category />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>          
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
