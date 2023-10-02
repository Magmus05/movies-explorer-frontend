import "./AboutMe.css";
//import { Link, useLocation } from "react-router-dom";
import fotoAboutMe from "../../../images/пёсель в очках.jpg";
function AboutMe() {
  return (
    <section className="aboutMe container" id="AboutMe">
      <h3 className="aboutMe__title">Студент</h3>
      <div className="aboutMe__info-block">
        <div className="aboutMe__info">
          <h3 className="aboutMe__name marginNull">Виталий</h3>
          <p className="aboutMe__profession">Фронтенд-разработчик, 34 года</p>
          <p className="aboutMe__historu marginNull">
            Я живу в Санкт-Петербурге, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы в запой.
          </p>
          <a className="aboutMe__link" href="https://github.com/Magmus05" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img src={fotoAboutMe} alt="фотограция разработчика" className="aboutMe__image" />
      </div>
    </section>
  );
}

export default AboutMe;
