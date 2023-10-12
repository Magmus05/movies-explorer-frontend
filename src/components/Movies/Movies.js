import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
//import { Link, useLocation } from "react-router-dom";
function Movies({
  isSubmited,
  handleSearch,
  foundFilms,
  handleLikeFilm,
  isShortFilmsMovies,
  handleChangeCheckbox,
  searchValue,
  setSearchValue,
  messageFound,
  screenWidth,
  setFilmsLimit,
  filmsLimit
}) {
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
          handleSearch={handleSearch}
          isShortFilmsMovies={isShortFilmsMovies}
          handleChangeCheckbox={handleChangeCheckbox}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <MoviesCardList
          filmsLimit={filmsLimit}
          isSubmited={isSubmited}
          films={foundFilms}
          handleClickButton={handleLikeFilm}
          buttonDeleteSavedMovies={""}
          messageFound={messageFound}
        />
        {filmsLimit >= foundFilms.length ? null : (
          <ButtonMore onAddFilms={addFilms} />
        )}
      </main>
      <Footer> </Footer>
    </>
  );
}

export default Movies;
