import React from "react";
import "./MoviesCard.css";
//import { Link, useLocation } from "react-router-dom";
function MoviesCard({film}) {
  return (
      <article className="moviesCard">
        <img src={`https://api.nomoreparties.co${film.image.url}`} className="moviesCard__image" alt={`Фильм: ${film.nameRU}`} />
        <div className="moviesCard__info">
          <h2 className="moviesCard__title overflow-text">{film.nameRU}</h2>
          <button type="button" className="moviesCard__like"></button>
        </div>
        <p className="moviesCard__timeline">{Math.floor(film.duration/60)}ч {film.duration%60}м</p>
      </article>
  );
}

export default MoviesCard;