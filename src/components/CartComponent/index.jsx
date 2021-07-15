import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { CartContext } from "../../Context/CartContext";
import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import "./cart.scss";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "15vh",
    backgroundColor: "#FFFFF9",
    maxWidth: "80vw",
    height: "fit-content",
    display: "grid",
    gridTemplateColumns: "1.5fr 0.5fr",
    gridTemplateRows: "auto",
    rowGap: "30px",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
  },
  media: {
    margin: "auto",
    width: "100%",
  },
  delete: {
    position: "absolute",
    left: 200,
  },
  cantidad: {
    fontSize: "14px",
  },
  checkout: {
    margin: "auto",
  },
  grilla: {
    border: "1px solid black",
  },
  buttonBack: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    position: "absolute",
  },
  text: {
    position: "absolute",
    right: 0,
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
  },
});

export default function CartComponent({ productos }) {
  const {
    onRemove,
    addItem,
    totalPrice,
    cart,
    envioPrice,
    Clear,
    removeFromCart,
  } = useContext(CartContext);
  const classes = useStyles();

  // const onAdd = (productos, qty) => {
  //   addItem(productos, qty);
  // };
  // const Borrar = (productos, quantity) => {
  //   onRemove(productos.id);
  // };

  return (
    <div className={classes.root}>
      <Link className={classes.link} to={"/"}>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonBack}
          startIcon={<ArrowBackIcon />}
        >
          Volver Al Home
        </Button>
      </Link>
      {cart.length === 0 && (
        <div
          style={{
            backgroundImage: `url("https://lukaszadam.com/assets/downloads/guy_on_desk.svg")`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className={classes.text}>El carrito está vacío</span>
        </div>
      )}
      {cart.map((element, index) => {
        return (
          <>
            <img
              className={classes.media}
              src={element.thumbnail}
              alt={element.title}
            />
            <div className="detail__item">
              <span key={index}></span>
              <Typography gutterBottom variant="h6" component="h2">
                {element.title} <br />
              </Typography>
              <Typography variant="h4">${element.price} </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {element.description}
              </Typography>
              <button onClick={() => onRemove(element)}>
                <RemoveCircleOutlineIcon color="secondary" />
              </button>
              <Typography className={classes.cantidad} variant="overline">
                Cantidad: {element.qty}
              </Typography>
              <button onClick={() => addItem(element)}>
                <AddCircleIcon color="primary" />
              </button>
              <button onClick={() => removeFromCart(element.id)}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </button>
            </div>
          </>
        );
      })}
      {cart.length !== 0 && (
        <>
          <button className={classes.delete} onClick={Clear}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteForeverIcon />}
            >
              Vaciar Cart
            </Button>
          </button>
          <button
            className={classes.checkout}
            onClick={() => alert("Apretaste Checkout", Clear())}
          >
            {" "}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<ReceiptIcon />}
            >
              Checkout
            </Button>
          </button>
          <Grid
            className={classes.grilla}
            container
            direction="column"
            alignItems="flex-end"
            spacing={1}
          >
            <Grid item xs={6}>
              <Typography variant="overline">Envío: ${envioPrice}</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6">Total: ${totalPrice}</Typography>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}
