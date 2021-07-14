import { React, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ItemCount } from "../ItemCount";
import "./style.scss";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const useStyles = makeStyles({
  root: {
    marginTop: "15vh",
    backgroundColor: "#FFFFF9",
    maxWidth: "80vw",
    display: "grid",
    gridTemplateColumns: "1.5fr 0.5fr",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
  },
  media: {
    height: 200,
  },
  btn: {
    background: "#acbcfa",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(4, 64, 75, .2)",
    color: "white",
    height: 48,
    padding: "0 30px",
    display: "block",
    margin: "10px auto",
  },
});

export default function ItemDetail({ productos }) {
  const classes = useStyles();
  // const [stock, setStock] = useState();
  const { addItem } = useContext(CartContext);

  // function updateStock() {
  //   setStock(stock - 1);
  // }

  const onAdd = (itemCount) => {
    addItem(productos, itemCount);
  };
  console.log(productos);
  return (
    <div className={classes.root}>
      <img className="img" src={productos.thumbnail} alt={productos.title} />
      <div className="detail__item">
        <Typography gutterBottom variant="h6" component="h2">
          {productos.title} <br />
        </Typography>
        <Typography variant="h4">${productos.price} </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {productos.description}
        </Typography>
        <Typography variant="overline">
          Stock: {productos.available_quantity} <br />
        </Typography>

        <ItemCount
          stock={productos.available_quantity}
          inital={productos.initial}
          onAdd={onAdd}
          productos={productos}
          // actualizarStock={updateStock}
        />

        <Link style={{ textDecoration: "none" }} to="/cart">
          <Button
            className={classes.btn}
            variant="contained"
            size="small"
            color="primary"
          >
            Ir al carrito
          </Button>
        </Link>
      </div>
    </div>
  );
}
