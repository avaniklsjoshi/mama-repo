import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CurrentWork from "./currentWork";
import Goals from "./goals";
import DividingLine from "./Introduction/dividingLine";
import Introduction from "./Introduction/introduction";
import PortfolioCard from "./portfolioCard";
import Skills from "./skills";
import Timeline from "./Timeline/timeline";

export default function LandingPage() {
  const { t } = useTranslation();
  const docTitleName: any = t("docTitleName", {
    returnObjects: true
  });

  useEffect(() => {
    document.title = docTitleName["home"];
  });
  return (
    <>
      <Introduction />
      <DividingLine />
      <Timeline />
      <Skills />
      <Goals />
      <CurrentWork />
      <PortfolioCard />
    </>
  );
}
