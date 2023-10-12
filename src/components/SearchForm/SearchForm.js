import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

//import { Link, useLocation } from "react-router-dom";
function SearchForm({
  handleSearch,
  isShortFilmsMovies,
  handleChangeCheckbox,
	searchValue,
  setSearchValue
}) {
  function handleChange(e) {
    setSearchValue(e.target.value);

  }
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (e.target[0].value.length <2) {
      alert("Нужно ввести ключевое слово, более 2 символов")
    }else{ handleSearch(searchValue.toLowerCase(), e);}
  }
  return (
    <form className="searchForm" onSubmit={handleSearchSubmit}>
      <label className="searchForm__block">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="searchFormInput"
          className="searchForm__input"
          placeholder="Фильм"
          required
          minLength={0}
          maxLength={20}
          value={searchValue}
        ></input>
        <button type="submit" className="searchForm__button"></button>
      </label>
      <FilterCheckbox
        isShortFilmsMovies={isShortFilmsMovies}
        handleChangeCheckbox={handleChangeCheckbox}
      ></FilterCheckbox>
    </form>
  );
}

export default SearchForm;
