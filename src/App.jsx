import { useState } from "react";
import { ShoppingCartContext } from "./contexts/ShoppingCart";

import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <>
      <nav className="nav__bar">
        <span
          className="nav__bar__button"
          onClick={() => {
            setCartVisible(false);
          }}
        >
          Product Page
        </span>
        <span
          className="nav__bar__button"
          onClick={() => {
            setCartVisible(true);
          }}
        >
          Cart
        </span>
      </nav>
      <ShoppingCartContext.Provider value={{ cart, setCart }}>
        {!cartVisible && <ProductPage />}
        {cartVisible && <ShoppingCart />}
      </ShoppingCartContext.Provider>
    </>
  );
}

export default App;
