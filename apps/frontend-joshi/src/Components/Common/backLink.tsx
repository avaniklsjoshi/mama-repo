import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./common.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "ui";
import { LinkContainer } from "./partials";

export default function BackLink() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <LinkContainer>
      <Link className="back-link" onClick={handleBack}>
        <ArrowBackIcon />
        Back
      </Link>
    </LinkContainer>
  );
}
