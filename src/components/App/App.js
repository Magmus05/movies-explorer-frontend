import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";

import { moviesApi } from "../../utils/MoviesApi";
import { DataFilms } from "../../contexts/DataFilms";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";

function App() {
  const [films, setfilms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    handleTokenCheck();
    //eslint-disable-next-line
  }, []);

  // React.useEffect(() => {
  //   moviesApi
  //     .getFilms()
  //     .then((intialFilms) => {
  //       setfilms(intialFilms);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => console.log(`Ошибка ${err}`));
  // }, [setfilms]);

  const navigate = useNavigate();

  function handleRegistration(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        navigate("/movies", { replace: true });
        setIsLoggedIn(true);
        setCurrentUser(res);
        console.log(res);
        // setInfoTooltip({
        //   isOpen: true,
        //   title: "Вы успешно зарегистрировались!",
        //   name: "OK",
        // });
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
        // setInfoTooltip({
        //   isOpen: true,
        //   title: "Что-то пошло не так! Попробуйте ещё раз.",
        //   name: "Errore",
        // });
      });
  }

  function handleLogin(email, password) {
    MainApi.authorize(email, password)
      .then((data) => {
        setIsLoggedIn(true);
        handleTokenCheck();
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
        console.log(err);
        // setInfoTooltip({
        //   isOpen: true,
        //   title: "Что-то пошло не так! Попробуйте ещё раз.",
        //   name: "Errore",
        // });
      });
  }

  function handleTokenCheck() {
    MainApi.checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);

          MainApi.getUserInformation()
            .then((intialData) => {
              setCurrentUser(intialData);
            })
            .catch((err) => console.log(`Ошибка ${err}`));
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}, ${err.statusText}`);
        // setInfoTooltip({
        //   isOpen: true,
        //   title: `Ошибка ${err.status}, ${err.statusText}`,
        //   name: "Errore",
        // });
      });
  }

  function handleExit() {
    MainApi.logout()
      .then((res) => {
        if (res) {
          setIsLoggedIn(false);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.log(`Ошибка ${err.status}, ${err.statusText}`));
  }

  function handleUpdateProfile(newName, newEmail, setValues) {
    console.log(newName, newEmail);
    MainApi.updateProfileData(newName, newEmail)
      .then((newDataProfile) => {
        console.log(newDataProfile);
        setCurrentUser(newDataProfile);
        // closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }

  function handleSearch(searchValue) {
    console.log(searchValue);
    moviesApi
      .getFilms()
      .then((intialFilms) => {
        setfilms(intialFilms);
        setIsLoading(false);
      })
      .catch((err) => console.log(`Ошибка ${err}`));
    
  }
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <IsLoggedInContext.Provider value={isLoggedIn}>
          <DataFilms.Provider value={films}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    isLoading={isLoading}
                    handleSearch={handleSearch}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute element={SavedMovies} isLoading={isLoading} />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    handleExit={handleExit}
                    handleUpdateProfile={handleUpdateProfile}
                  />
                }
              />
              <Route
                path="/signin"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route
                path="/signup"
                element={<Register handleRegistration={handleRegistration} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* <Profile nameUser={'Виталий'} /></Profile> */}
            {/* <Login /></Login> */}
            {/* <Register /></Register> */}
            {/* <Main> </Main> */}
            {/* <Movies /> </Movies> */}
            {/* <SavedMovies /></SavedMovies> */}
            {/* <Preloader></Preloader> */}
            {/* <NotFound /></NotFound> */}
          </DataFilms.Provider>
        </IsLoggedInContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
