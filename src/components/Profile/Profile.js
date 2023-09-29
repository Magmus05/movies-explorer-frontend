import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import InputFormForProfile from "./InputFormForProfile/InputFormForProfile";
//import { Link, useLocation } from "react-router-dom";
function Profile({ nameUser }) {
  return (
    <>
      <Header backgroundTheme={"dark-background"} />
      <main>
        <form className="form-profile">
          <h2 className="form-profile__name-user">Привет, {nameUser}!</h2>

          <InputFormForProfile type={"name"} name={"name"} title={"Имя"} value={'Виталий'} />
					<InputFormForProfile type={"E-mail"} name={"E-mail"} title={"E-mail"} value={'pochta@yandex.ru'} error={'ddddddddd'}/>
          
          <button className="form-profile__button">Редактировать</button>
          <button className="form-profile__button-out">Выйти из аккаунта</button>
        </form>
      </main>
    </>
  );
}

export default Profile;
