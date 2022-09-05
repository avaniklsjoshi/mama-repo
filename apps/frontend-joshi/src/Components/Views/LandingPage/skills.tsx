import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-title">SKILLS</div>
      <div className="container">
        <div className="col">
          <h1 className="titulo">Tech Stack</h1>
          <ul className="skill">
            <li>
              <span className="blueline javascript"></span>
              <em>Javascript</em>
            </li>
            <li>
              <span className="blueline reactJS"></span>
              <em>React JS</em>
            </li>
            <li>
              <span className="blueline nodeJS"></span>
              <em>NodeJS</em>
            </li>
            <li>
              <span className="blueline html"></span>
              <em>HTML</em>
            </li>
            <li>
              <span className="blueline cssScss"></span>
              <em>CSS & Scss</em>
            </li>
            <li>
              <span className="blueline mongoDB"></span>
              <em>MongoDB</em>
            </li>
            <li>
              <span className="blueline docker"></span>
              <em>Docker</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h1 className="supporting titulo">Supporting</h1>
          <ul className="skill">
            <li>
              <span className="greenline typescript"></span>
              <em>Typescript</em>
            </li>
            <li>
              <span className="greenline reduxSaga"></span>
              <em>Redux, Saga</em>
            </li>
            <li>
              <span className="greenline styledComponents"></span>
              <em>Styled Components</em>
            </li>
            <li>
              <span className="greenline webpackVite"></span>
              <em>Webpack, Vite</em>
            </li>
            <li>
              <span className="greenline estsLint"></span>
              <em>EsLint, TsLint</em>
            </li>
            <li>
              <span className="greenline expressJS"></span>
              <em>Express JS</em>
            </li>
            <li>
              <span className="greenline jestTesting"></span>
              <em>Unit Testing</em>
            </li>
            <li>
              <span className="greenline storybook"></span>
              <em>StoryBook</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h1 className="tools titulo">Tools</h1>
          <ul className="skill">
            <li>
              <span className="redline vscode"></span>
              <em>Visual Studio code</em>
            </li>
            <li>
              <span className="redline compass"></span>
              <em>MongoDB Compass</em>
            </li>
            <li>
              <span className="redline sourcetree"></span>
              <em>Source Tree</em>
            </li>
            <li>
              <span className="redline postman"></span>
              <em>Postman</em>
            </li>
            <li>
              <span className="redline herokuMlab"></span>
              <em>Heroku, MLab</em>
            </li>
            <li>
              <span className="redline xcode"></span>
              <em>XCode</em>
            </li>
            <li>
              <span className="redline browsers"></span>
              <em>Browsers</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
