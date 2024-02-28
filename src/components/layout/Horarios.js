import "../../style/components/layout/horarios.css";

const Horarios = (props) => {
  return (
    <div className="horariosClass" id="horarios">
      <div className="clasesAdultosClass">
        <div className="boxText">
          <h2 className="h2ClasesClass">CLASES GRUPALES</h2>
          <h3 className="h3ClasesClass"> TODOS LOS NIVELES </h3>
          <p className="pClasesClass"> Lunes y Miercoles</p>
          <p className="pClasesClass">19:30 a 21:30 hs</p>
        </div>
      </div>
      <div className="clasesniñosClass">
        <div className="boxText2">
          <h2 className="h2ClasesClass">CLASES GRUPALES</h2>
          <h3 className="h3ClasesClass"> TODOS LOS NIVELES </h3>
          <p className="pClasesClass"> Lunes y Miercoles</p>
          <p className="pClasesClass">19:30 a 21:30 hs</p>
        </div>
      </div>
    </div>
  );
};
export default Horarios;
