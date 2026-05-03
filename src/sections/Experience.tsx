function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[80vh] w-full scroll-mt-15 bg-gray-100 overflow-hidden"
    >
      <div className="mt-30 mx-10">
        <h1 className="text-4xl font-semibold">Experience</h1>
        <div className="my-30">
          <hr className="text-gray-300" />
          <div className="my-10 flex lg:gap-90 gap-10 flex-col lg:flex-row">
            <p className="text-sm font-semibold text-gray-700 uppercase whitespace-nowrap">
              October 2025 - December 2025
            </p>
            <div>
              <h2 className="text-2xl font-semibold">
                Promptive - Back End Intern
              </h2>
              <ul className="text-gray-600 list-disc list-outside pl-5 mt-5">
                <li>
                  Responsible for managing the company’s back-end systems using
                  n8n
                </li>
                <li>
                  Responsible for managing the company’s databases using
                  PostgreSQL
                </li>
                <li>Create webhooks for front end to access using n8n</li>
                <li>Integrate AI to web’s back end using n8n</li>
              </ul>
            </div>
          </div>
          <hr className="text-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Experience;
