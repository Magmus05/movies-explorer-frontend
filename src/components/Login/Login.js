import React from "react";
import "./Login.css";
import InputForm from "../InputForm/InputForm";
import ButtonForForm from "../ButtonForForm/ButtonForForm";
import HeaderForRegAndLogin from "../HeaderForRegAndLogin/HeaderForRegAndLogin";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login({ handleLogin }) {
  const { values, handleChange, errors, resetForm } =
    useFormAndValidation({
      email: "",
      password: "",
    });
  function handleSubmitForm(e) {
    e.preventDefault();
    handleLogin(values.email, values.password);
    resetForm();
  }

  return (
    <>
      <HeaderForRegAndLogin title={"Рады видеть!"} />
      <main>
        <section>
          <form className="form-login" onSubmit={handleSubmitForm}>
            <InputForm
              type={"email"}
              name={"email"}
              title={"E-mail"}
              placeholder={"E-mail"}
              value={values.email}
              handleChange={(e) => handleChange(e)}
              error={errors.email}
              minLength={2}
              maxLength={40}

            />
            <InputForm
              type={"password"}
              name={"password"}
              title={"Пароль"}
              placeholder={"Пароль"}
              value={values.password}
              handleChange={(e) => handleChange(e)}
              error={errors.password}
              minLength={8}
              maxLength={40}

            />
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
