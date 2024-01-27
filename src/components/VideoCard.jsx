import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video;
  // console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 350, height: 180 }}
        />
        <CardContent sx={{ background: "#1e1e1e", height: "70px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="grey">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{ fontSize: 12, color: "grey", ml: "5px" }}
              ></CheckCircle>
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
