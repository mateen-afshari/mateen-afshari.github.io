import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import myImage from "../assets/Mateen.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  return (
    <div className="justify-center">
      <div className=" w-80 h-80 animate-text bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full overflow-hidden mx-auto mb-10">
        <img src={myImage} alt="" />
      </div>
      <div>
        <div className="pb-4 text-center h-fit">
          <h2 className="text-white text-5xl">Hey, I'm Mateen</h2>
        </div>

        <p className="text-gray-400 text-center pb-10 px-3 max-w-xl mx-auto">
          I am a University of Virginia student currently pursuing a Master's in
          Computer Science. I love making things and you'll often catch me
          coding away. If not, I'll be watching UFC, at the gym, and hanging out
          with friends.
        </p>

        <div className="text-5xl flex justify-center gap-10">
          <a href="https://github.com/mateen-afshari" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/mateen-afshari-90598022b/"
            target="-blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </a>
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white px-3 rounded"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Iq4odO9lZ_aF-0UM4VrAgY0KoXr9tc-Y/view?usp=drive_link",
                "_blank"
              );
            }}
          >
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <h3 className="m-2 text-lg">Resume</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
