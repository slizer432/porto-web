import Card from "../components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { ComponentClass } from "react";
import CarouselModule from "react-multi-carousel";
import type {
  CarouselProps,
  ResponsiveType,
} from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";
import CustomModal from "../components/Modal";
import UseModal from "../hooks/UseModal.ts";

const Carousel =
  (CarouselModule as unknown as { default?: ComponentClass<CarouselProps> })
    .default ?? (CarouselModule as unknown as ComponentClass<CarouselProps>);

const projects = [
  {
    image: "/weather-app.png",
    title: "Weather App",
    subtitle: "React Weather App",
    desc: "A simple React weather application I made to practice API integration and React hooks. It allows users to search for current weather conditions in any city worldwide, displaying temperature, humidity, and weather descriptions using data from the WeatherAPI.",
    category: "Web App",
    tech: ["Tailwind CSS", "React", "Vite"],
    links: {
      github: "https://github.com/slizer432/weather-app",
      live: "https://myweatherapptes.netlify.app/",
    },
  },
  {
    image: "/bus-tracker.png",
    title: "Bus Tracker",
    subtitle: "Full Stack Bus Tracking App",
    desc: "A full stack bus tracking application built with Next.js, Tailwind CSS, Better Auth, Vite, and Supabase. The app allows users to track bus locations and bus routes.",
    category: "Web App",
    tech: ["Next.js", "Tailwind CSS", "Better Auth", "Vite", "Supabase"],
    links: {
      github: "https://github.com/slizer432/bus-tracker-web",
      live: "https://bus-tracker-web-cyan.vercel.app/",
    },
  },
  {
    image: "/SIMPERA.png",
    title: "SIMPERA",
    subtitle: "College Facility Report Application",
    desc: "SIMPERA is a web application designed to facilitate the reporting of facility issues within a college campus. It allows students and staff to easily submit reports about maintenance problems, such as broken equipment or infrastructure issues, ensuring that the campus facilities are well-maintained and any problems are promptly addressed.",
    category: "Web App",
    tech: ["Laravel", "MySQL"],
    links: {
      github: "https://github.com/dulaziz15/SIMPERA",
      // live: "https://github.com/slizer432/SIMPERA",
    },
  },
  {
    image: "/Portfolio.png",
    title: "Portfolio",
    subtitle: "Personal Portfolio Website",
    desc: "This is my personal portfolio website. Here, you can find information about me, my skills, experience and the projects I've worked on. The website is built using React and Vite, showcasing my ability to create responsive and visually appealing web applications.",
    category: "Web App",
    tech: ["React", "Vite"],
    links: {
      github: "https://github.com/slizer432/porto-web",
      live: "https://rayhanherua.netlify.app/",
    },
  },
];

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

type CarouselHandle = {
  previous: () => void;
  next: () => void;
};

function Projects() {
  const carouselRef = useRef<CarouselHandle | null>(null);
  const { isOpen, open, close } = UseModal();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const handleProjectClick = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    open();
  };

  const handleCloseModal = () => {
    close();
    setSelectedProject(null);
  };

  return (
    <section className="min-h-[90vh] py-30 px-10 scroll-mt-45" id="projects">
      <div className="flex items-center gap-4 justify-between">
        <h1 className="text-4xl font-semibold">Featured Projects</h1>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => carouselRef.current?.previous()}
            className="rounded-full border border-slate-300 p-2 text-black shadow-sm transition hover:bg-black hover:text-white cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => carouselRef.current?.next()}
            className="rounded-full border border-slate-300 p-2 text-black shadow-sm transition hover:bg-black hover:text-white cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="mt-15 px-8 md:px-10">
        <Carousel
          ref={(instance) => {
            carouselRef.current = instance as unknown as CarouselHandle | null;
          }}
          responsive={responsive}
          arrows={false}
          infinite={false}
          keyBoardControl
          itemClass="px-2"
        >
          {projects.map((project, index) => (
            <Card
              key={`${project.title}-${index}`}
              image={project.image}
              title={project.title}
              desc={project.desc}
              subtitle={project.subtitle}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </Carousel>
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
