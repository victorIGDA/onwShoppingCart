import { useState } from "react";
import { Header } from "./components/header";
import { Fotter } from "./components/Fotter";
import { Main } from "./components/Main";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const exist = cart.findIndex((items) => items.id === product.id);

    if (exist == -1) {
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      const updateCart = [...cart];
      updateCart[exist].quantity++;
      setCart(updateCart);
    }
  }

  return (
    <>
      <Header
        cart={cart}
      />
      <Main addToCart={addToCart} />
      <Fotter></Fotter>
    </>
  );
}

export default App;
