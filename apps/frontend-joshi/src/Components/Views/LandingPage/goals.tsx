import "./goals.scss";
import { useTranslation } from "react-i18next";
import * as SC from "./partials";

export default function Goals() {
  const { t } = useTranslation();
  const goals: string[] = t("goals", { returnObjects: true });

  return (
    <div className="goals-container">
      <SC.SkillsTitle className="goals-title">
        {t("myInterests")}
      </SC.SkillsTitle>

      <ul>
        {goals.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
