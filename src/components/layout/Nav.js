import logo from "../../img/logo.jpg";
import "../../style/components/layout/Nav.css";
const Nav = (props) => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Actividades</a>
          </li>
          <li>
            <a href="#">Horarios</a>
          </li>
          <li>
            <a href="#">Contactanos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
