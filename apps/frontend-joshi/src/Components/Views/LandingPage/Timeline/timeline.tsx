import "./timeline.scss";
import { IconButton, Tooltip } from "@mui/material";
import InfoButton from "./infoButton";
import { InfoIcon } from "../../../../Assets/SVG/infoIcon";
import { EXPERIENCE_TIMELINE } from "../../../../Configs/Constants/const";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-title">HOW IT ALL STARTED</div>

      {EXPERIENCE_TIMELINE.map((exp) => (
        <div
          className="timeline__event  animated fadeInUp delay-3s timeline__event--type1"
          key={exp.title}
        >
          <div className="timeline__event__icon ">
            <i className="lni-cake">
              <img src={exp.thumbnail} alt="jiji" />
            </i>
          </div>
          <div className="timeline__event__date">{exp.span}</div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">
              {exp.title}
              <Tooltip
                title={
                  <InfoButton content={exp.info} projects={exp.projects} />
                }
                className="info-icon"
              >
                <IconButton>
                  <InfoIcon className="feature-iicon" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="timeline__event__description">
              <p>Projects- {exp.projects}</p>
              <p>Role- {exp.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
