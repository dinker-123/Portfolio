import Navbar from "./components/navBar/navBar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Certificate from "./components/certificate/certificate";
import Contact from "./components/contect/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Certificate/>  
      <Projects/> 
      <Contact />  
      <Footer/>
    </div>
  );
}

export default App;
