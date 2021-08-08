import "firebase/auth";
import { useState } from "react";
import { useFirebaseApp } from "reactfire";

export const Autenticacion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebaseApp();

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>

        <label
          htmlFor="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submit}>Iniciar Sesión</button>
      </div>
    </>
  );
};
