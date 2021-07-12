import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addItem = (productos, itemCount) => {
    let exist = cart.find((x) => x.id === productos.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === productos.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...productos, qty: itemCount }]);
    }
  };

  const onRemove = (productos) => {
    const exist = cart.find((x) => x.id === productos.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== productos.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === productos.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  function removeFromCart(id) {
    let aux = cart.filter(function (obj) {
      return obj.id !== id;
    });
    setCart(aux);
  }

  useEffect(() => {
    setQuantity(cart.length);
  }, [cart]);

  function Clear() {
    setCart([]);
  }

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (!localCart) localStorage.setItem("cart", JSON.stringify([]));
    else setCart(JSON.parse(localCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const envioPrice = itemsPrice > 10000 ? 0 : 500;
  let totalPrice = itemsPrice + envioPrice;

  return (
    <Provider
      value={{
        addItem,
        cart,
        setCart,
        quantity,
        setQuantity,
        Clear,
        onRemove,
        totalPrice,
        envioPrice,
        removeFromCart,
      }}
    >
      {children}
    </Provider>
  );
};
