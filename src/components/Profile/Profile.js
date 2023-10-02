import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import InputFormForProfile from "./InputFormForProfile/InputFormForProfile";
import { Link } from "react-router-dom";
function Profile({ nameUser }) {
  return (
    <>
      <Header backgroundTheme={"dark-background"} />
      <main>
        <section>
          <form className="form-profile">
            <h1 className="form-profile__name-user">Привет, {nameUser}!</h1>

            <InputFormForProfile
              type={"name"}
              name={"name"}
              title={"Имя"}
              value={"Виталий"}
            />
            <InputFormForProfile
              type={"E-mail"}
              name={"E-mail"}
              title={"E-mail"}
              value={"pochta@yandex.ru"}
              error={"ddddddddd"}
            />

            <button className="form-profile__button" type="submit">Редактировать</button>
            <Link className="form-profile__button-out" to="/">
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
