import Header from "./components/Header";
import Img from "./components/Img";
import AboutMe from "./components/SobreMi";
import Button from "./components/Button";
import Footer from "./components/Footer";
import "./styles.css";

document.body.style.backgroundColor = "#fffffa";

export default function App() {
  return (
    <div className="App">
      <Header title="Hola Technolatinas!" />
      <Img />
      <AboutMe message="Hola, mi nombre es Francis Gabriela Tovar C. Profesionalmente he estado en las áreas de innovación, marketing y emprendimientos. Mis redes sociales son:" />
      <div className="ButtonContainer">
        <Button title="GitHub" link="https://github.com/FrancisGabriela" />
        <Button
          title="Linkedin"
          link="https://cl.linkedin.com/in/francistovar/es"
        />
        <Button title="Twitter" link="https://twitter.com/fg1531" />
      </div>
      <Footer message="Realizado por Francis Tovar 🧡 #LatinasCodeCamp" />
    </div>
  );
}
