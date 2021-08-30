# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Sobre el proyecto

La idea de este proyecto, fue realizar un e-commerce de Fotografías, para desarrollar lo aprendido en las clases del curso.

La página principal consta de una NavBar, cuatro secciones y un footer. Cuenta con la posibilidad de acceder a las categorias por medio de las opciones de la navbar, o desde las cards. Una vez dentro de las diferenctes categorías, podemos ver los ítems y sus características, ademas de la cantidad de stock que se actualiza automáticamente desde la base de datos. Podemos acceder al detalle de cada uno, con la opción de agregar la cantidad que se desee al carrito. Está la posibilidad de seguir comprando o finalizar la compra, yendo directamente al carrito, donde vamos a visualizar los ítems seleccionados, con la posibilidad de modificar la cantidad o simplemente elimar uno o todos a la vez. Se muestra el detalle del precio, con la inclusión de un cargo extra por envío si no se superan los diez mil pesos. Si se decide proseguir con la compra, se debe completar un formulario y luego la opción de pago. Una vez terminado este proceso, se recibe un recibo de pago y su código de referencia, el cual es el id de la compra que se almacena en Firebase.
En la página principal, está la posibilidad de enviar un mensaje, el cual se almacena en la base de datos.

Utilicé para el proyecto:

- Framework de Material-UI.
- La extensión de estilos en línea, SASS y Styled Components.
- React Router DOM, para la navegabilidad.
- Firebase para alojar los producos de la tienda y recibir los mensajes de contacto.
- Three.js con React Three Fiber y Drei, para renderizar la animación del modelo 3D de la cámara en el home.

## NavBar
  Nos ofrece la posibilidad de navegar por las diferentes categorías. El logo nos retorna al home y posee el cartWidget, el cual nos muestra la cantidad de productos del cart en caso de tenerlos. Es responsiva, para los pequeños dispositivos.

## MainHero
  Utilicé en este componente, las propiedades que el withRouter me brindaba, para poder tomar la "location", ponerlas en un array, y así controlar las imágenes de portada, mediante un condicional, dependiendo de la categoría o si se encuentra en el home.
  En el home, animé el texto con keyframes de styled-components y para el parallax utilicé "react-parallax-tilt".

## Checkout
  Consta de dos pasos:
  - Formulario de datos, donde se realiza la comprobación del mail, y se deben completar todos los datos para poder continuar con el proceso.
  - Detalle de la orden, incluye el detalle de los items a pagar, y las opciones de pago, de las cuales se deberá seleccionar una para continuar.
  - Por último se muestra el comprobante, con el código referente de la compra, generada por firebase.

## Prueba en Vercel

https://vercel.com/rodrigomones/mones-gallery-shop-17565