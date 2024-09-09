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
    <div className="bg-dark ">
      <Navbar />

      <div className="">
        <section
          id="about"
          className="flex items-center justify-center min-h-screen  bg-dark"
        >
          <Welcome />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="experience" className="min-h-screen ">
          <Experience />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="socials" className="min-h-screen">
          <Socials />
        </section>
      </div>
    </div>
  );
}

export default App;
