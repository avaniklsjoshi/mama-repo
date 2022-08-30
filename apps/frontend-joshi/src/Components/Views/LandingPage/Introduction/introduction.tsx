import "./landingPage.scss";
import SubMarine from "./subMarine";

export default function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <div className="intro-title">
          Hi, I am Avani. A Frontend Enthusiast.
        </div>
        <div className="intro-desc">
          I am an experienced Javascript Developer and I love to make
          interactive end-to-end projects.
        </div>
      </div>
      <div className="intro-right">
        <SubMarine />
      </div>
    </div>
  );
}
