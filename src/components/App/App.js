import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { RegexValues } from "../../contexts/RegexValues";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [films, setfilms] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    false || JSON.parse(localStorage.getItem("isLoggedIn"))
  );
  const [currentUser, setCurrentUser] = React.useState({});
  const [isSubmited, setIsSubmited] = React.useState(false);
  const [foundFilms, setFoundFilms] = React.useState([]);
  const [isShortFilmsMovies, setIsShortFilmsMovies] = React.useState(false);
  const [savedFilms, setSavedFilms] = React.useState([]);
  const [foundSavedFilms, setFoundSavedFilms] = React.useState([]);
  const [isFoundSavedFilms, setIsFoundSavedFilms] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [messageFoundMovies, setMessageFoundMovies] = React.useState(false);
  const [messageFoundSavedMovies, setMessageFoundSavedMovies] =
    React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [filmsLimit, setFilmsLimit] = React.useState(0);
  const [isInfoTooltip, setInfoTooltip] = React.useState({ isOpen: false });
  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
    //eslint-disable-next-line
  }, []);

  // ----------Проверка токена----------
  function handleTokenCheck() {
    MainApi.checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          MainApi.getUserInformation()
            .then((intialData) => {
              setCurrentUser(intialData);
              receivingSavedFilmFromDatabase();
            })
            .catch((err) => console.log(`Ошибка ${err}`));
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
      });
  }

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 2000);
    });

    if (screenWidth >= 1280) {
      setFilmsLimit(12);
    } else {
      setFilmsLimit(8);
    }
    if (screenWidth <= 480) {
      setFilmsLimit(5);
    }
  }, [setFilmsLimit, screenWidth]);

  function savingValuesLocalStorage() {
    localStorage.setItem("searchValue", "");
    localStorage.setItem("foundMovies", JSON.stringify([]));
    localStorage.setItem("shortFilms", false);

    setIsShortFilmsMovies(JSON.parse(localStorage.getItem("shortFilms")));
    setSearchValue(localStorage.getItem("searchValue"));
    setFoundFilms(JSON.parse(localStorage.getItem("foundMovies")));
  }
  React.useEffect(() => {
    setIsShortFilmsMovies(JSON.parse(localStorage.getItem("shortFilms")));
    setSearchValue(localStorage.getItem("searchValue"));
    setFoundFilms(JSON.parse(localStorage.getItem("foundMovies")));
  }, [setSearchValue, setFoundFilms, setIsShortFilmsMovies]);

  function receivingSavedFilmFromDatabase() {
    MainApi.getMovies()
      .then((savedFilmsFromDatabase) => {
        savedFilmsFromDatabase.forEach((element) => {
          element.image = { url: element.image.substring(28) };
          element.id = element.movieId;
          element.isLikes = true;
        });
        setSavedFilms(savedFilmsFromDatabase);
        localStorage.setItem(
          "savedFilms",
          JSON.stringify(savedFilmsFromDatabase)
        );
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }

  // ----------Получение фильмов от API BeatFilm
  React.useEffect(() => {
    moviesApi
      .getFilms()
      .then((intialFilms) => {
        setfilms(intialFilms);
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }, [setfilms]);

  // ----------Регистрация пользователя----------
  function handleRegistration(name, email, password, resetForm) {
    MainApi.register(name, email, password)
      .then((res) => {
        MainApi.authorize(email, password)
          .then((data) => {
            setIsLoggedIn(true);
            handleTokenCheck();
            localStorage.setItem("isLoggedIn", true);
            savingValuesLocalStorage();
            navigate("/movies", { replace: true });
            resetForm();
          })
          .catch((err) => {
            console.log(`Ошибка ${err.status}, ${err.statusText}`);
            console.log(err);
          });

        setInfoTooltip({
          isOpen: true,
          title: "Вы успешно зарегистрировались!",
          name: "OK",
        });
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
        setInfoTooltip({
          isOpen: true,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          name: "Errore",
        });
      });
  }

  // ----------Авторизация пользователя----------
  function handleLogin(email, password, resetForm) {
    MainApi.authorize(email, password)
      .then((data) => {
        setIsLoggedIn(true);
        handleTokenCheck();
        localStorage.setItem("isLoggedIn", true);
        savingValuesLocalStorage();
        navigate("/movies", { replace: true });

        setInfoTooltip({
          isOpen: true,
          title: "Вы успешно залогинились!",
          name: "OK",
        });
        resetForm();
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
        console.log(err);
        setInfoTooltip({
          isOpen: true,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          name: "Errore",
        });
      });
  }

  // ----------Выход пользователя----------
  function handleExit() {
    MainApi.logout()
      .then((res) => {
        if (res) {
          setIsLoggedIn(false);
          localStorage.clear();
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        setInfoTooltip({
          isOpen: true,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          name: "Errore",
        });
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
      });
  }

  // ----------Изменения профилья----------
  function handleUpdateProfile(newName, newEmail, setValues) {
    MainApi.updateProfileData(newName, newEmail)
      .then((newDataProfile) => {
        setInfoTooltip({
          isOpen: true,
          title: "Данные успешно обновленны!",
          name: "OK",
        });
        setCurrentUser(newDataProfile);
      })
      .catch((err) => {
        setInfoTooltip({
          isOpen: true,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          name: "Errore",
        });
        console.log(`Ошибка ${err}`)});
  }

  // ----------Обрабтка запроса поиска фильма на странице Фильмы----------
  function handleSearch(searchValue, event) {
    setIsSubmited(true);
    const searchFilms = films.filter((item) =>
      event.target[2].checked
        ? item.duration < 40
          ? String(item.nameRU).toLowerCase().includes(searchValue) ||
            String(item.nameEN).toLowerCase().includes(searchValue)
          : false
        : String(item.nameRU).toLowerCase().includes(searchValue) ||
          String(item.nameEN).toLowerCase().includes(searchValue)
    );

    searchFilms.forEach(function (item) {
      savedFilms.forEach(function (i) {
        if (i.id === item.id) {
          item._id = i._id;
        } else {
          i.isLikes = false;
        }
      });
    });

    searchFilms.map((item) => {
      item.isLikes = savedFilms.some((i) => item.id === i.id);
      return item;
    });
    searchFilms.length === 0
      ? setMessageFoundMovies(true)
      : setMessageFoundMovies(false);
    setFoundFilms(searchFilms);
    setIsShortFilmsMovies(event.target[2].checked);
    setSearchValue(event.target[0].value);
    localStorage.setItem("foundMovies", JSON.stringify(searchFilms));
    localStorage.setItem("shortFilms", event.target[2].checked);
    localStorage.setItem("searchValue", event.target[0].value);
    setIsSubmited(false);
  }

  // ----------Обрабтка чекбокса----------
  function handleChangeCheckbox(e) {
    setIsShortFilmsMovies(e.target.checked);
  }

  // ----------Сохранения фильма на нашем сервере----------
  function handleLikeFilm(film) {
    if (film.isLikes) {
      MainApi.deleteMovies(film) // ------------ удаление
        .then((data) => {
          const newFoundFilms = foundFilms.map((c) =>
            c.id === film.id ? { ...c, isLikes: false } : c
          );
          setFoundFilms(newFoundFilms);
          localStorage.setItem("foundMovies", JSON.stringify(newFoundFilms));
          const newSavedFilms = savedFilms.filter((c) => c.id !== film.id);
          setSavedFilms(newSavedFilms);
        })
        .catch((err) => {
          console.log(`Ошибка ${err.status}, ${err.statusText}`);
          console.log(err);
          setInfoTooltip({
            isOpen: true,
            title: "Что-то пошло не так! Попробуйте ещё раз.",
            name: "Errore",
          });
        });
    } else {
      MainApi.createMovies(film) // ------------ создание
        .then((data) => {
          const newFoundFilms = foundFilms.map((c) =>
            c.id === film.id ? { ...c, isLikes: true, _id: data._id } : c
          );
          setFoundFilms(newFoundFilms);
          localStorage.setItem("foundMovies", JSON.stringify(newFoundFilms));
          console.log(film);
          console.log(savedFilms);
          savedFilms.push(film);
          const newSavedFilms = savedFilms.map((c) =>
            c.id === film.id ? { ...c, isLikes: true, _id: data._id } : c
          );
          console.log(newSavedFilms);
          setSavedFilms(newSavedFilms);
        })
        .catch((err) => {
          console.log(`Ошибка ${err.status}, ${err.statusText}`);
          console.log(err);
          setInfoTooltip({
            isOpen: true,
            title: "Что-то пошло не так! Попробуйте ещё раз.",
            name: "Errore",
          });
        });
    }
  }

  // ----------Удаления фильма на нашем сервере----------
  function handleDeleteFilm(film) {
    console.log();
    MainApi.deleteMovies(film)
      .then((data) => {
        const newFoundFilms = foundFilms.map((c) =>
          c.id === film.id ? { ...c, isLikes: false } : c
        );
        setFoundFilms(newFoundFilms);
        localStorage.setItem("foundMovies", JSON.stringify(newFoundFilms));
        const newSavedFilms = savedFilms.filter((c) => c.id !== film.id);
        setSavedFilms(newSavedFilms);
        const newFoundSavedFilms = foundSavedFilms.filter(
          (c) => c.id !== film.id
        );
        setFoundSavedFilms(newFoundSavedFilms);
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
        console.log(err);
        setInfoTooltip({
          isOpen: true,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          name: "Errore",
        });
      });
  }

  function handleSearchSavedMovies(searchValue, event) {
    setIsSubmited(true);
    setIsFoundSavedFilms(true);
    const searchFilms = savedFilms.filter((item) =>
      event.target[2].checked
        ? item.duration < 40
          ? String(item.nameRU).toLowerCase().includes(searchValue) ||
            String(item.nameEN).toLowerCase().includes(searchValue)
          : false
        : String(item.nameRU).toLowerCase().includes(searchValue) ||
          String(item.nameEN).toLowerCase().includes(searchValue)
    );
    searchFilms.length === 0
      ? setMessageFoundSavedMovies(true)
      : setMessageFoundSavedMovies(false);
    setFoundSavedFilms(searchFilms);
    setIsSubmited(false);
  }

  function closeAllPopups() {
    setInfoTooltip({ isOpen: false });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <IsLoggedInContext.Provider value={isLoggedIn}>
          <RegexValues.Provider
            value={{
              name: "^[А-Яа-яёa-zA-Z \\-]+$",
              email: "^\\S+@\\S+\\.\\S+$",
            }}
          >
            <Routes>
              <Route path="/" element={<Main />}></Route>

              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={Movies}
                    isSubmited={isSubmited}
                    handleSearch={handleSearch}
                    handleLikeFilm={handleLikeFilm}
                    foundFilms={foundFilms}
                    isShortFilmsMovies={isShortFilmsMovies}
                    handleChangeCheckbox={handleChangeCheckbox}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    messageFound={messageFoundMovies}
                    screenWidth={screenWidth}
                    setFilmsLimit={setFilmsLimit}
                    filmsLimit={filmsLimit}
                  />
                }
              ></Route>

              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={SavedMovies}
                    isSubmited={isSubmited}
                    savedFilms={savedFilms}
                    handleDeleteFilm={handleDeleteFilm}
                    handleSearchSavedMovies={handleSearchSavedMovies}
                    messageFound={messageFoundSavedMovies}
                    screenWidth={screenWidth}
                    setFilmsLimit={setFilmsLimit}
                    filmsLimit={filmsLimit}
                    foundSavedFilms={foundSavedFilms}
                    isFoundSavedFilms={isFoundSavedFilms}
                  />
                }
              ></Route>

              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={Profile}
                    handleExit={handleExit}
                    handleUpdateProfile={handleUpdateProfile}
                  />
                }
              ></Route>

              <Route
                path="/signin"
                element={<Login handleLogin={handleLogin} />}
              ></Route>
              <Route
                path="/signup"
                element={<Register handleRegistration={handleRegistration} />}
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <InfoTooltip
              isInfoTooltip={isInfoTooltip}
              onClose={closeAllPopups}
            />
          </RegexValues.Provider>
        </IsLoggedInContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
