import "./style.scss";
import { AppBar, Toolbar, CssBaseline, useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CartWidget } from "../CartWidget";
import { NavLink, Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NavDrawer from "./Drawer";

const useStyles = makeStyles({
  root: {
    background: "transparent",
    position: "absolute",
  },
});

export const NavBar = () => {
  const classes = useStyles();

  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.root} position="relative">
        <Toolbar>
          <Link exact to={"/"}>
            <img src="/images/logoec.png" width="60px" alt="logo" />
          </Link>
          {isMatch ? (
            <NavDrawer />
          ) : (
            <>
              <NavLink
                className="btn1"
                to="/category/35mm-h"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "#0badce",
                }}
              >
                <Button style={{ color: "secondary" }}>35mm ↔</Button>
              </NavLink>
              <NavLink
                className="btn2"
                to="/category/35mm-v"
                activeStyle={{
                  fontWeight: "bold",
                  backgroundColor: "#0badce",
                }}
              >
                <Button style={{ color: "secondary" }}>35mm ↕</Button>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
