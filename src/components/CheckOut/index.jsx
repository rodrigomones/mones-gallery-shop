import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: "#faacbc",
    padding: theme.spacing(1),
    position: "absolute",
    top: 220,
    left: 220,
  },
}));

export default function CheckOut() {
  const classes = useStyles();

  return <div className={classes.root}>{"Hola, soy el CART"}</div>;
}
