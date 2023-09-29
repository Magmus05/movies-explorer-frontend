import "./ButtonForForm.css";

function ButtonForForm({buttonText, buttonQuestionText, buttonLinkText, marginTop}) {
  return (
    <>
      <button className={`buttonForForm ${marginTop}`}>{buttonText}</button>
      <p className="buttonForForm__question">{buttonQuestionText}<span className="buttonForForm__link">{buttonLinkText}</span></p>
      
    </>
  );
}

export default ButtonForForm;
