import "./App.css";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import Shop from "./components/shop/shop.component.jsx";
import ProductDetail from "./components/product-detail/productDetail.component.jsx";
import Cart from "./components/cart/cart.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
