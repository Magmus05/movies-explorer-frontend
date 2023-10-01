import "./ButtonForForm.css";
import { Link } from "react-router-dom";
function ButtonForForm({buttonText, buttonQuestionText, buttonLinkText, marginTop, link}) {
  return (
    <>
      <button type="submit" className={`buttonForForm ${marginTop}`}>{buttonText}</button>
      <p className="buttonForForm-question">{buttonQuestionText}<Link  className="buttonForForm-link" to={link}>{buttonLinkText} </Link></p>
      
    </>
  );
}

export default ButtonForForm;
