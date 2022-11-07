import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./common.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "ui";
import { LinkContainer } from "./partials";

export default function BackLink() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <LinkContainer>
      <Link className="back-link" onClick={handleBack} data-testid="back-link">
        <ArrowBackIcon />
        {t("back")}
      </Link>
    </LinkContainer>
  );
}
