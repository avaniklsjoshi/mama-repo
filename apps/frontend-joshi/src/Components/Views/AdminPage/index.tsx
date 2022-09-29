import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./admin.scss";

export default function NotFoundPage() {
  const { t } = useTranslation();
  const docTitleName: any = t("docTitleName", {
    returnObjects: true
  });

  useEffect(() => {
    document.title = docTitleName["admin"];
  });

  return <div className="admin">Joshi</div>;
}
