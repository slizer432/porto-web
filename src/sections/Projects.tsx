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
    desc: "A simple React weather application",
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
    desc: "A full stack bus tracking application",
    category: "Web App",
    tech: ["Next.js", "Tailwind CSS", "Better Auth", "Vite", "Supabase"],
    links: {
      github: "https://github.com/slizer432/bus-tracker-web",
      // live: "https://github.com/slizer432/bus-tracker",
    },
  },
  {
    image: "/SIMPERA.png",
    title: "SIMPERA",
    desc: "College facility report application",
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
    desc: "Personal portfolio website",
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
    <section className="min-h-[80vh] scroll-mt-45" id="projects">
      <div className="mt-30 mx-10 flex items-center gap-4 justify-between">
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
