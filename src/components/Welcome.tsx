import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import myImage from "../assets/Mateen.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { TypewriterEffectSmooth } from "./TypeWriterEffect";

function Welcome() {
  const words = [
    {
      text: "Hey,",
      className: " text-white",
    },
    {
      text: "I'm",
      className: " text-white",
    },
    {
      text: "Mateen",
      className: " text-white",
    },
  ];
  return (
    <div className="pb-14 align-middle">
      <div className="w-72 h-72 animate-text bg-gradient-to-b from-blue-500 via-sky-500 to-teal-500 rounded-full overflow-hidden mx-auto mb-10 sm:w-80 sm:h-80">
        <img src={myImage} alt="" />
      </div>
      <div className="w-screen justify-center ">
        <div className="flex pb-4 items-center justify-center h-fit ">
          <TypewriterEffectSmooth words={words} />
        </div>

        <p className="text-gray-400 text-center pb-10 px-3 max-w-xl mx-auto">
          I am a University of Virginia student currently pursuing a Master's in
          Computer Science. I love making things and you'll often catch me
          coding away. If not, I'll be watching UFC, at the gym, and hanging out
          with friends.
        </p>

        <div className=" flex justify-center align-middle gap-10 pb-10 sm:pb-0">
          <a
            href="https://github.com/mateen-afshari"
            target="_blank"
            className="text-5xl pt-2"
          >
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/mateen-afshari-90598022b/"
            target="-blank"
            className="text-5xl pt-2"
          >
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </a>
          {/* <button
            className="bg-sky-500 hover:bg-sky-600 text-white px-3 rounded"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/16KJbh1qVBAhOi_M6TyMnxDWFbXbevHeO/view?usp=sharing",
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
          </button> */}
          <a
            href="https://drive.google.com/file/d/1dgSB1Fw26O2j5ZLHFE6ri83aii2NCOXu/view?usp=sharing"
            target="_blank"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-sky-600 transition duration-300 ease-out border-2 border-sky-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
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
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
