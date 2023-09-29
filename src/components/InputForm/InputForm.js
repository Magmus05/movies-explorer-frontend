import "./InputForm.css";
function InputForm({type, name, title, error}) {
  return (
    <label className="inputform">
      <p className="inputform__title">{title}</p>
      <input className="inputform__input " type={type} name={name}></input>
      <span className="inputform__span-error">{error}</span>
    </label>
  );
}

export default InputForm;
