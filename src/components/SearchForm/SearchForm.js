import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

//import { Link, useLocation } from "react-router-dom";
function SearchForm({ handleSearch }) {
  const [searchValue, setSearchValue] = React.useState("");
  function handleChange(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchValue.length === 0) {
      alert("Нужно ввести ключевое слово");
    } else {
      handleSearch(searchValue.toLowerCase());
    }
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
					minLength={2}
					maxLength={20}
        ></input>
        <button type="submit" className="searchForm__button"></button>
      </label>
      <FilterCheckbox></FilterCheckbox>
    </form>
  );
}

export default SearchForm;
