import {
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  Box,
  Container,
} from "@material-ui/core";
import { useState } from "react";
import { getFirestore } from "../../firebase/client";
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [confirmEmail, setConfirmEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (nombre, email, message) => {
    const DB = getFirestore();
    DB.collection("contacts")
      .add({
        name: nombre,
        email: email,
        message: message,
      })
      .then(() => {
        Swal.fire(
          "¡Gracias por el mensaje!",
        "Te estaremos respondiendo a la brevedad",
        'success'
      )
      })
      .catch((error) => {
        alert(error.message);
      });

    setNombre("");
    setEmail("");
    setConfirmEmail("");
    setMessage("");
  };

  const checkValidation = (e) => {
    const confirmEmail = e.target.value;
    setConfirmEmail(confirmEmail);
    if (email !== confirmEmail) {
      setIsError(true);
      setErrorText("El email debe coincidir");
    } else {
      setIsError(false);
      setErrorText("");
    }
  };
  return (
    <>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth="lg">
          <Typography
            gutterBottom
            style={{
              fontSize: "calc(1200vw / 1920 * 4)",
              marginBottom: 10,
              fontWeight: 900,
            }}
          >
            Contactanos
          </Typography>
          <Grid
            container
            justify-content="center"
            align-items="center"
            wrap-xs-nowrap
          >
            <Grid item xs={6} sm={6}>
              <img
                src="https://www.laampliadora.org/wp-content/uploads/2016/04/lab-analogico-laampliadora.jpg"
                alt="laboratorio fotográdico"
                style={{ maxWidth: "-webkit-fill-available", opacity: 0.9 }}
              />
            </Grid>

            <Grid xs={6} style={{ width: "-webkit-fill-available" }}>
              <Paper
                style={{
                  padding: "20px 0 10px 20px",
                }}
              >
                <Grid item xs={12} sm={6} style={{ marginBottom: 20 }}>
                  <TextField
                    required
                    label="Nombre"
                    onInput={(e) => {
                      setNombre(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginBottom: 20 }}>
                  <TextField
                    required
                    label="Email"
                    type="email"
                    autoComplete="email"
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginBottom: 20 }}>
                  <TextField
                    required
                    label="Confirmar Email"
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => checkValidation(e)}
                    error={isError}
                    helperText={errorText}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginBottom: 20 }}>
                  <TextField
                    id="standard-basic"
                    label="Mensaje"
                    multiline
                    onInput={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </Grid>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={
                      !nombre ||
                      !email ||
                      !message ||
                      !confirmEmail ||
                      isError === true
                    }
                    onClick={() => handleSubmit(nombre, email, message)}
                  >
                    Enviar
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
