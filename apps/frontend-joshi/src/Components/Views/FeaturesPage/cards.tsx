import "./feature.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
import Share from "../../Common/share";
export interface ICards {
  cardsList?: {
    path: string;
    title: string;
    description: string;
    thumbnail: string;
    information: string;
  }[];
}

export default function Cards({ cardsList = CARDS_LIST }: ICards) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLike = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };
  const handleInfo = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };
  const handleCard = (e: React.SyntheticEvent, path: string) => {
    navigate(path);
  };

  return (
    <div className="feature-cards-conatainer">
      {cardsList.map((card) => (
        <div className="feature-card" key={card.path}>
          <Card
            className="feature-card-mui"
            sx={{ width: 400 }}
            onClick={(e) => handleCard(e, card.path)}
            data-testid="feature-card-mui"
            id={card.path}
          >
            <CardHeader
              className="feature-cardheader"
              title={t(card.title)}
              action={
                <Tooltip
                  title={t(card.information)}
                  onClick={handleInfo}
                  data-testid="info-card-mui"
                >
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
              <IconButton
                aria-label="add to favorites"
                onClick={handleLike}
                data-testid="feature-card-like-mui"
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton
                aria-label="share"
                data-testid="feature-card-share-mui"
              >
                <Share />
              </IconButton>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
