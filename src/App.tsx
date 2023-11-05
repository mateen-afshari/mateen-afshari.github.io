import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navabar";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Socials from "./components/Socials";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <section
        id="about"
        className="flex items-center justify-center h-screen w-screen bg-dark"
      >
        <Welcome />
      </section>
      <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      <section id="experience" className="min-h-screen mb-52 sm:mb-0">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="socials" className="min-h-screen">
        <Socials />
      </section>
    </div>
  );
}

export default App;
