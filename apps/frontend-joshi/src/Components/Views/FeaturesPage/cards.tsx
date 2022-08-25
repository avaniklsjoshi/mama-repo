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
import { useNavigate } from "react-router-dom";
import { InfoIcon } from "../../../Assets/SVG/infoIcon";
import { CARDS_LIST } from "../../../Configs/Constants/const";

export default function Cards() {
  const navigate = useNavigate();

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
            sx={{ width: 400 }}
            onClick={(e) => handleCard(e, card.path)}
            id={card.path}
          >
            <CardHeader
              title={card.title}
              action={
                <Tooltip title={card.information} onClick={handleInfo}>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardMedia
              component="img"
              height="346"
              image={card.thumbnail}
              alt={card.description}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description}
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
