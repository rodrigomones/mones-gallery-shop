import { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TextField from "@material-ui/core/TextField";
import "./style.scss";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#0e93f2",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(4, 64, 75, .2)",
    color: "white",
    height: 48,
    padding: "0 30px",
    display: "block",
    margin: "10px auto",
  },
  media: {
    width: "40px",
    height: "40px",
    color: "secondary",
  },
});

export const ItemCount = ({ stock, initial, onAdd, actualizarStock }) => {
  const [itemCount, setItemCount] = useState(1);
  const classes = useStyles();

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
          <ButtonGroup>
            <Button aria-label="reduce" onClick={restar}>
              <RemoveIcon fontSize="small" />
            </Button>
            <TextField
              className={classes.media}
              id="outlined-basic"
              value={itemCount}
              variant="outlined"
              size="small"
            />

            <Button aria-label="increase" onClick={suma}>
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <Button
            className={classes.root}
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
