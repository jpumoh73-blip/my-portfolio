import "../css/Skills.css";

function Skills() {

    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Vite",
        "Git",
        "GitHub",
        "Responsive Design"
    ];

    return (

        <section className="skills" id="skills">

            <h2>My Skills</h2>

            <div className="skills-grid">

                {skills.map((skill,index)=>(

                    <div className="skill-card" key={index}>

                        <h3>{skill}</h3>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Skills;