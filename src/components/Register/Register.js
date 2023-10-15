import React from "react";
import "./Register.css";
import InputForm from "../InputForm/InputForm";
import ButtonForForm from "../ButtonForForm/ButtonForForm";
import HeaderForRegAndLogin from "../HeaderForRegAndLogin/HeaderForRegAndLogin";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { RegexValues } from "../../contexts/RegexValues";

function Register({ handleRegistration }) {
  const regexValues = React.useContext(RegexValues)
  const { values, handleChange, errors, resetForm } = useFormAndValidation({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmitForm(e) {
    e.target.querySelector('button[name="buttonForm"]').disabled = true;
    e.preventDefault();
    console.log(values.name, values.email);
    handleRegistration(values.name, values.email, values.password, resetForm);
  }

  return (
    <>
      <HeaderForRegAndLogin title={"Добро пожаловать!"}></HeaderForRegAndLogin>
      <main>
        <section>
          <form className="form-register" onSubmit={handleSubmitForm}>
            <InputForm
              type={"text"}
              name={"name"}
              title={"Имя"}
              placeholder={"Имя"}
              value={values.name}
              handleChange={(e) => handleChange(e)}
              error={errors.name}
              minLength={2}
              maxLength={40}
              pattern={regexValues.name}
            />
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
              pattern={regexValues.email}
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
              pattern={null}
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
