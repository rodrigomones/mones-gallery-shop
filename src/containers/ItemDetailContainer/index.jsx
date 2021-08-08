import { useContext, useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import CircularDeterminate from "../../components/Spinner";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CartContext } from "../../Context/CartContext";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFF",
    height: "100vh",
  },
});

export const ItemDetailContainer = (props) => {
  const classes = useStyles();
  let { product_id } = useParams();
  let [productos, setProductos] = useState([]);
  const { listProductos } = useContext(CartContext);

  // useEffect(() => {
  //   fetch(`https://api.mercadolibre.com/items/${product_id}`)
  //     .then((response) => response.json())
  //     .then((response) => setProductos(response));
  // }, [product_id]);

  useEffect(() => {
    if (product_id) {
      const result = listProductos.find((element) => element.id === product_id);
      setProductos(result);
    }
  }, [listProductos, product_id]);
  console.log(productos);
  return (
    <>
      {productos.length !== 0 ? (
        <div className={classes.root}>
          <ItemDetail productos={productos} />
        </div>
      ) : (
        <CircularDeterminate />
      )}
    </>
  );
};
