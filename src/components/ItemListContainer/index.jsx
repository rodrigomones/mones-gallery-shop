import { Typography } from "@material-ui/core";
import CardComponent from "../CardComponent";

export const ItemListContainer = (props) => {
  const producto = {
    name: "Fotografía 1",
    initial: 1,
    stock: 5,
  };

  return (
    <>
      <Typography variant="h1">{props.greeting}</Typography>
      <CardComponent
        name={producto.name}
        initial={producto.initial}
        stock={producto.stock}
      />
    </>
  );
};
