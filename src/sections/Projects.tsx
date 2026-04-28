import Card from "../components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { ComponentClass } from "react";
import CarouselModule from "react-multi-carousel";
import type {
  CarouselProps,
  ResponsiveType,
} from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";

const Carousel =
  (CarouselModule as unknown as { default?: ComponentClass<CarouselProps> })
    .default ?? (CarouselModule as unknown as ComponentClass<CarouselProps>);

const projects = [
  {
    image: "/weather-app.png",
    title: "Weather App",
    desc: "A simple React weather application",
  },
  {
    image: "/bus-tracker.png",
    title: "Bus Tracker",
    desc: "A full stack bus tracking application",
  },
  {
    image: "/SIMPERA.png",
    title: "SIMPERA",
    desc: "College facility report application",
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
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
