import "./Portfolio.css";
//import { Link, useLocation } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio container" id="AboutMe">
      <ul className="portfolio__list">
        <h2 className="portfolio__title">Портфолио</h2>
        <a
          className="portfolio__block"
          href="https://magmus05.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__link marginNull">Статичный сайт</p>
          <span className="portfolio__arrow">↗</span>
        </a>
        <a
          className="portfolio__block"
          href="https://magmus05.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__link marginNull">Адаптивный сайт</p>
          <span className="portfolio__arrow">↗</span>
        </a>
        <a
          className="portfolio__block"
          href="https://magmus05.studen.nomoreparties.co"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__link marginNull">
            Одностраничное приложение
          </p>
          <span className="portfolio__arrow">↗</span>
        </a>
      </ul>
    </section>
  );
}

export default Portfolio;
