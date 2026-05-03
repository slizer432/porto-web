const skillGroups = [
  {
    title: "Programming Language",
    items: "JavaScript, PHP, Python, Java, C#",
  },
  {
    title: "Tech Stacks",
    items: "Laravel, Express.js, ASP .NET, React, MySQL, MongoDB, Mongoose",
  },
  {
    title: "Tools",
    items: "Git, GitHub, Ngrok, Apidog, n8n",
  },
];

function Skills() {
  return (
    <section className="min-h-[90vh] bg-gray-100 scroll-mt-15" id="skills">
      <div className="flex gap-50 lg:flex-row flex-col py-30">
        <h1 className="text-4xl font-semibold relative top-25 mx-10 self-start whitespace-nowrap lg:sticky">
          Skills & Techs
        </h1>
        <ul className=" mx-20 grid grid-cols-1 gap-15">
          {skillGroups.map((group) => (
            <li key={group.title} className="list-none">
              <hr className="my-5 text-gray-300" />
              <div className="grid lg:grid-cols-2 lg:gap-90 grid-cols-1 gap-10">
                <h2 className="text-3xl">{group.title}</h2>
                <p className="text-lg text-gray-600 justify-end">
                  {group.items}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
