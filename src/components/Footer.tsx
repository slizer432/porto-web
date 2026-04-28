function Footer() {
  return (
    <footer className="w-full h-[20vh] items-center border-t border-slate-300">
      <div className="flex items-center justify-between mx-10 mt-15">
        <p className="font-semibold uppercase text-base">
          &copy; {new Date().getFullYear()} Rayhan Heru Arifiansyah. All rights
          reserved.
        </p>
        <div className="flex space-x-4 text-gray-400 text-lg">
          <a
            href="https://www.linkedin.com/in/rayhan-heru-arifiansyah-037abb289"
            target="_blank"
            className="hover:text-black hover:border-b-2 duration-100"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/slizer432"
            target="_blank"
            className="hover:text-black hover:border-b-2 duration-100"
          >
            Github
          </a>
          <a
            href="mailto:rayhanheruk@gmail.com"
            target="_blank"
            className="hover:text-black hover:border-b-2 duration-100"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
