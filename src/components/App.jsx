import Navbar from "./navbar";
import Intro from "./Intro";
import Skills from "./Skills";
import Project from "./Projects"
import Contact from "./Contact";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>  
      <Skills/>   
      <Project/> 
      <Contact/> 
    </div>
  );
}

export default App;
