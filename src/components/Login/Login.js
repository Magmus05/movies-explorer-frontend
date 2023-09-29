import React from "react";
import "./Login.css";
import InputForm from "../InputForm/InputForm";
import ButtonForForm from "../ButtonForForm/ButtonForForm";
import HeaderForRegAndLogin from "../HeaderForRegAndLogin/HeaderForRegAndLogin";
//import { Link, useLocation } from "react-router-dom";
function Login() {
  return (
    <>
      <HeaderForRegAndLogin title={"Рады видеть!"}></HeaderForRegAndLogin>
      <main>
        <form className="form-login">
          <InputForm type="email" name="email" title="E-mail" />
          <InputForm
            type="password"
            name="password"
            title="Пароль"
            error="Что-то пошло не так...cccccccccccccccccccc"
          />
          <ButtonForForm
            buttonText={"Войти"}
            buttonQuestionText={"Ещё не зарегистрированы?"}
            buttonLinkText={"Регистрация"}
            marginTop={"buttonForForm_login"}
          />
        </form>
      </main>
    </>
  );
}

export default Login;
