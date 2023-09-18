import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import "./postCard.css";

const PostCard = ({ post }) => {
  return (
    <Card className="post-card">
      <CardMedia
        className="post-card__image no-border"
        image={post.image}
        title="Immagine del punto di partenza"
      />
      <CardContent className="post-card__content">
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Da: {post.startingPoint} - A: {post.endingPoint}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Km: {post.kilometers} - Tempo di percorrenza: {post.travelTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
