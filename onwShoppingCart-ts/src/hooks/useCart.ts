import { useEffect, useState } from "react";


export function useCart() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    if (product.quantity > 1) {
      const updateCart = [...cart];
      updateCart[exist].quantity--;
      setCart(updateCart);
    }
  }

  function removeFromCart(product) {
    const removerItem = cart.filter((item) => item.id !== product.id);
    setCart(removerItem);
  }

  function clearCart() {
    setCart([]);
  }

  return {
    addToCart,
    cart,
    reduceQuantity,
    removeFromCart,
    clearCart,
  };
}
