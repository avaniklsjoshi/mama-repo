import "./timeline.scss";

interface InfoButtonProp {
  projects: string;
  content: { tech: string[]; role: string[] };
}

export default function InfoButton(props: InfoButtonProp) {
  const isProjects = props.projects.split(",").length > 1;
  return (
    <div className="info-container">
      <div className="tech-container">
        <div className="info-title">
          Tech Stacks used in {isProjects ? "these projects" : "this project"} -
        </div>
        <ul>
          {props.content.tech.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="role-container">
        <div className="info-title">
          My Role in {isProjects ? "these projects" : "this project"}-
        </div>
        <ul>
          {props.content.role.map((role: string, index: number) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
