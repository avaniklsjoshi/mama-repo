import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./feature.scss";
import { Outlet } from "react-router-dom";
import Cards from "./cards";

export default function FeaturesPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("docTitleNameFeatures");
  });

  return (
    <div className="feature-container">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {/* <div className="feature-title">{t("featuresRoute")}</div> */}
      <Cards />
      <Outlet />
    </div>
  );
}
