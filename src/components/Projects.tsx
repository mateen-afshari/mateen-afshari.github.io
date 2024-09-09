import brainImage from "../assets/mlClassification.png";
import seamImage from "../assets/seamCarving.png";
import scheduleImage from "../assets/uvaSchedule.png";
import portfolioImage from "../assets/portfolio.png";
// Data for projects
const projects = [
  {
    title: "Brain Tumor Classification",
    bullets: [
      "Created SVM and logistic regression machine learning models using Sklearn to classify MRI brain images as being meningioma, glioma, pituitary, or no tumor.",
      "SVM model had a test accuracy of 90.8%, and the logistic regression model had a test accuracy of 67.2%.",
    ],
    link: "https://github.com/mateen-afshari/MRI_Classification_ML",
    image: brainImage,
  },
  {
    title: "Schedule Builder Web App",
    bullets: [
      "Collaborated with a team to develop and deploy a course builder website where users can build schedules and share them with friends. This implementation improved upon the retired louslist website that UVA students previously used.",
      "Data such as schedules, friends, and profiles were stored in a postgres database deployed on Heroku.",
    ],
    link: "https://github.com/mateen-afshari/UVACourseScheduleMaker",
    image: scheduleImage,
  },
  {
    title: "Seam Carving",
    bullets: [
      "Created a program in python to find the lowest weight seam in an image, deploying the seam carving algorithm for content-aware image re-sizing.",
    ],
    link: "https://github.com/mateen-afshari/Algorithms",
    image: seamImage,
  },
  {
    title: "Portfolio Website \n(The one you're on right now)",
    bullets: [
      "TypeScript-Powered Portfolio Website with React, Tailwind CSS, and Bootstrap",
      "Leveraged the power of React components and the utility-first approach of Tailwind CSS for efficient development and responsive design.",
    ],
    link: "https://github.com/mateen-afshari/mateen-afshari.github.io",
    image: portfolioImage,
  },
];

interface Project {
  title: string;
  bullets: string[];
  link: string;
  image: string;
}

function Projects() {
  return (
    <div className="w-fit mx-auto px-3 mb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Projects
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out some of the projects I've worked on
            </p>
          </div>
        </div>
      </div>
      <div className="grid mt-5 grid-cols-1 mx-3 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project: Project) => (
          <div
            className="flex flex-col max-w-sm rounded shadow-lg bg-zinc-800 justify-between"
            style={{ minHeight: "660px" }}
          >
            <div className="h-min">
              <img className="w-full max-h-80" src={project.image} alt="img" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">
                  {project.title}
                </div>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li className="text-gray-300 mb-2 list-disc">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2 h-min">
              {project.title == "Schedule Builder Web App" && (
                <a
                  href="https://louslist-0ec9958be7d2.herokuapp.com/"
                  target="_blank"
                >
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Demo
                  </span>
                </a>
              )}
              <a href={project.link} target="_blank">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Github
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
