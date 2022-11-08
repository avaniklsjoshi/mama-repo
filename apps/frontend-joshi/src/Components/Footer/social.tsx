import { Github } from "../../Assets/SVG/Github";
import { Gitlab } from "../../Assets/SVG/Gitlab";
import { LinkedIn } from "../../Assets/SVG/LinkedIn";
import { Twitter } from "../../Assets/SVG/Twitter";
import { SOCIAL_LINKS } from "../../Configs/Constants/const";
import Share from "../Common/share";
import "./footer.scss";

export default function Social() {
  return (
    <div>
      <a
        href={SOCIAL_LINKS.TWITTER}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Avani"
        className="social-links"
      >
        <Twitter />
      </a>
      <a
        href={SOCIAL_LINKS.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Avani"
        className="social-links"
      >
        <LinkedIn />
      </a>
      <a
        href={SOCIAL_LINKS.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github Avani"
        className="social-links"
      >
        <Github />
      </a>
      <a
        href={SOCIAL_LINKS.GITLAB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="gitlab Avani"
        className="social-links"
      >
        <Gitlab />
      </a>
      <Share />
    </div>
  );
}
