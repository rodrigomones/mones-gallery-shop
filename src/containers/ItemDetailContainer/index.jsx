import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import CircularDeterminate from "../../components/Spinner";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import "./style.scss";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(219,247,253)",
    height: "100vh",
  },
});

export const ItemDetailContainer = (props) => {
  const classes = useStyles();
  let { product_id } = useParams();
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${product_id}`)
      .then((response) => response.json())
      .then((response) => setProductos(response));
  }, [product_id]);

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