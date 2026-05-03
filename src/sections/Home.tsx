import { ArrowDown } from "lucide-react";

function Home() {
  return (
    <section
      className="bg-gray-100 min-h-screen justify-center items-center flex text-center flex-col px-10"
      id="home"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600">
        Hi! I'm a passionate developer with experience in building web
        applications. Explore my projects, skills, and experience to learn more
        about me.
      </p>
      <a
        href="#projects"
        className="mt-10 text-black font-semibold text-xl border-b-3 border-black flex gap-2"
      >
        See my works <ArrowDown />
      </a>
    </section>
  );
}

export default Home;
