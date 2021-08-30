import { Typography } from "@material-ui/core";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { Suspense } from "react";
import CircularDeterminate from "../Spinner";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "130px",
    fontSize: "calc(1200vw / 1920 * 10)",
    marginLeft: "10vw",
    fontFamily: "Rubik",
    fontWeight: 700,
    zIndex: 99,
  },
});

const MainHero = (props) => {
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
    imagen = "hero2.jpg";
  }

  return (
    <>
      <Suspense fallback={<CircularDeterminate />}>
        <Typography className={classes.root} variant="h2">
          {props.titulo} <br />{" "}
          <span>
            {" "}
            {props.subtitulo} <br /> {props.body}
          </span>
        </Typography>
        <img
          className="fondo"
          src={`../images/${imagen}`}
          alt="foto portada1"
        />
      </Suspense>
    </>
  );
};

export default withRouter(MainHero);
