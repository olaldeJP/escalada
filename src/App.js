//import logo from "../public/images/logo.jpg";

import "./App.css";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Inauguracion from "./components/layout/Inauguramos";
import Formulario from "./components/layout/Formulario";
import Horarios from "./components/layout/Horarios";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Inauguracion></Inauguracion>
      <Horarios></Horarios>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  );
}

export default App;
