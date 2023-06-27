const WorkExperience = () => {
  return (
    <div className="w-fit mx-auto  my-20">
      <h2 className="text-white text-5xl ml-6">Experience</h2>
      <div className="grid grid-cols-1 mt-5 mx-3 sm:grid-cols-3 gap-8">
        <div className="max-w-sm bg-zinc-800 rounded-lg shadow-lg p-6 ">
          <h3 className="text-xl font-semibold text-white mb-2">
            Software Engineer, RoomMe
          </h3>
          <p className="text-gray-400">
            Charlottesville, VA | May 2023 - Present
          </p>
          <ul className="list-disc  text-gray-300 mt-4">
            <li className="mb-2">
              Developed and maintained mobile applications using the Flutter
              framework and Firebase backend, ensuring smooth performance and
              seamless user experience across multiple platforms.
            </li>
            <li className="mb-2">
              Utilized Firebase services, such as Cloud Firestore and
              Authentication, to implement real-time data synchronization and
              secure user authentication for mobile applications.
            </li>
            <li className="mb-2">
              Integrated GCP services, such as Cloud Functions and Cloud
              Pub/Sub, to enable event-driven functionality and messaging
              capabilities.
            </li>
          </ul>
          <a
            href="https://roommebydsb.com/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
          >
            Visit Website
          </a>
        </div>
        <div className="flex flex-col justify-between max-w-sm bg-zinc-800 rounded-lg shadow-lg p-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Cybersecurity Intern, VA-CNIP
            </h3>
            <p className="text-gray-400">
              Charlottesville, VA | June 2023 - August 2023
            </p>
            <ul className="list-disc text-gray-300 mt-4">
              <li className="mb-2">
                Conducted comprehensive risk assessments of registrar
                information systems, identifying vulnerabilities and
                recommending appropriate security measures to improve
                cybersecurity posture and mitigate potential threats.
              </li>
              <li className="mb-2">
                Assisted in the configuration and deployment of security
                software, ensuring compliance with industry best practices and
                standards to enhance the overall security of local registrar
                offices' systems.
              </li>
            </ul>
          </div>
          <a
            href="https://cyberinnovation.virginia.edu/va-cyber-navigator-internship-program"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
          >
            Visit Website
          </a>
        </div>
        <div className="flex flex-col max-w-sm bg-zinc-800 rounded-lg shadow-lg p-6 justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Teacher, Global Teaching Project
            </h3>
            <p className="text-gray-400">October 2022 - Present</p>
            <ul className="list-disc  text-gray-300 mt-4">
              <li className="mb-2">
                Collaborated with the Global Teaching Project to deliver
                advanced computer science coursework to students and schools in
                communities where teacher shortages are most acute.
              </li>
            </ul>
          </div>
          <a
            href="https://www.globalteachingproject.com/about-us/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
