import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./app.css"
import Features from "./components/Features";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <br />
    <Features/>
    <br />
    <About/>
    <br />
    <Skills/>
    <br />
    <Timeline/>
    <br />
    <Projects/>
    <br />
    <Contact/>
    <br />

      
    </>
  );
}

export default App;