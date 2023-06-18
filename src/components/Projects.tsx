// Data for projects
const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    link: "https://github.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    link: "https://github.com/project2",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    link: "https://github.com/project2",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    link: "https://github.com/project2",
  },
];

interface Project {
  title: string;
  description: string;
  link: string;
}

function Projects() {
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-white text-5xl ml-10">Projects</h2>
      <div className="grid mt-5 grid-cols-1 mx-5 sm:grid-cols-3 gap-8 ">
        {projects.map((project: Project) => (
          <div className="max-w-sm rounded shadow-lg bg-zinc-800">
            <img className="w-full" src="" alt="img" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {project.title}
              </div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Demo
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Github
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
