import "./NotFound.css"
import { useNavigate } from "react-router-dom";
function NotFound (){
const navigate = useNavigate()

function goBack(){
	navigate(-1)
}
	return(
		<>
		<h2 className="notfound__error">404</h2>
		<p className="notfound__message">Страница не найдена</p>
		<button onClick={goBack} className="notfound__link">Назад</button>
		</>
	)

}
export default NotFound