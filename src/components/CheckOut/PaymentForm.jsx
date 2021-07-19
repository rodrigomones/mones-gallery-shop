import {
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const PaymentForm = ({ backStep, datosEnvio, nextStep }) => {
  const { cart, totalPrice, envioPrice, createOrder } = useContext(CartContext);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Orden
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.id}>
            <ListItemAvatar>
              <Avatar alt={product.title} src={product.thumbnail} />
            </ListItemAvatar>
            <ListItemText
              primary={product.title}
              secondary={`Cantidad: ${product.qty}`}
            />
            <Typography variant="body2">
              $ {product.price * product.qty}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "20px 0 0 0" }}>
          <ListItemText primary="Gastos envío" />
          <Typography variant="subtitle1" style={{ fontWeight: 400 }}>
            $ {envioPrice}
          </Typography>
        </ListItem>
        <ListItem style={{ padding: "5px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            $ {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Metodo de Pago
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={backStep}>
          Volver
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            createOrder(datosEnvio);
            nextStep();
          }}
        >
          Pagar ${totalPrice}
        </Button>
      </div>
    </>
  );
};

export default PaymentForm;
