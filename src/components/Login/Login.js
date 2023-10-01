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
        <section>
          <form className="form-login">
            <InputForm type="email" name="email" title="E-mail" />
            <InputForm type="password" name="password" title="Пароль" />
            <ButtonForForm
              buttonText={"Войти"}
              buttonQuestionText={"Ещё не зарегистрированы?"}
              buttonLinkText={"Регистрация"}
              marginTop={"buttonForForm_login"}
              link={"/signup"}
            />
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
