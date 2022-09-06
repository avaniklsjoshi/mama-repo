import "./timeline.scss";

export default function InfoButton(props: any) {
  return (
    <div className="info-container">
      <div className="tech-container">
        <div className="info-title">Tech Stacks used in these projects-</div>
        <ul>
          {props.content.tech.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="role-container">
        <div className="info-title">My Role in these projects-</div>
        <ul>
          {props.content.role.map((role: string, index: number) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
