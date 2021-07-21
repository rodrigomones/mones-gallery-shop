import { Container, Grid, Box, Typography, Link } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link as Ruta } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.primary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Site map</Box>
              <Link
                component={Ruta}
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6">Home</Typography>
              </Link>
              <Link
                component={Ruta}
                to="/category/35mm-h"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6">35mm</Typography>
              </Link>
              <Link
                component={Ruta}
                to="/category/35mm-v"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6">35mm</Typography>
              </Link>
              <Link
                component={Ruta}
                to="/category/120film"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6">120mm</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={3}>
                Redes sociales
              </Box>
              <Link
                href="https://www.instagram.com/mones.r/"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: 10,
                }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://github.com/rodrigomones"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none", color: "white", margin: 10 }}
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/monesrodrigo/"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none", color: "white", margin: 10 }}
              >
                <LinkedInIcon />
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Website</Box>
              <Link
                href="https://www.monesrodrigo.com"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography variant="h6">monesrodrigo.com</Typography>
              </Link>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Curso de React.js - Coderhouse &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </>
  );
};
