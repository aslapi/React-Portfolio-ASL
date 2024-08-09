import ProjectCard from "../components/ProjectCard"
import tracker from "../assets/tracker.png"
import jate from "../assets/jate.png"
import tweeter from "../assets/tweeter.png"

const projects = [
    {
        title: "Employee Tracker",
        image: tracker,
        github: "https://github.com/aslapi/Employee-Tracker-ASL",
    },
    {
        title: "JATE",
        image: jate,
        github: "https://github.com/aslapi/Text-Editor-ASL",
    },
    {
        title: "Tweeter",
        image: tweeter,
        github: "https://github.com/anton-oz/tweeter",
    },
]

export default function Projects() {
    return (
      <div>
        <div className="text-center m-5">
            <h1>Projects</h1>
        </div>
        <div style={{display:"flex", flexWrap: "wrap", color: "black"}}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              github={project.github}
            />
          ))}
        </div>
      </div>
    );
  }
// export default function Project() {
//     return (
//         <div className="text-center m-5">
//             <h1>Projects</h1>
//         </div>
//     )
// }