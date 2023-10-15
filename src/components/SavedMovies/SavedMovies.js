import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
//import { Link, useLocation } from "react-router-dom";
function SavedMovies({
  handleSearchSavedMovies,
  savedFilms,
  isSubmited,
  handleDeleteFilm,
  messageFound,
  screenWidth,
  setFilmsLimit,
  filmsLimit,
  foundSavedFilms,
  isFoundSavedFilms
}) {
  const [searchValue, setSearchValue] = React.useState("");
  const [isShortFilmsSavedMovies, setIsShortFilmsSavedMovies] =
    React.useState(false);
  function handleChangeCheckbox(e) {
    setIsShortFilmsSavedMovies(e.target.checked);
  }

  function addFilms() {
    if (screenWidth > 1280) {
      setFilmsLimit(filmsLimit + 3);
    } else {
      setFilmsLimit(filmsLimit + 2);
    }
  }
  return (
    <>
      <Header backgroundTheme={"dark-background"}></Header>
      <main className="container-movies">
        <SearchForm
          handleChangeCheckbox={handleChangeCheckbox}
          isShortFilmsMovies={isShortFilmsSavedMovies}
          handleSearch={handleSearchSavedMovies}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          films={savedFilms}
        ></SearchForm>
        <MoviesCardList
          filmsLimit={filmsLimit}
          isSubmited={isSubmited}
          films={isFoundSavedFilms ? foundSavedFilms : savedFilms}
          handleClickButton={handleDeleteFilm}
          buttonDeleteSavedMovies={"moviesCard__like_delete"}
          messageFound={messageFound}
        />
        {filmsLimit >= savedFilms.length ? null : (
          <ButtonMore onAddFilms={addFilms} />
        )}
      </main>
      <Footer> </Footer>
    </>
  );
}

export default SavedMovies;
