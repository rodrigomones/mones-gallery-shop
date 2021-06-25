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
    maxWidth: 345,
    margin: "20px",
  },
  media: {
    height: 200,
  },
});

export default function ItemDetail({
  initial,
  stock,
  title,
  price,
  img,
  description,
}) {
  const classes = useStyles();

  const onAdd = (itemCount) => {
    if (itemCount > 1) {
      alert(`Felicitaciones, compraste ${itemCount} copias!`);
    } else {
      alert("Felicitaciones, compraste una hermosa copia!");
    }
  };

  return (
    <div className="detail">
      <img className="img" src={img} alt="foto1" />
      <div className="detail__item">
        <Typography gutterBottom variant="h5" component="h2">
          {title} <br />${price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography>Stock: {stock}</Typography>
        <ItemCount stock={stock} inital={initial} onAdd={onAdd} />
      </div>
    </div>
  );
}
