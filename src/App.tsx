import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navabar";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <section id="about" className="bg-dark h-screen w-screen">
        <Welcome />
      </section>
      <section id="experience" className="min-h-screen mb-52 sm: mb-0">
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
