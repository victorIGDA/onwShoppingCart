import { Header } from "./components/Header";
import { Fotter } from "./components/Fotter";
import { Main } from "./components/Main";
import { useCart } from "./hooks/useCart";


function App() {

  const {cart,addToCart,clearCart,reduceQuantity,removeFromCart}=useCart()

  return (
    <>
      <Header
        cart={cart}
        addToCart={addToCart} 
        clearCart={clearCart}
        reduceQuantity={reduceQuantity}
        removeFromCart={removeFromCart}
      />
      <Main addToCart={addToCart} />
      <Fotter></Fotter>
    </>
  );
}

export default App;
