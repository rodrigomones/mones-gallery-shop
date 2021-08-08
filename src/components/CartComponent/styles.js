import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 7,
  },
  root1: {
    paddingTop: 70,
  },
  paper: {
    padding: 10,
    margin: "auto",
    maxWidth: 700,
    textAlign: "initial",
    alignContent: "space-between",
  },
  image: {
    minWidth: "128px",
    maxHeight: "128px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "128px",
    maxHeight: "128px",
  },
  buttonBack: {
    textDecoration: "none",
    position: "absolute",
    left: 40,
    top: 80,
    zIndex: 99,
  },
  text: {
    position: "absolute",
    right: "40%",
    top: 80,
    fontSize: "2rem",
  },
  cantidad_num: {
    width: "40px",
    textAlign: "center",
  },
  counter: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  },
}));
