import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import InputFormForProfile from "./InputFormForProfile/InputFormForProfile";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { RegexValues } from "../../contexts/RegexValues";

function Profile({ handleExit, handleUpdateProfile }) {
  const regexValues = React.useContext(RegexValues)
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, setValues } =
    useFormAndValidation({
      name: currentUser.name,
      email: currentUser.email,
    });

  React.useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [setValues, currentUser]);

  function handleSubmitForm(e) {
    e.target.querySelector('button[name="buttonForm"]').disabled = true;
    e.preventDefault();
    handleUpdateProfile(values.name, values.email, setValues, e);
  }
  return (
    <>
      <Header backgroundTheme={"dark-background"} />
      <main>
        <section>
          <form className="form-profile" onSubmit={handleSubmitForm}>
            <h1 className="form-profile__name-user">
              Привет, {currentUser.name}!
            </h1>

            <InputFormForProfile
              type={"text"}
              name={"name"}
              title={"Имя"}
              placeholder={"Имя"}
              value={values.name}
              handleChange={(e) => handleChange(e, currentUser)}
              error={errors.name}
              pattern={regexValues.name}
            />
            <InputFormForProfile
              type={"email"}
              name={"email"}
              title={"E-mail"}
              placeholder={"E-mail"}
              value={values.email}
              handleChange={(e) => handleChange(e, currentUser)}
              error={errors.email}
              pattern={regexValues.email}
            />

            <button name="buttonForm" disabled={true} className="form-profile__button" type="submit">
              Редактировать
            </button>
            <Link
              onClick={handleExit}
              className="form-profile__button-out"
              to="/"
            >
              {" "}
              Выйти из аккаунта
            </Link>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
