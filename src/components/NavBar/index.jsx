import "./style.scss";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";

export const NavBar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar className="Navbar" position="relative">
        <Toolbar>
          <img src="./images/logoec.png" width="60px" alt="logo" />
          <Button href="#text-buttons" className="btn1">
            Link1
          </Button>
          <Button href="#text-buttons" className="btn2">
            Link2
          </Button>
          <Button href="#text-buttons" className="btn3">
            Link3
          </Button>

          <Badge badgeContent={2} color="secondary">
            <ShoppingCart className="carro" />
          </Badge>
          <MenuIcon className="burger" />
        </Toolbar>
      </AppBar>
    </>
  );
};
