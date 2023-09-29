import "./InputFormForProfile.css";
function InputFormForProfile({ type, name, title, value, error }) {
  return (
    <label className="inputFormForProfile">
      <p className="inputFormForProfile__title">{title}</p>
      <input
        className="inputFormForProfile__input "
        type={type}
        name={name}
        value={value}
      />
      <span className="inputFormForProfile__span-error">{error}</span>
    </label>
  );
}

export default InputFormForProfile;
