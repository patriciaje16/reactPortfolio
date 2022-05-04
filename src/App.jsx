import Carousel from "./components/Carousel/Carousel";
import portfolioData from "./data/portfolioData";
import MainHeading from "./components/MainHeading/MainHeading"
import Nav from "./components/Nav/Nav"
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Contacts from "./components/Contacts/Contacts";
import "./App.scss"



const App = () =>{
  return (
    <div className="App">
      <Nav />
      <MainHeading />
      < Carousel portfolioData={portfolioData} projects = {portfolioData}/>
      < AboutMe />
      <Resume />
      <Contacts />

     
    </div>
  );
}

export default App;
