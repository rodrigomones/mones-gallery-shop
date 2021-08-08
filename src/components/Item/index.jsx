import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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

export default function Item({
  id,
  initial,
  description,
  stock,
  title,
  price,
  img,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={"/item/" + id}>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="h4">${price} </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="overline">Stock: {stock}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={"/item/" + id}
          size="small"
          color="primary"
        >
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
}
