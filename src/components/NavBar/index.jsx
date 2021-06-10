import "./style.scss";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { CartWidget } from "../CartWidget";

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
          <CartWidget />
          <MenuIcon className="burger" />
        </Toolbar>
      </AppBar>
    </>
  );
};
