import React from "react";
import "./ButtonMore.css";
function ButtonMore({onAddFilms}) {
  return <button type="button" className="buttonMore" onClick={onAddFilms}>Ещё</button>;
}

export default ButtonMore;
