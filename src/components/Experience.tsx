import { Transition } from "@headlessui/react";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const WorkExperience = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleInView = (inView: boolean) => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  };

  return (
    <div className="w-fit mx-auto my-20">
      <h2 className="text-white text-5xl ml-6">Experience</h2>
      <div className="grid grid-cols-1 mt-5 mx-3 lg:grid-cols-3 gap-8">
        <InView onChange={handleInView}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={animationTriggered}>
                <Transition.Child
                  as="div"
                  enter="ease-in duration-[1000ms] transition-all"
                  enterFrom="opacity-0 translate-y-48"
                  enterTo="opacity-100 translate-y-0"
                  className="max-w-sm bg-zinc-800 rounded-lg shadow-lg p-6"
                >
                  <Transition.Child
                    as="h3"
                    enter="ease-in delay-[200ms] duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="text-xl font-semibold text-white mb-2"
                  >
                    Software Engineer, RoomMe
                  </Transition.Child>
                  <Transition.Child
                    as="p"
                    enter="ease-in delay-[400ms] duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="text-gray-400"
                  >
                    Charlottesville, VA | May 2023 - Present
                  </Transition.Child>
                  <Transition.Child
                    as="ul"
                    enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="list-disc text-gray-300 mt-4"
                  >
                    <li className="mb-2">
                      Developed and maintained mobile applications using the
                      Flutter framework and Firebase backend, ensuring smooth
                      performance and seamless user experience across multiple
                      platforms.
                    </li>
                    <li className="mb-2">
                      Utilized Firebase services, such as Cloud Firestore and
                      Authentication, to implement real-time data
                      synchronization and secure user authentication for mobile
                      applications.
                    </li>
                    <li className="mb-2">
                      Integrated GCP services, such as Cloud Functions and Cloud
                      Pub/Sub, to enable event-driven functionality and
                      messaging capabilities.
                    </li>
                  </Transition.Child>
                  <Transition.Child
                    as="a"
                    enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    href="https://roommebydsb.com/"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
                  >
                    Visit Website
                  </Transition.Child>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>

        <InView onChange={handleInView}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={animationTriggered}>
                <Transition.Child
                  as="div"
                  enter="ease-in delay-[400ms] duration-[800ms] transition-all"
                  enterFrom="opacity-0 translate-y-48"
                  enterTo="opacity-100 translate-y-0"
                  className="max-w-sm bg-zinc-800 rounded-lg shadow-lg p-6"
                >
                  <Transition.Child
                    as="h3"
                    enter="ease-in delay-[200ms] duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="text-xl font-semibold text-white mb-2"
                  >
                    Cybersecurity Intern, VA-CNIP
                  </Transition.Child>
                  <Transition.Child
                    as="p"
                    enter="ease-in delay-[400ms] duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="text-gray-400"
                  >
                    Charlottesville, VA | June 2023 - August 2023
                  </Transition.Child>
                  <Transition.Child
                    as="ul"
                    enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="list-disc text-gray-300 mt-4"
                  >
                    <li className="mb-2">
                      Conducted comprehensive risk assessments of registrar
                      information systems, identifying vulnerabilities and
                      recommending appropriate security measures to improve
                      cybersecurity posture and mitigate potential threats.
                    </li>
                    <li className="mb-2">
                      Assisted in the configuration and deployment of security
                      software, ensuring compliance with industry best practices
                      and standards to enhance the overall security of local
                      registrar offices' systems.
                    </li>
                  </Transition.Child>
                  <Transition.Child
                    as="a"
                    enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    href="https://cyberinnovation.virginia.edu/va-cyber-navigator-internship-program"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
                  >
                    Visit Website
                  </Transition.Child>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>

        <InView onChange={handleInView}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={animationTriggered}>
                <Transition.Child
                  as="div"
                  enter="ease-in delay-[800ms] duration-[800ms] transition-all"
                  enterFrom="opacity-0 translate-y-48"
                  enterTo="opacity-100 translate-y-0"
                  className="max-w-sm bg-zinc-800 rounded-lg shadow-lg p-6"
                >
                  <Transition.Child
                    as="h3"
                    enter="ease-in delay-[200ms] duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="text-xl font-semibold text-white mb-2"
                  >
                    Teacher, Global Teaching Project
                  </Transition.Child>
                  <Transition.Child
                    as="p"
                    enter="ease-in delay-[400ms] duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="text-gray-400"
                  >
                    October 2022 - Present
                  </Transition.Child>
                  <Transition.Child
                    as="ul"
                    enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    className="list-disc text-gray-300 mt-4"
                  >
                    <li className="mb-2">
                      Collaborated with the Global Teaching Project to deliver
                      advanced computer science coursework to students and
                      schools in communities where teacher shortages are most
                      acute.
                    </li>
                  </Transition.Child>
                  <Transition.Child
                    as="a"
                    enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-y-12"
                    enterTo="opacity-100 translate-y-0"
                    href="https://www.globalteachingproject.com/about-us/"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
                  >
                    Visit Website
                  </Transition.Child>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default WorkExperience;
