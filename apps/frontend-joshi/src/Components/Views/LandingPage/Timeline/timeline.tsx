import { IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import "./timeline.scss";
import { useTranslation } from "react-i18next";
import InfoButton from "./infoButton";
import { InfoIcon } from "../../../../Assets/SVG/infoIcon";
import { LANGUAGE_NAMES_KEY } from "../../../../Configs/Constants/const";
import {
  EXPERIENCE_TIMELINE_de,
  EXPERIENCE_TIMELINE_en,
  EXPERIENCE_TIMELINE_hn
} from "../../../../Configs/Constants/constWithTranslation";
import { ISingleExperience } from "../../../../Configs/Constants/types";
import * as SC from "../partials";

export default function Timeline() {
  const { i18n, t } = useTranslation();
  const [activeTimeline, setActiveTimeline] = useState(EXPERIENCE_TIMELINE_en);

  useEffect(() => {
    if (i18n.language == LANGUAGE_NAMES_KEY.ENGLISH) {
      setActiveTimeline(() => EXPERIENCE_TIMELINE_en);
    } else if (i18n.language == LANGUAGE_NAMES_KEY.GERMAN) {
      setActiveTimeline(() => EXPERIENCE_TIMELINE_de);
    } else {
      setActiveTimeline(() => EXPERIENCE_TIMELINE_hn);
    }
  }, [i18n.language]);

  return (
    <div className="timeline">
      <SC.SkillsTitle className="timeline-title">
        {t("timelineTitle")}
      </SC.SkillsTitle>
      {activeTimeline &&
        activeTimeline.map((exp: ISingleExperience) => (
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
                <p>
                  {t("projects")}- {exp.projects}
                </p>
                <p>
                  {t("role")}- {exp.role}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
