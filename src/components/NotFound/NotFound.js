import "./NotFound.css"
import { useNavigate } from "react-router-dom";
function NotFound (){
const navigate = useNavigate()

function goBack(){
	navigate(-1)
}
	return(
		<main>
		<h1 className="notfound-error">404</h1>
		<p className="notfound-message">Страница не найдена</p>
		<button type="button" onClick={goBack} className="notfound-link">Назад</button>
		</main>
	)

}
export default NotFound