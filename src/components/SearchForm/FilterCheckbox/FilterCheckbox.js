import React from "react";
import "./FilterCheckbox.css";
function FilterCheckbox({isShortFilmsMovies, handleChangeCheckbox, films}) {

  return (
    <label className="filterCheckbox">
      <input checked={isShortFilmsMovies} onChange={(e) => {
        const btn = e.target.closest("form")[1]
        handleChangeCheckbox(e)
        if(films.length !== 0) btn.click();
        }} type="checkbox" className="filterCheckbox__tumbler"></input>
      <span className="filterCheckbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
