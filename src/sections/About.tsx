function About() {
  return (
    <section id="about" className="min-h-[80vh] scroll-mt-45">
      <div className="flex my-45 mx-10 gap-40 items-center max-md:flex-col">
        <img
          src="/About.png"
          alt=""
          className="w-full max-w-lg aspect-square h-auto object-cover grayscale"
        />
        <div>
          <h1 className="text-4xl font-semibold mb-10">About Me</h1>
          <p className="text-lg text-gray-600">
            I’m an IT student currently studying in Polytechnic State of Malang.
            I specialize in web development, specifically back end. But I’m
            currently trying out front end development to broaden my skills. In
            the near future, I want to be able to work as front end, back end or
            full stack so that I can improve my chance at working and
            contributing to the client.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
