import { Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemListComponent } from "../../components/ItemListComponent";
import "./style.scss";
import { CartContext } from "../../Context/CartContext";

export const ItemListContainer = (props) => {
  let { category_id } = useParams();
  const [productos, setProductos] = useState([]);
  const { listProductos } = useContext(CartContext);

  useEffect(() => {
    const waitForData = async () => {
      let data = await listProductos.filter(
        (item) => item.category === `${category_id}`
      );
      let aux = data.map((element) => {
        return {
          id: element.id,
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
  }, [category_id, listProductos]);

  return (
    <>
      <div className="container">
        <Typography className="texto" variant="h2">
          {props.greeting}
        </Typography>
        <ItemListComponent productos={productos} />
      </div>
    </>
  );
};
