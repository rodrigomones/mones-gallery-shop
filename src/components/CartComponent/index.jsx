import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { CartContext } from "../../Context/CartContext";
import { Button, CssBaseline, IconButton, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import ModalImage from "react-modal-image";
import useStyles from "./styles";
import { Link } from "react-router-dom";

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

  return (
    <>
      <CssBaseline />
      <Button
        component={Link}
        to={"/"}
        color="primary"
        className={classes.buttonBack}
        startIcon={<ArrowBackIcon />}
      >
        Volver Al Home
      </Button>
      <div className={classes.root1}>
        {cart.length === 0 && (
          <div>
            <img
              src="../../images/vacio.jpg"
              alt="Carrito vacío"
              style={{
                backgroundRepeat: "no-repeat",
                position: "relative",
                minWidth: "100%",
                minHeight: "100%",
                backgroundSize: "100%",
              }}
            />
            <span className={classes.text}>El carrito está vacío</span>
          </div>
        )}
        {cart.map((element, index) => {
          return (
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <ModalImage
                        small={element.thumbnail}
                        className={classes.img}
                        large={element.thumbnail}
                        alt={element.title}
                        hideDownload={true}
                        hideZoom={true}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs={6}>
                      <Typography key={index}></Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        {element.title} <br />
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        {element.description} Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ratione provident
                        voluptas.
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <div className={classes.counter}>
                        <Typography variant="h4" gutterBottom>
                          ${element.price * element.qty}{" "}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <IconButton
                        size="small"
                        onClick={() => removeFromCart(element.id)}
                        color="secondary"
                        style={{ justifyContent: "flex-start" }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={9}>
                      <div className={classes.counter}>
                        <Typography
                          className={classes.cantidad}
                          variant="overline"
                        >
                          Cantidad:
                        </Typography>
                        <button
                          className={classes.button}
                          onClick={() => onRemove(element)}
                        >
                          <RemoveCircleOutlineIcon color="primary" />
                        </button>
                        <Typography
                          className={classes.cantidad_num}
                          variant="h5"
                        >
                          {element.qty}
                        </Typography>
                        <button
                          className={classes.button}
                          onClick={() => addItem(element)}
                        >
                          <AddCircleIcon color="primary" />
                        </button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
        })}
        {cart.length !== 0 && (
          <>
            <Paper className={classes.paper} style={{ marginBottom: 100 }}>
              <Grid
                container
                direction="column"
                alignItems="flex-end"
                xs={12}
                spacing={1}
              >
                <Grid item xs={6}>
                  <Typography variant="overline">
                    Envío: ${envioPrice}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Total: ${totalPrice}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    onClick={Clear}
                    color="secondary"
                    startIcon={<DeleteForeverIcon />}
                  >
                    Vaciar Cart
                  </Button>
                  <Button
                    component={Link}
                    to={"/checkout"}
                    variant="contained"
                    color="primary"
                    startIcon={<ReceiptIcon />}
                  >
                    Checkout
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </>
        )}
      </div>
    </>
  );
}
