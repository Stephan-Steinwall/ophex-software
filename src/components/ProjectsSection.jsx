import ProjectCard from './ProjectCard';  // Import the ProjectCard component

function ProjectsSection() {
  const projects = [
    {
      title: "Dummy project name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Dummy project name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-orange-500 text-2xl font-semibold mb-4">Our Projects</h2>
        <p className="text-4xl font-bold max-w-3xl mx-auto">
          Projects from some of our clients who kept their trust on us
        </p>
      </div>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>

      <div className="">
        <button className="w-full bg-orange-600 text-white py-4 rounded-b-xl hover:bg-orange-700 transition-colors duration-300">
          Browse More Projects
        </button>
      </div>
    </section>
  );
}

export default ProjectsSection;