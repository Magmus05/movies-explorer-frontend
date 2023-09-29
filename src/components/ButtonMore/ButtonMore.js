import React from "react";
import "./ButtonMore.css";
function ButtonMore({onAddFilms}) {
  return <button className="buttonMore__button" onClick={onAddFilms}>Ещё</button>;
}

export default ButtonMore;
