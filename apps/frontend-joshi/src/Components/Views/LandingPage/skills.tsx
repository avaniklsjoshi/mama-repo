import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="container">
        <div className="col">
          <h4 className="titulo">Tech Stack</h4>
          <ul className="skill">
            <li>
              <span className="blueline html"></span>
              <em>HTML</em>
            </li>
            <li>
              <span className="blueline css"></span>
              <em>CSS</em>
            </li>
            <li>
              <span className="blueline php"></span>
              <em>PHP</em>
            </li>
            <li>
              <span className="blueline javascript"></span>
              <em>Javascript</em>
            </li>
            <li>
              <span className="blueline jquery"></span>
              <em>jQuery</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4 className="plataformas titulo">Supporting</h4>
          <ul className="skill">
            <li>
              <span className="greenline wordpress"></span>
              <em>Wordpress</em>
            </li>
            <li>
              <span className="greenline prestashop"></span>
              <em>Prestashop</em>
            </li>
            <li>
              <span className="greenline joomla"></span>
              <em>Joomla</em>
            </li>
            <li>
              <span className="greenline blogger"></span>
              <em>Blogger</em>
            </li>
            <li>
              <span className="greenline tridion"></span>
              <em>Tridion</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4 className="programas titulo">Tools</h4>
          <ul className="skill">
            <li>
              <span className="redline dreamweaver"></span>
              <em>Dreamweaver</em>
            </li>
            <li>
              <span className="redline illustrator"></span>
              <em>Illustrator</em>
            </li>
            <li>
              <span className="redline photoshop"></span>
              <em>Photoshop</em>
            </li>
            <li>
              <span className="redline premiere"></span>
              <em>Premiere</em>
            </li>
            <li>
              <span className="redline flash"></span>
              <em>Flash</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
