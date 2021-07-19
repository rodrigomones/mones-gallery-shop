import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "15vh",
    backgroundColor: "#FFFFF9",
    maxWidth: "80vw",
    display: "grid",
    gridTemplateColumns: "1.5fr 0.5fr",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
  },
  media: {
    height: 200,
  },
  btn: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(4, 64, 75, .2)",
    height: 48,
    padding: "0 10px",
    display: "block",
    margin: "10px auto",
  },
  button_volver: {
    position: "absolute",
    left: -100,
    top: -20,
    zIndex: 99,
  },
  img: {
    margin: "auto",
    maxWidth: "70vw",
    maxHeight: "80vh",
  },
  detail__item: {
    gridColumn: "2 / 3",
    margin: "auto",
    paddingRight: "20px",
  },
}));
