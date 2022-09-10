import "./goals.scss";
import { useTranslation } from "react-i18next";

export default function Goals() {
  const { t } = useTranslation();
  const goals: string[] = t("goals", { returnObjects: true });

  return (
    <div className="goals-container">
      <h2>{t("myInterests")}</h2>
      <ul>
        {goals.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
