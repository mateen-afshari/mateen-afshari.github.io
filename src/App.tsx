import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navabar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="bg-dark">
      <section id="about" className="bg-dark h-screen w-screen">
        <Navbar />
        <Welcome />
      </section>
      {/* <section id="projects" className="min-h-full"> */}
      {/* <Projects /> */}
      {/* </section> */}
      {/* <section id="experience">Experience section content</section> */}
      {/* <section id="contact">Contact section content</section> */}
    </div>
  );
}

export default App;
