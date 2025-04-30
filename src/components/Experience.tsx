import roommeLogo from "../assets/RoomMeLogo.png";
import microstrategyLogo from "../assets/microstrategy.png";
import globalTeachingProjectLogo from "../assets/globalteachingproject.jpeg";
import vacnipLogo from "../assets/vacnip.png";
import capitalOneLogo from "../assets/capitalone.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { useMediaQuery } from "@/hooks/use-media-query"

const experiences = [
  {
    company: "Capital One",
    role: "Software Engineer",
    period: "February 2025 - Present",
    location: "Tysons, VA",
    logo: capitalOneLogo,
    responsibilities: [
      "Frontend mobile engineer for the Capital One banking app, focusing on enhancing user experience and performance.",
      "Implemented accessibility and UI/UX improvements for sign-in and authentication flows",
    ],
  },
  {
    company: "Microstrategy",
    role: "Software Engineer Intern",
    period: "May 2024 - August 2024",
    location: "Tysons, VA",
    logo: microstrategyLogo,
    responsibilities: [
      "Developed and implemented an AI-powered assistant to automate the creation of advanced metrics, achieving over 80% partial accuracy and significantly improving data analysis efficiency and accuracy for business intelligence reports.",
      "Implemented retrieval augmented generation (RAG) models to enhance the assistant's ability to generate natural language explanations for complex metrics, improving user understanding and trust in the generated insights.",
    ],
  },
  {
    company: "RoomMe",
    role: "Software Engineer",
    period: "May 2023 - March 2024",
    location: "Charlottesville, VA",
    logo: roommeLogo,
    responsibilities: [
      "Constructed and implemented a dynamic marketing script, enabling daily outreach to a diverse audience of 18,000 individuals. This no cost solution resulted in a 400% increase in total followers and bolstered brand loyalty and engagement, contributing significantly to our company's growth.",
      "Developed and maintained mobile applications using the Flutter framework and Firebase backend, ensuring smooth performance and seamless user experience across multiple platforms.",
    ],
  },
  {
    company: "Global Teaching Project",
    role: "Teaching Assistant",
    period: "October 2022 - May 2024",
    location: "Charlottesville, VA",
    logo: globalTeachingProjectLogo,
    responsibilities: [
      "Collaborated with the Global Teaching Project to deliver advanced computer science coursework to students and schools in communities where teacher shortages are most acute.",
    ],
  },
  {
    company: "VA-CNIP",
    role: "Cybersecurity Intern",
    period: "June 2023 - August 2023",
    location: "Charlottesville, VA",
    logo: vacnipLogo,
    responsibilities: [
      "Increased adherence to the LESS standards from 86.8% to nearly 100%.",
      "Configured and deployed security software, ensuring compliance with industry best practices and standards to enhance the overall security of local registrar offices' systems.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-white">
              Experience
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See my impact across various roles
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {experiences.map((experience, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="rounded-lg border-0 bg-zinc-800 shadow-sm transition-all hover:shadow-md h-full">
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} Logo`}
                        width={48}
                        height={48}
                        className="rounded-md"
                        style={{ aspectRatio: "48/48", objectFit: "cover" }}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {experience.company}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {experience.role}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                      <p>{experience.period}</p>
                      <p>{experience.location}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-2 text-sm text-gray-400">
                      {experience.responsibilities.map(
                        (responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className=" static transform-none bg-zinc-700 hover:bg-zinc-600 border-0 text-white" />
            <CarouselNext className=" static transform-none bg-zinc-700 hover:bg-zinc-600 border-0 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WorkExperience;
