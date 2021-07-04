import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ItemCount } from "../ItemCount";
import "./style.scss";

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
});

export default function ItemDetail({ productos }) {
  const classes = useStyles();

  const onAdd = (itemCount) => {
    if (itemCount > 1) {
      alert(`Felicitaciones, compraste ${itemCount} copias!`);
    } else {
      alert("Felicitaciones, compraste una hermosa copia!");
    }
  };

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
        />
      </div>
    </div>
  );
}
