import "../css/Projects.css";

function Projects() {

  const projects = [

    {
      id: 1,
      title: "Coca-Cola Clone ",
      image: "/images/coca-cola.jpg",
      description:
        "A responsive Coca-Cola website built with React featuring product listings, cart functionality, and modern UI.",
      github: "https://github.com/jpumoh73-blip/Coca-Cola-Clone.git",
      demo: "https://coca-cola-clone-six.vercel.app",
    },

    {
      id: 2,
      title: "Bella Vista Restaurant",
      image: "/images/bellavista.jpg",
      description:
        "A luxury restaurant website with responsive design, reservation section, gallery, testimonials and elegant UI.",
      github: "https://github.com/jpumoh73-blip/bella-vista.git",
      demo: "https://bella-vista-qy8e.vercel.app",
    },

    {
      id: 3,
      title: "Movie App",
      image: "/images/movie-app.jpg",
      description:
        "A movie search application built with React and the OMDB API, allowing users to search for movies and view details.",
      github: "https://github.com/jpumoh73-blip/movie-app.git",
      demo: "https://movie-app-red-theta.vercel.app",
    },

  ];

  return (

    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <p>
        Here are some of my recent projects built using React,
        JavaScript, HTML and CSS.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.id}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;