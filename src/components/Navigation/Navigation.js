import React from "react";
import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";
function Navigation({ backgroundTheme }) {
  const isLoggedIn = true;
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  window.addEventListener("resize", function (e) {
    setScreenWidth(e.target.outerWidth);
  });
  const coverRef = React.useRef();
  const menuRef = React.useRef();
  const body = document.body;


  function handleCloseCover() {
    coverRef.current.classList.remove("cover_active");
    menuRef.current.classList.remove("navigation-burger_active");
    body.classList.remove("lock");
  }
  function handleOpenCover() {
    coverRef.current.classList.add("cover_active");
    menuRef.current.classList.add("navigation-burger_active");
    body.classList.add("lock");
  }
  return (
    <>
      {screenWidth > 768 && isLoggedIn && (
        <nav className="navigation ">
          <div className="navigation__links">
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link_active" : ""}`
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link_active" : ""}`
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </div>

          <Link className="navigation__account" to="/profile">
            <div className="navigation__account-text">Аккаунт</div>
            <div
              className={`navigation__account-icon ${backgroundTheme}`}
            ></div>
          </Link>
        </nav>
      )}

      {screenWidth <= 768 && isLoggedIn && (
        <>
          <div onClick={handleOpenCover} className="burger-icon"></div>
          <div ref={coverRef} className="cover">
            <div ref={menuRef} className="navigation-burger">
              <div
                onClick={handleCloseCover}
                className="navigation-burger__close"
              ></div>
              <nav className="navigation-burger__menu ">
                <div className="navigation-burger__links">
                  <NavLink
                    onClick={handleCloseCover}
                    className={({ isActive }) =>
                      `navigation-burger__link ${
                        isActive ? "navigation-burger__link_active" : ""
                      }`
                    }
                    to="/"
                  >
                    Главная
                  </NavLink>
                  <NavLink
                    onClick={handleCloseCover}
                    className={({ isActive }) =>
                      `navigation-burger__link ${
                        isActive ? "navigation-burger__link_active" : ""
                      }`
                    }
                    to="/movies"
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    onClick={handleCloseCover}
                    className={({ isActive }) =>
                      `navigation-burger__link ${
                        isActive ? "navigation-burger__link_active" : ""
                      }`
                    }
                    to="/saved-movies"
                  >
                    Сохранённые фильмы
                  </NavLink>
                </div>

                <Link
                  onClick={handleCloseCover}
                  className="navigation-burger__account"
                  to="/profile"
                >
                  <div className="navigation-burger__account-text">Аккаунт</div>
                  <div className="navigation-burger__account-icon"></div>
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

      {!isLoggedIn && (
        <nav className="navigation">
          <div className="navigation__account navigation__account-auth">
            <Link className="navigation__account-registration" to="/signup">
              Регистрация
            </Link>
            <Link className="navigation__account-login" to="/signin">
              Войти
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navigation;
