import "./InputForm.css";
function InputForm({
  type,
  name,
  title,
  placeholder,
  error,
  handleChange,
  value,
  minLength,
  maxLength,

}) {
  return (
    <label className="inputform">
      <p className="inputform__title">{title}</p>
      <input
        className="inputform__input "
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={`Введите ${placeholder}`}
        value={value || ""}
        onChange={handleChange}
        required
        id={name}

      ></input>
      <span className="inputform__span-error">{error}</span>
    </label>
  );
}

export default InputForm;
