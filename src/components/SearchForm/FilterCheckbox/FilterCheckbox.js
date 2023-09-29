import "./FilterCheckbox.css";
function FilterCheckbox() {
  return (
    <label className="filterCheckbox">
      <input type="checkbox" className="filterCheckbox__tumbler"></input>
      <span className="filterCheckbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
