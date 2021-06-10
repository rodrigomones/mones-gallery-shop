import Badge from "@material-ui/core/Badge";
import { ShoppingCart } from "@material-ui/icons";

export const CartWidget = () => {
  return (
    <>
      <Badge badgeContent={2} color="secondary">
        <ShoppingCart className="carro" />
      </Badge>
    </>
  );
};
