import "./landingPage.scss";
import { useTranslation } from "react-i18next";
import SubMarine from "./subMarine";

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <div className="intro-container">
      <div className="intro-left">
        <div className="intro-title">{t("AvaniIntroTitle")}</div>
        <div className="intro-desc">{t("AvaniIntroDesc")}</div>
      </div>
      <div className="intro-right">
        <SubMarine />
      </div>
    </div>
  );
}
