import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
//import { Link, useLocation } from "react-router-dom";
function Movies({isLoading, handleSearch}) {
  const [filmsLimit, setFilmsLimit] = React.useState(5);

  function addFilms() {
    setFilmsLimit(filmsLimit + 6);
  }
  return (
    <>
      <Header backgroundTheme={"dark-background"}></Header>
      <main className="container-movies">
        <SearchForm handleSearch={handleSearch} />
        <MoviesCardList filmsLimit={filmsLimit} isLoading={isLoading} ></MoviesCardList>
        {filmsLimit >= 100 ? null : <ButtonMore onAddFilms={addFilms} />}
      </main>
      <Footer> </Footer>
    </>
  );
}

export default Movies;
