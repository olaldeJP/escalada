import logo from "../../img/logo.jpg";
import "../../style/components/layout/Nav.css";
const Nav = (props) => {
  return (
    <nav className="navBar">
      <div>
        <ul>
          <li>
            <a className="aL1" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="aL2" href="#">
              Actividades
            </a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a className="aL3" href="#horarios">
              Horarios
            </a>
          </li>
          <li>
            <a className="aL4" href="#formulario">
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
