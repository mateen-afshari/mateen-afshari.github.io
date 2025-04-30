"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Github } from "lucide-react";

import brainImage from "../assets/mlClassification.png";
import seamImage from "../assets/seamCarving.png";
import scheduleImage from "../assets/uvaSchedule.png";
import portfolioImage from "../assets/portfolio.png";

// Data for projects
const projects = [
  {
    title: "Brain Tumor Classification",
    bullets: [
      "Built SVM and logistic regression models to classify MRI brain images as meningioma, glioma, pituitary, or no tumor.",
      "Achieved 90.8% test accuracy with SVM and 67.2% with logistic regression.",
    ],
    link: "https://github.com/mateen-afshari/MRI_Classification_ML",
    image: brainImage,
  },
  {
    title: "Schedule Builder Web App",
    bullets: [
      "Developed a course builder website for UVA students to create and share schedules, replacing the retired louslist.",
      "Stored schedules, friends, and profiles in a Postgres database on Heroku.",
    ],
    link: "https://github.com/mateen-afshari/UVACourseScheduleMaker",
    image: scheduleImage,
  },
  {
    title: "Seam Carving",
    bullets: [
      "Implemented a Python program for content-aware image resizing using the seam carving algorithm.",
    ],
    link: "https://github.com/mateen-afshari/Algorithms",
    image: seamImage,
  },
  {
    title: "Portfolio Website",
    bullets: [
      "Built with TypeScript, React, and Tailwind CSS for responsive design.",
      "Showcases projects and skills with a clean, modern UI.",
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
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Projects
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I've worked on
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
            {projects.map((project: Project, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="rounded-lg shadow-lg bg-zinc-800 border-0 h-full flex flex-col">
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto transition-transform duration-300 hover:scale-105"
                      style={{ aspectRatio: "16/9", objectFit: "cover" }}
                    />
                  </div>
                  <CardHeader className="px-6 pt-4 pb-0">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="px-6 py-4 flex-grow">
                    <ul className="space-y-2 text-sm text-gray-400">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6 border-t border-zinc-700 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-zinc-300 hover:text-zinc-100 bg-zinc-800/30 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-700/50 transition-colors"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  </CardFooter>
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
}

export default Projects;
