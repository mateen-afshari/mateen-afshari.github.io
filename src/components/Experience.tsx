import roommeLogo from "../assets/RoomMeLogo.png";
import microstrategyLogo from "../assets/microstrategy.png";
import globalTeachingProjectLogo from "../assets/globalteachingproject.jpeg";
import vacnipLogo from "../assets/vacnip.png";
const WorkExperience = () => {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Experience
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See my impact across various roles
            </p>
          </div>
        </div>
      </div>
      <div className=" grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12 mx-auto px-12 xl:px-0">
        <div className="rounded-lg border-0-0 bg-zinc-800 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-4">
            <img
              src={microstrategyLogo}
              alt="Company Logo"
              width={48}
              height={48}
              className="rounded-md"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Microstrategy
              </h3>
              <p className="text-sm text-gray-400">Software Engineer Intern</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>May 2024 - August 2024</p>
            <p>Tysons, VA</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              Developed and implemented an AI-powered assistant to automate the
              creation of advanced metrics, achieving over 80% partial accuracy
              and significantly improving data analysis efficiency and accuracy
              for business intelligence reports.
            </li>

            <li>
              Implemented retrieval augmented generation (RAG) models to enhance
              the assistant's ability to generate natural language explanations
              for complex metrics, improving user understanding and trust in the
              generated insights.
            </li>
          </ul>
        </div>
        <div className="rounded-lg border-0 bg-zinc-800 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-4">
            <img
              src={roommeLogo}
              alt="Company Logo"
              width={48}
              height={48}
              className="rounded-md"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">RoomMe</h3>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>May 2023 - March 2024</p>
            <p>Charlottesville, VA</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              Constructed and implemented a dynamic marketing script, enabling
              daily outreach to a diverse audience of 18,000 individuals. This
              no cost solution resulted in a 400% increase in total followers
              and bolstered brand loyalty and engagement, contributing
              significantly to our company's growth.
            </li>
            <li>
              Developed and maintained mobile applications using the Flutter
              framework and Firebase backend, ensuring smooth performance and
              seamless user experience across multiple platforms.
            </li>
          </ul>
        </div>
        <div className="rounded-lg border-0 bg-zinc-800 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-4">
            <img
              src={globalTeachingProjectLogo}
              alt="Company Logo"
              width={48}
              height={48}
              className="rounded-md"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Global Teaching Project
              </h3>
              <p className="text-sm text-gray-400">Teaching Assistant</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>June 2019 - August 2019</p>
            <p>Los Angeles, CA</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              Collaborated with the Global Teaching Project to deliver advanced
              computer science coursework to students and schools in communities
              where teacher shortages are most acute.
            </li>
          </ul>
        </div>
        <div className="rounded-lg border-0 bg-zinc-800 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-4">
            <img
              src={vacnipLogo}
              alt="Company Logo"
              width={48}
              height={48}
              className="rounded-md"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">VA-CNIP</h3>
              <p className="text-sm text-gray-400">Cybersecurity Intern</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>June 2023 - August 2023</p>
            <p>Charlottesville, VA</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              Increased adherence to the LESS standards from 86.8% to nearly
              100%.
            </li>
            <li>
              Configured and deployed security software, ensuring compliance
              with industry best practices and standards to enhance the overall
              security of local registrar offices' systems.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
