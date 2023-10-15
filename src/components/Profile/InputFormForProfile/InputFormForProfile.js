import "./InputFormForProfile.css";
function InputFormForProfile({
  type,
  name,
  title,
  placeholder,
  error,
  handleChange,
  value,
  pattern
}) {
  return (
    <label className="inputFormForProfile">
      <p className="inputFormForProfile__title">{title}</p>
      <input
        className="inputFormForProfile__input "
        type={type}
        name={name}
        minLength={2}
        maxLength={40}
        placeholder={`Введите ${placeholder}`}
        value={value || ""}
        onChange={handleChange}
        required=""
        id={name}
        pattern={pattern}
      />
      <span className="inputFormForProfile__span-error">{error}</span>
    </label>
  );
}

export default InputFormForProfile;
