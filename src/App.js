import "./App.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Inauguracion from "./components/layout/Inauguramos";
import Formulario from "./components/layout/Formulario";
import Horarios from "./components/layout/Horarios";
import Carrusel from "./components/layout/Carrusel";
import LoginVar from "./components/layout/logginVar";
import logeadoVar from "./components/layout/logeadoVar";
import React, { useState } from "react";
function App() {
  const [userSession, setUserSession] = useState(null);

  const sesion = peticionCurrent();
  console.log(sesion.status);
  if (sesion) {
    return returnSinLoginVar();
  } else return returnConLoginVar();
  /*return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <LoginVar></LoginVar>
      <Inauguracion></Inauguracion>
      <Carrusel></Carrusel>
      <Horarios></Horarios>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  );*/
}

export default App;

function returnSinLoginVar() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <LoginVar></LoginVar>
      <Inauguracion></Inauguracion>
      <Carrusel></Carrusel>
      <Horarios></Horarios>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  );
}

function returnConLoginVar() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <logeadoVar></logeadoVar>
      <Inauguracion></Inauguracion>
      <Carrusel></Carrusel>
      <Horarios></Horarios>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  );
}

async function peticionCurrent() {
  const user = await fetch("http://localhost:8080/api/sesion/current", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => {
      console.log(response.status);
      if (response.ok) {
        return response.json();
      }
      throw new Error("No session");
    })
    .catch(() => {
      return "Error";
    });
  return user;
}
