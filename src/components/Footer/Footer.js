import "./Footer.css";
//import { Link, useLocation } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
			<p className="footer__text marginNull">Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className="footer__block">
			<p className="footer__copyrite marginNull">© 2023</p>
			<ul className="footer__links">
				<a href="https://practicum.yandex.ru/" className="footer__link " target="_blank" rel="noreferrer">Яндекс.Практикум</a>
				<a href="https://github.com/" className="footer__link" target="_blank" rel="noreferrer">Github</a>
			</ul>
			</div>
    </footer>
  );
}

export default Footer;
