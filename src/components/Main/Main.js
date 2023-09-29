import "./Main.css";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
//import { Link, useLocation } from "react-router-dom";
function Main() {
  return (
    <>
      <Header backgroundTheme={"azure-background"}></Header>
      <main>
        <Promo></Promo>
        <NavTab></NavTab>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      <Footer> </Footer>
    </>
  );
}

export default Main;
