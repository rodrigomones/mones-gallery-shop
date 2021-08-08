import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

export const HomeCards = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        borderTop={1}
        style={{
          background: "linear-gradient(180deg, #fff 0%, #202020 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box fontSize="calc(1000vw / 1920 * 10)" style={{ marginBottom: 10 }}>
            Formatos fotográficos
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root}>
                <CardActionArea component={Link} to="/category/35mm-h">
                  <CardMedia
                    className={classes.media}
                    image="https://monesrodrigo.com/img/treintaycinco/500.jpg"
                    title="Analog Photography"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      35mm Horizontal
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Formato horizontal 35mm. Todas las copias se imprimen en
                      papel algodón. Medidas a pedido.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    component={Link}
                    to="/category/35mm-h"
                    size="small"
                    color="primary"
                  >
                    Ver Más
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root}>
                <CardActionArea component={Link} to="/category/35mm-v">
                  <CardMedia
                    className={classes.media}
                    image="https://monesrodrigo.com/img/treintaycinco/504.jpg"
                    title="Analog Photography"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      35mm Vertical
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Formato vertical 35mm. Todas las copias se imprimen en
                      papel algodón. Medidas a pedido.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    component={Link}
                    to="/category/35mm-v"
                    size="small"
                    color="primary"
                  >
                    Ver Más
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.root}>
                <CardActionArea component={Link} to="/category/120film">
                  <CardMedia
                    className={classes.media}
                    image="https://monesrodrigo.com/img/ciento/000031530001.jpg"
                    title="Analog Photography"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Formato Medio 120film
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Formato medio 120. Todas las copias se imprimen en papel
                      algodón. Medidas a pedido.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    component={Link}
                    to="/category/120film"
                    size="small"
                    color="primary"
                  >
                    Ver Más
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
