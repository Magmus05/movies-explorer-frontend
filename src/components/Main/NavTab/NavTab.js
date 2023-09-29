import "./NavTab.css";
//import { Link, useLocation } from "react-router-dom";
function NavTab() {
  return <section className="navtab">
		<nav className="navtab__block">
			<a className="navtab__link" href="#AboutProject">О проекте</a>
			<a className="navtab__link" href="#Techs">Технологии</a>
			<a className="navtab__link" href="#AboutMe">Студент</a>
		</nav>
	</section>;
}

export default NavTab;