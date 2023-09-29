import "./HeaderForRegAndLogin.css";
import logoHeader from "../../images/header-logo.svg";
import { Link } from "react-router-dom";
function HeaderForRegAndLogin({ title }) {
  return (
    <header className="headerForRegAndLogin">
      <Link to="/">
        <img
          className="headerForRegAndLogin__logo"
          src={logoHeader}
          alt="Логотип сайта"
        />
      </Link>
      <h1 className="headerForRegAndLogin__title">{title}</h1>
    </header>
  );
}

export default HeaderForRegAndLogin;
