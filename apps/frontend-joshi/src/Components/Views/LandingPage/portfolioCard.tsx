import "./portfolioCard.scss";
import { useTranslation } from "react-i18next";
import Social from "../../Footer/social";

export default function PortfolioCard() {
  const { t } = useTranslation();

  return (
    <div className="portfolio-container">
      <div className="card card">
        <div className="border">
          <div className="card-name">{t("fullName")}</div>
          <div className="icons">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
