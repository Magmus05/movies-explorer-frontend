import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader"
import { DataFilms } from "../../contexts/DataFilms";
import "./MoviesCardList.css";
function MoviesCardList({filmsLimit, isLoading}) {
  const films = React.useContext(DataFilms);

  return (
    <section className="moviesCardList" aria-label="Карточки с местами">
       {isLoading? <Preloader />: films.map((film, i) =>
        i < filmsLimit ? <MoviesCard key={film.id} film={film} /> : null
      )}
    </section>
  );
}

export default MoviesCardList;
