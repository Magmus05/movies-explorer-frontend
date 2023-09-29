import "./Portfolio.css";
//import { Link, useLocation } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio container" id="AboutMe">
			<p className="portfolio__title">Портфолио</p>
			<div className="portfolio__block">
				<p className="portfolio__link marginNull">Статичный сайт</p>
				<a href="https://magmus05.github.io/russian-travel/" className="portfolio__arrow" target="_blank" rel="noreferrer">↗</a>
			</div>
			<div className="portfolio__block">
				<p className="portfolio__link marginNull">Адаптивный сайт</p>
				<a href="https://magmus05.github.io/russian-travel/" className="portfolio__arrow" target="_blank" rel="noreferrer">↗</a>
			</div>
			<div className="portfolio__block">
				<p className="portfolio__link marginNull">Одностраничное приложение</p>
				<a href="https://magmus05.studen.nomoreparties.co" className="portfolio__arrow" target="_blank" rel="noreferrer">↗</a>
			</div>
    </section>
  );
}

export default Portfolio;