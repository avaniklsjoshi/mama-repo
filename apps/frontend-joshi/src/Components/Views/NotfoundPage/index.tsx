import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./notFound.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../Configs/Constants/const";

export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const docTitleName: any = t("docTitleName", {
    returnObjects: true
  });

  const handleHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  useEffect(() => {
    document.title = docTitleName["notFound"];
  });

  return (
    <div className="page-404">
      <span className="info" />
      <div className="four-zero-four-bg"></div>
      <div className="lost-section">
        <h3>{t("notFoundTitle")}</h3>
        {t("notFoundDesc")}
        <span
          className="link-404"
          onClick={handleHomeClick}
          aria-hidden="true"
          data-testid="home-link"
        >
          {t("home")}
        </span>
      </div>
    </div>
  );
}
