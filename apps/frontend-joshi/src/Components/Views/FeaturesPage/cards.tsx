import "./feature.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { InfoIcon } from "../../../Assets/SVG/infoIcon";
import { CARDS_LIST } from "../../../Configs/Constants/const";

export default function Cards() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLike = (e: any) => {
    e.stopPropagation();
    console.log("like clicked");
  };
  const handleShare = (e: any) => {
    e.stopPropagation();
    console.log("share clicked");
  };
  const handleInfo = (e: any) => {
    e.stopPropagation();
    console.log("info clicked");
  };
  const handleCard = (e: any, path: string) => {
    navigate(path);
    console.log("card clicked", e.target.id);
  };

  return (
    <div className="feature-cards-conatainer">
      {CARDS_LIST.map((card) => (
        <div className="feature-card" key={card.path}>
          <Card
            className="feature-card"
            sx={{ width: 400 }}
            onClick={(e) => handleCard(e, card.path)}
            id={card.path}
          >
            <CardHeader
              className="feature-cardheader"
              title={t(card.title)}
              action={
                <Tooltip title={t(card.information)} onClick={handleInfo}>
                  <IconButton>
                    <InfoIcon className="feature-iicon" />
                  </IconButton>
                </Tooltip>
              }
            />
            <div className="card-image">
              <CardMedia
                component="img"
                height="346"
                image={card.thumbnail}
                alt={t(card.description)}
              />
            </div>
            <CardContent className="card-desc">
              <Typography variant="body2" color="text.secondary">
                {t(card.description)}
              </Typography>
            </CardContent>
            <div className="like-share-container">
              <IconButton aria-label="add to favorites" onClick={handleLike}>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share" onClick={handleShare}>
                <ShareIcon />
              </IconButton>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
