import "../../style/components/layout/Formulario.css";

const Formulario = (e) => {
  return (
    <div className="divFormulario">
      <form className="formulario" id="formulario">
        <div className="divInfo">
          <label htmlFor="email">* Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="divInfo">
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="divInfo">
          <label htmlFor="telefono">Teléfono: </label>
          <input type="tel" id="telefono" name="telefono" />
        </div>
        <div className="divInfo">
          <label htmlFor="mensaje">* Mensaje: </label>
          <textarea id="mensaje" name="mensaje" required></textarea>
        </div>
        <button type="submit" className="submitButton">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
