import "./landingPage.scss";
import { useTranslation } from "react-i18next";
import SubMarine from "./subMarine";
import * as SC from "../partials";

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <div className="intro-container">
      <div className="intro-left">
        <SC.IntroTitle className="intro-title">
          {t("AvaniIntroTitle")}
        </SC.IntroTitle>

        <div className="intro-desc">{t("AvaniIntroDesc")}</div>
      </div>
      <div className="intro-right">
        <SubMarine />
      </div>
    </div>
  );
}
