import "./SearchForm.css";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

//import { Link, useLocation } from "react-router-dom";
function SearchForm() {
  return (
<form className="searchForm">
	<label className="searchForm__block">
		<input className="searchForm__input" placeholder="Фильм"></input>
		<button className="searchForm__button"></button>
		</label>
		<FilterCheckbox></FilterCheckbox>
</form>
  )
}

export default SearchForm;