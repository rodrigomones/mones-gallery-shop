import { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase/client";

export const CartContext = createContext();

const { Provider } = CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [listProductos, setListProductos] = useState([]);
  const [compraId, setCompraId] = useState("");

  useEffect(() => {
    async function getData() {
      const DB = getFirestore();
      const COLLECTION = DB.collection("productos");
      const RESPONSE = await COLLECTION.get();
      setListProductos(
        RESPONSE.docs.map((element) => {
          return { id: element.id, ...element.data() };
        })
      );
    }
    getData();
  }, []);

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
    getTotalQty();
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
    getTotalQty();
  };

  function removeFromCart(id) {
    let aux = cart.filter(function (obj) {
      return obj.id !== id;
    });
    setCart(aux);
    getTotalQty();
  }

  useEffect(() => {
    setQuantity(cart.length);
  }, [cart]);

  function Clear() {
    setCart([]);
    setQuantity(0);
  }

  const getTotalQty = () => {
    let total = cart.reduce((acc, cur) => {
      return cur.qty + acc;
    }, 0);
    setQuantity(total);
  };

  useEffect(() => {
    getTotalQty();
  });

  const createOrder = (datosEnvio) => {
    const order = { buyer: datosEnvio, item: cart, total: totalPrice };
    const db = getFirestore();
    db.collection("orders")
      .add(order)
      .then(({ id }) => {
        setCompraId(id);
      });

    let batch = db.batch();
    let itemsRef = db.collection("productos");
    cart.forEach((obj) => {
      batch.update(itemsRef.doc(obj.id), {
        available_quantity: obj.available_quantity - quantity,
      });
    });
    batch.commit().then(() => {
      Clear();
    });
    console.log(order);
  };
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
        listProductos,
        createOrder,
        compraId,
      }}
    >
      {children}
    </Provider>
  );
};
