import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader"
//import { Link, useLocation } from "react-router-dom";
function SavedMovies({isLoading}) {
  const [filmsLimit, setFilmsLimit] = React.useState(12);

  function addFilms() {
    setFilmsLimit(filmsLimit + 6);
  }
  return (
    <>
      <Header backgroundTheme={"dark-background"}></Header>
      <main className="container">
        <SearchForm></SearchForm>
        {isLoading ? <Preloader /> : <MoviesCardList filmsLimit={filmsLimit}></MoviesCardList>}
        {filmsLimit >= 100 ? null : <ButtonMore onAddFilms={addFilms} />}
      </main>
      <Footer> </Footer>
    </>
  );
}

export default SavedMovies;
