import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "../css/Projects.css";
const projects = [
  {
    image: "/images/coca-cola.jpg",
    title: "Coca-Cola Clone",
    type: "soft drink website",
    demo:"https://coca-cola-clone-six.vercel.app",
    github:"https://github.com/jpumoh73-blip/coca-cola-clone",
    tech: ["React", "JavaScript", "CSS"]
  },
  {
    image: "/images/bella-vista.jpg",
    title: "Bella Vista",
    type: "Restaurant Website",
    demo:"https://bella-vista-qy8e.vercel.app",
    github:"https://github.com/jpumoh73-blip/bella-vista",
    tech: ["React", "TypeScript", "Tailwind"]
  },
  {
    image: "/images/movie-app.jpg",
    title: "Movie App",
    type: "Movie Discovery App",
    demo:"https://movie-app-red-theta.vercel.app",
    github:"https://github.com/jpumoh73-blip/movie-app",
    tech: ["React", "API", "LocalStorage"]
  },
  {
    image: "/images/amazon-clone.jpg",
    title: "Mini Amazon Clone",
    type: "Ecommerce Website",
    demo:"https://mini-amazon-clone.vercel.app",
    github:"https://github.com/jpumoh73-blip/mini-amazon-clone",
    tech: ["React", "JavaScript", "CSS"]
  }
];

function Projects() {
  return (
    <section className="section projects" id="projects">

      <div className="container">

        <div className="section-heading project-heading">

          <div>
            <span className="eyebrow">
              FEATURED PROJECTS
            </span>

            <h2>
              My Recent Work
              <span> →</span>
            </h2>
          </div>

          <a href="#projects">
            View All Projects →
          </a>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article className="project-card" key={index}>

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.type}</p>

                <div className="project-tech">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                
<div className="project-buttons">
  <a
    href={project.demo || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="live-button"
  >
    Live Demo
    <FaArrowUpRightFromSquare />
  </a>

  <a
    href={project.github || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="github-button"
  >
    <FaGithub />
    GitHub
  </a>
</div>


              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;