import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import CircularDeterminate from "../Spinner";
// import "./style.scss";

export const ItemDetailContainer = (props) => {
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("json/productos.json")
      .then((response) => response.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
        }, 4000);
      });
  }, []);

  return (
    <>
      {productos ? (
        <div className="container">
          <ItemDetail
            title={productos.title}
            initial={productos.initial}
            stock={productos.stock}
            img={productos.img}
            price={productos.price}
            description={productos.description}
          />
        </div>
      ) : (
        <CircularDeterminate />
      )}
    </>
  );
};
