import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddressForm = ({ next }) => {
  const [nombre, setNombre] = useState();
  const [direccion, setDireccion] = useState();
  const [ciudad, setCiudad] = useState();
  const [codigoPostal, setCodigoPostal] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

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
      <Typography variant="h6" gutterBottom>
        Datos de envío
      </Typography>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Nombre"
              onInput={(e) => {
                setNombre(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Dirección de envío"
              onInput={(e) => {
                setDireccion(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Ciudad"
              onInput={(e) => {
                setCiudad(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Código Postal"
              type="number"
              onInput={(e) => {
                setCodigoPostal(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Teléfono"
              type="number"
              onInput={(e) => {
                setTelefono(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
        </Grid>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button component={Link} to="/cart" variant="outlined">
            Volver al carrito
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={
              !nombre ||
              !ciudad ||
              !codigoPostal ||
              !direccion ||
              !email ||
              !telefono ||
              !confirmEmail ||
              isError === true
            }
            onClick={() =>
              next(nombre, ciudad, codigoPostal, direccion, email, telefono)
            }
          >
            Siguiente
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
