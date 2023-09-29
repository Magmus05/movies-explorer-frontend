import "./Header.css";
import logoHeader from "../../images/header-logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
function Header({backgroundTheme}) {

  return (
    <header className={`header ${backgroundTheme}`}>
      <div className="header__container">
        <Link to="/"><img src={logoHeader} alt="Логотип сайта." className="header__logo" /></Link>
        <Navigation backgroundTheme={backgroundTheme}></Navigation>
      </div>
    </header>
  );
}

export default Header;
