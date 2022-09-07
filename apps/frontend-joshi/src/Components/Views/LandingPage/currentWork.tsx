import { useTranslation } from "react-i18next";
import { Link } from "ui";
import "./currentWork.scss";

export default function CurrentWork() {
  const { t } = useTranslation();

  return (
    <div className="current-work">
      {t("currentWorkTitle")}
      <Link href="https://github.com/avaniklsjoshi/mama-repo" target="_blank">
        {t("followHere")}
      </Link>
    </div>
  );
}
