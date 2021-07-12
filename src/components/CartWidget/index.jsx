import Badge from "@material-ui/core/Badge";
import { ShoppingCart } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { quantity } = useContext(CartContext);
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/cart">
        <Badge badgeContent={quantity} color="secondary">
          <ShoppingCart className="carro" />
        </Badge>
      </Link>
    </>
  );
};
