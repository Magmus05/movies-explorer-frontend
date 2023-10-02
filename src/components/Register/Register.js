import React from "react";
import "./Register.css";
import InputForm from "../InputForm/InputForm";
import ButtonForForm from "../ButtonForForm/ButtonForForm";
import HeaderForRegAndLogin from "../HeaderForRegAndLogin/HeaderForRegAndLogin";
//import { Link, useLocation } from "react-router-dom";
function Register() {
  return (
    <>
      <HeaderForRegAndLogin title={"Добро пожаловать!"}></HeaderForRegAndLogin>
      <main>
        <section>
          <form className="form-register">
            <InputForm type="text" name="name" title="Имя" />
            <InputForm type="email" name="email" title="E-mail" />
            <InputForm
              type="password"
              name="password"
              title="Пароль"
              error="Что-то пошло не так..."
            />
            <ButtonForForm
              buttonText={"Зарегистрироваться"}
              buttonQuestionText={"Уже зарегистрированы?"}
              buttonLinkText={"Войти"}
              marginTop={"buttonForForm_register"}
              link={"/signin"}
            />
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
