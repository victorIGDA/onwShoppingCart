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

  function reduceQuantity(product) {
    const exist = cart.findIndex((items) => items.id === product.id);
    if (product.quantity >1) { 
      const updateCart = [...cart];
      updateCart[exist].quantity--;
      setCart(updateCart);
    }
  }

  function clearCart(){
    setCart([]);
  }


  return (
    <>
      <Header
        cart={cart}
        addToCart={addToCart} 
        clearCart={clearCart}
        reduceQuantity={reduceQuantity}
      />
      <Main addToCart={addToCart} />
      <Fotter></Fotter>
    </>
  );
}

export default App;
