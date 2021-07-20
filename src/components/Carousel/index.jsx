import { Typography } from "@material-ui/core";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "150px",
    marginLeft: "25vw",
    fontWeight: 900,
    zIndex: 99,
    "& span": {
      fontWeight: 400,
      fontSize: 24,
    },
  },
});

const Carousel = (props) => {
  const classes = useStyles();
  let {
    location: { pathname },
  } = props;
  let pathnames = pathname.split("/").filter((x) => x);
  var imagen;
  if (pathnames.includes("35mm-h")) {
    imagen = "horizontal.jpg";
  } else if (pathnames.includes("35mm-v")) {
    imagen = "vertical.jpg";
  } else if (pathnames.includes("120film")) {
    imagen = "cuadrada.jpg";
  } else {
    imagen = "intro1.jpg";
  }

  return (
    <>
      <Typography className={classes.root} variant="h2">
        {props.titulo} <br /> <span> {props.subtitulo}</span>
      </Typography>
      <img className="fondo" src={`../images/${imagen}`} alt="foto portada1" />
    </>
  );
};

export default withRouter(Carousel);
