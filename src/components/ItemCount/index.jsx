import { useState } from "react";
import Button from "@material-ui/core/Button";
import "./style.scss";
import { Typography } from "@material-ui/core";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [itemCount, setItemCount] = useState(1);

  const suma = () => {
    if (itemCount < stock) {
      setItemCount(itemCount + 1);
    }
  };
  const restar = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <>
      {stock > 0 ? (
        <>
          <button onClick={restar}>-</button>
          <input className="input" type="text" value={itemCount} readOnly />
          <button onClick={suma}>+</button>
          <Button
            className="btn"
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => onAdd(itemCount)}
          >
            Añadir a carrito
          </Button>
        </>
      ) : (
        <Typography>No hay más disponibilidad</Typography>
      )}
    </>
  );
};
