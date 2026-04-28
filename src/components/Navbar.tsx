import { Link } from "react-scroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
];

const navOffset = -80;

function Navbar() {
  return (
    <nav className="max-sm:hidden w-full fixed flex py-4 px-6 border-b border-slate-300 bg-white z-10">
      <h1 className="font-bold text-xl">Portfolio</h1>
      <div className="flex justify-center absolute w-full left-0.5">
        <ul className="flex gap-8 text-neutral-400 justify-self-center font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy
              smooth
              duration={100}
              offset={navOffset}
              activeClass="text-black border-b-2 border-black"
              className="hover:cursor-pointer hover:text-black transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
