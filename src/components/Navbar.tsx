function Navbar() {
  return (
    <nav className="max-sm:hidden w-full fixed flex py-4 px-6 border-b border-slate-300 bg-white z-10">
      <h1 className="font-bold text-xl">Portfolio</h1>
      <div className="flex justify-center absolute w-full left-0.5">
        <ul className="flex gap-8 text-neutral-400 justify-self-center font-semibold">
          <a
            className="hover:cursor-pointer hover:text-black transition-colors duration-300"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:cursor-pointer hover:text-black transition-colors duration-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:cursor-pointer hover:text-black transition-colors duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:cursor-pointer hover:text-black transition-colors duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:cursor-pointer hover:text-black transition-colors duration-300"
            href="#experience"
          >
            Experience
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
