import React from "react";
import "./MoviesCard.css";
//import { Link, useLocation } from "react-router-dom";
function MoviesCard({ film, handleClickButton, buttonDeleteSavedMovies }) {
  return (
    <article className="moviesCard">
      <a
        href={film.trailerLink}
        className="moviesCard__link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`https://api.nomoreparties.co${film.image.url}`}
          className="moviesCard__image"
          alt={`Фильм: ${film.nameRU}`}
        />
      </a>
      <div className="moviesCard__info">
        <h2 className="moviesCard__title overflow-text">{film.nameRU}</h2>
        <button
          onClick={() => {
            handleClickButton(film);
          }}
          type="button"
          className={`moviesCard__like  ${
            film.isLikes ? "moviesCard__like_active" : ""
          } ${buttonDeleteSavedMovies}`}
        ></button>
      </div>
      <p className="moviesCard__timeline">
        {Math.floor(film.duration / 60)}ч {film.duration % 60}м
      </p>
    </article>
  );
}

export default MoviesCard;
