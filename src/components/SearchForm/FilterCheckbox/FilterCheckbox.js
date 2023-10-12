import React from "react";
import "./FilterCheckbox.css";
function FilterCheckbox({isShortFilmsMovies, handleChangeCheckbox}) {

  return (
    <label className="filterCheckbox">
      <input checked={isShortFilmsMovies} onChange={(e) => handleChangeCheckbox(e)} type="checkbox" className="filterCheckbox__tumbler"></input>
      <span className="filterCheckbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
