import "./timeline.scss";
import { useTranslation } from "react-i18next";

interface InfoButtonProp {
  projects: string;
  content: { tech: string[]; role: string[] };
}

export default function InfoButton(props: InfoButtonProp) {
  const { t } = useTranslation();
  const isProjects = props.projects.split(",").length > 1;
  return (
    <div className="info-container">
      <div className="tech-container">
        <div className="info-title">
          {t("timelineInfoTitle")}{" "}
          {isProjects
            ? t("timelineInfoTitleMulti")
            : t("timelineInfoTitleSingle")}
          -
        </div>
        <ul>
          {props.content.tech.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="role-container">
        <div className="info-title">
          {t("timelineInfoRole")}{" "}
          {isProjects
            ? t("timelineInfoTitleMulti")
            : t("timelineInfoTitleSingle")}
          -
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
