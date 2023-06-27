import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navabar";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <section id="about" className="bg-dark h-screen w-screen">
        <Welcome />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="experience" className="min-h-screen">
        <Experience />
      </section>

      <section id="contact">Contact section content</section>
    </div>
  );
}

export default App;
