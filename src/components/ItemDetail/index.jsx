import { React, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { ItemCount } from "../ItemCount";
import { Button, CssBaseline } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "./styles";

export default function ItemDetail({ productos }) {
  const classes = useStyles();
  // const [stock, setStock] = useState();
  const { addItem } = useContext(CartContext);

  const history = useHistory();
  const handleUrl = () => {
    history.push(`/category/${productos.category}`);
  };

  // function updateStock() {
  //   setStock(stock - 1);
  // }

  const onAdd = (itemCount) => {
    addItem(productos, itemCount);
  };
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Button
          color="primary"
          className={classes.button_volver}
          startIcon={<ArrowBackIcon />}
          onClick={handleUrl}
        >
          Volver
        </Button>
        <img
          className={classes.img}
          src={productos.thumbnail}
          alt={productos.title}
        />
        <div className={classes.detail__item}>
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
              variant="outlined"
              size="small"
              color="primary"
            >
              Ir al carrito
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
