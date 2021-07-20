import {
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const steps = ["Shipping address", "Payment details"];

export const Checkout = () => {
  const { compraId } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const [datosEnvio, setDatosEnvio] = useState({});

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (nombre, ciudad, codigoPostal, direccion, email, telefono) => {
    setDatosEnvio({ nombre, ciudad, codigoPostal, direccion, email, telefono });
    nextStep();
  };
  const Confirmation = () =>
    datosEnvio ? (
      <>
        <div>
          <Typography variant="h5">
            Gracias por tu compra, {datosEnvio.nombre}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Orden ref: {compraId} </Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Volver al home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm next={next} />
    ) : (
      <PaymentForm
        datosEnvio={datosEnvio}
        backStep={backStep}
        nextStep={nextStep}
      />
    );

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" alig="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};
