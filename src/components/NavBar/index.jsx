import "./style.scss";
import { AppBar, Toolbar, CssBaseline, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { CartWidget } from "../CartWidget";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "transparent",
    position: "absolute",
  },
});

export const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.root} position="relative">
        <Toolbar>
          <Link exact to={"/"}>
            <img src="/images/logoec.png" width="60px" alt="logo" />
          </Link>
          <NavLink
            className="btn1"
            to="/category/35mm-h"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#0badce",
            }}
          >
            <Button style={{ color: "secondary" }}>35mm ↕</Button>
          </NavLink>
          <NavLink
            className="btn2"
            to="/category/35mm-v"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#0badce",
            }}
          >
            <Button style={{ color: "secondary" }}>35mm ↔</Button>
          </NavLink>
          <NavLink
            className="btn3"
            to="/category/120film"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#0badce",
            }}
          >
            <Button style={{ color: "secondary" }}>120film</Button>
          </NavLink>
          <CartWidget />
          <IconButton className="burger" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
