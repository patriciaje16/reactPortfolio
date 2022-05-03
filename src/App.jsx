import Carousel from "./components/Carousel/Carousel";
import portfolioData from "./data/portfolioData";
import MainHeading from "./components/MainHeading/MainHeading"
import Nav from "./components/Nav/Nav"



const App = () =>{
  return (
    <div className="App">
      <Nav />
      <MainHeading />
      < Carousel portfolioData={portfolioData} slides = {portfolioData}/>

     
    </div>
  );
}

export default App;
