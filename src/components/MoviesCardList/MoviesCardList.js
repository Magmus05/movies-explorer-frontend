import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
function MoviesCardList({
  filmsLimit,
  isSubmited,
  films,
  handleClickButton,
  buttonDeleteSavedMovies,
  messageFound,
}) {


  return (
    messageFound? <section className="messageFound"><h2 className="messageFoundText" >{"Ничего не найденно , попробуйте другое ключевое слово"}</h2></section> :
    <section className="moviesCardList" aria-label="Карточки с фильмами">
      {isSubmited ? (
        <Preloader />
      ) : (
        films.map((film, i) =>
          i < filmsLimit ? (
            <MoviesCard
              key={film.id}
              film={film}
              handleClickButton={handleClickButton}
              buttonDeleteSavedMovies={buttonDeleteSavedMovies}
              messageFound={messageFound}
            />
          ) : null
        )
      )}
    </section>
  );
}

export default MoviesCardList;
