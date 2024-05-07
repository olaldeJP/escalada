import "../../style/components/layout/loginNav.css";
import "../../style/components/layout/Nav.css";
import React, { useState } from "react";

const LoginVar = (props) => {
  const [isCheckedLogin, setIsCheckedLogin] = useState(false);
  const [isCheckedCreate, setIsCheckedCreate] = useState(false);
  const toggleCheckboxLogin = () => {
    const formDiv = document.querySelector("#divFormLogin");
    const mainForm = document.querySelector("#formMainLogin");
    setIsCheckedLogin(!isCheckedLogin);
    //Configuracion para mostrar los formularios de Login y Create
    if (!isCheckedLogin) {
      formDiv.style.animationName = "mostrarDivForm";
      formDiv.style.animationDuration = "1s";
      formDiv.style.animationFillMode = "forwards";
      mainForm.style.animationName = "mostrarForm";
      mainForm.style.animationDuration = "1s";
      mainForm.style.animationFillMode = "forwards";
    } else {
      formDiv.style.animationName = "ocultarDivForm";
      mainForm.style.animationName = "ocultarForm";
    }
  };

  const toggleCheckboxCreate = () => {
    setIsCheckedCreate(!isCheckedCreate);
    const formDivCreate = document.querySelector("#divFormCreate");
    const mainFormCreate = document.querySelector("#formMainCreate");
    if (!isCheckedCreate) {
      formDivCreate.style.animationName = "mostrarDivForm";
      formDivCreate.style.animationDuration = "1s";
      formDivCreate.style.animationFillMode = "forwards";
      mainFormCreate.style.animationName = "mostrarForm";
      mainFormCreate.style.animationDuration = "1s";
      mainFormCreate.style.animationFillMode = "forwards";
    } else {
      formDivCreate.style.animationName = "ocultarDivForm";
      mainFormCreate.style.animationName = "ocultarForm";
    }
  };

  async function enviarData(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", document.querySelector("#emailCreate").value);
    formData.append("name", document.querySelector("#nombreCreate").value);
    formData.append(
      "password",
      document.querySelector("#passwordCreate").value
    );
    try {
      const response = await fetch("http://localhost:8080/api/usuarios/", {
        method: "POST",
        body: formData,
      });
      if (response.status === 201) {
        const responseData = await response.json();
        if (!responseData.status === "success") {
          throw new Error("Network response was not ok.");
          alert("Error Al Crear La Cuenta");
        }
        alert("Gracias! Tu cuenta fue creada exitosamente! ");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function loginFunction(event) {
    event.preventDefault();
    alert("A");
    try {
      const formData = new FormData();
      formData.append("email", document.querySelector("#emailLogin").value);
      formData.append(
        "password",
        document.querySelector("#passwordLogin").value
      );

      const response = await fetch("http://localhost:8080/api/sesion/login", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        const responseData = await response.json();
        if (!responseData.status === "success") {
          throw new Error("Network response was not ok.");
          alert("Error Al Crear La Cuenta");
        }
        alert("Te Logeaste Satisfactoriamente ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="d-flex pding justify-content-between">
      <div className="d-flex classDivFormReg">
        <div id="botonesLogReg">
          <label className="submitButton addGarp">
            <input
              type="checkbox"
              checked={isCheckedLogin}
              onChange={toggleCheckboxLogin}
              style={{ display: "none" }}
              id="checkLogin"
            />
            Login
          </label>
          <label className="submitButton addGarp">
            <input
              type="checkbox"
              checked={setIsCheckedCreate}
              onChange={toggleCheckboxCreate}
              style={{ display: "none" }}
              id="checkCreate"
            />
            Registrarse
          </label>
        </div>
        <div id="divFormulariosLogReg">
          <div className="divForm" id="divFormLogin">
            <form
              onSubmit={loginFunction}
              className=" d-flex formMain"
              id="formMainLogin"
            >
              <div className="pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#2e2e2e"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </svg>
                <input
                  type="email"
                  name="email"
                  className="inputField"
                  id="emailLogin"
                  placeholder="Email"
                ></input>
              </div>

              <div class="pt-3">
                <svg
                  className="inputIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#2e2e2e"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input
                  type="password"
                  className="inputField"
                  id="passwordLogin"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>

              <button
                type="submit"
                id="buttonLogin"
                className=" submitButton mt-4"
              >
                Login
              </button>
              <a class="mt-3" href="#">
                Olvidaste La Contrasña?
              </a>
            </form>
          </div>
          <div className="divForm" id="divFormCreate">
            <form
              onSubmit={enviarData}
              className=" d-flex formMain"
              id="formMainCreate"
            >
              <div className="pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#2e2e2e"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </svg>
                <input
                  type="email"
                  name="email"
                  className="inputField"
                  id="emailCreate"
                  placeholder="Email"
                ></input>
              </div>
              <div className="pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <input
                  type="nombre"
                  name="nombre"
                  className="inputField"
                  id="nombreCreate"
                  placeholder="Nombre"
                ></input>
              </div>
              <div class="pt-3">
                <svg
                  className="inputIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#2e2e2e"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input
                  type="password"
                  className="inputField"
                  id="passwordCreate"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>

              <button
                type="submit"
                id="buttonRegister"
                className=" submitButton mt-4"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginVar;
