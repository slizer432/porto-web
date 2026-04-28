function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[80vh] w-full scroll-mt-15 bg-gray-100 overflow-hidden"
    >
      <div className="mt-30 mx-10">
        <h1 className="text-3xl font-semibold">Experience</h1>
        <div className="my-30">
          <hr className="text-gray-300" />
          <div className="my-10 grid-flow-col grid gap-60">
            <p className="text-sm font-semibold text-gray-700 uppercase">
              October 2025 - December 2025
            </p>
            <div>
              <h2 className="text-2xl font-semibold">
                Promptive - Back End Intern
              </h2>
              <p className="text-gray-600">
                Managed back-end systems using n8n and databases using
                PostgreSQL and Created webhooks for front-end access and
                integrated AI into the back-end via n8n.
              </p>
            </div>
          </div>
          <hr className="text-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
