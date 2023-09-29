import "./AboutProject.css";
//import { Link, useLocation } from "react-router-dom";
function AboutProject() {
  return <section className="aboutproject container" id="AboutProject">
		<h2 className="aboutproject__title ">О проекте</h2>
		<div className="aboutproject__description ">
			<h3 className="aboutproject__description-title el1">Дипломный проект включал 5 этапов</h3>
			<h3 className="aboutproject__description-title el2">На выполнение диплома ушло 5 недель</h3>
			<p className="aboutproject__description-text el3">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
			<p className="aboutproject__description-text el4">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
		</div>
		<div className="aboutproject__deadlines ">
			<p className="aboutproject__text aboutproject__text_green">1 неделя</p>
			<p className="aboutproject__text aboutproject__text_grey">4 недели</p>
			<p className="aboutproject__caption">Back-end</p>
			<p className="aboutproject__caption">Front-end</p>
		</div>
	</section>;
}

export default AboutProject;