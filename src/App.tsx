import Footer from "./components/Footer";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="scroll-smooth bg">
      <Home />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
