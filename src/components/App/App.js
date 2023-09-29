import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import { moviesApi } from "../../utils/MoviesApi";
import { DataFilms } from "../../contexts/DataFilms";

function App() {
  const [films, setfilms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    moviesApi
      .getFilms()
      .then((intialFilms) => {
        setfilms(intialFilms);
        setIsLoading(false)
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }, [setfilms]);

  return (
    <>
      <DataFilms.Provider value={films}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies isLoading={isLoading}/>} />
          <Route path="/saved-movies" element={<SavedMovies isLoading={isLoading}/>} />
          <Route path="/profile" element={<Profile nameUser={"Виталий"} />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
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
    </>
  );
}

export default App;
