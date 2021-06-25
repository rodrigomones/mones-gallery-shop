import { Typography } from "@material-ui/core";
//import CardComponent from "../CardComponent";
import { useEffect, useState } from "react";
import { getData } from "../../utils";
import { ItemListComponent } from "../ItemListComponent";
import "./style.scss";

export const ItemListContainer = (props) => {
  // const producto = {
  //   name: "Fotografía 1",
  //   initial: 1,
  //   stock: 5,
  // };
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    const waitForData = async () => {
      let data = await getData("zapatillas");
      let aux = data.map((element) => {
        return {
          title: element.title,
          img: element.thumbnail,
          price: element.price,
          stock: element.available_quantity,
          initial: 1,
        };
      });
      setProductos(aux);
    };
    waitForData();
  }, []);

  if (productos.length > 0) {
    console.log(productos);
  }

  return (
    <>
      <div className="container">
        <Typography variant="h1">{props.greeting}</Typography>
        <ItemListComponent productos={productos} />
      </div>
    </>
  );
};
