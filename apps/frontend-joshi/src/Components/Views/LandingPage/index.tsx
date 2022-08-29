import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Goals from "./goals";
import Introduction from "./introduction";
import PortfolioCard from "./portfolioCard";
import Skills from "./skills";
import Timeline from "./timeline";

export default function LandingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("docTitleNameHome");
  });
  return (
    <div>
      <Introduction />
      <Timeline />
      <Skills />
      <Goals />
      <PortfolioCard />
    </div>
  );
}
