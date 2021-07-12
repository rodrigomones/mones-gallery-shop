import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import "./style.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px",
  },
  media: {
    height: 200,
    backgroundSize: "contain",
  },
});

export default function Item({ id, initial, stock, title, price, img }) {
  const classes = useStyles();

  // const onAdd = (itemCount) => {
  //   if (itemCount > 1) {
  //     alert(`Felicitaciones, compraste ${itemCount} copias!`);
  //   } else {
  //     alert("Felicitaciones, compraste una hermosa copia!");
  //   }
  // };
  return (
    <Card className={classes.root}>
      <Link className="link" to={"/item/" + id}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="h4">${price} </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores libero in recusandae necessitatibus aut magni eaque.
            </Typography>
            <Typography variant="overline">Stock: {stock}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {/* <ItemCount stock={stock} inital={initial} onAdd={onAdd} /> */}
      <CardActions>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
