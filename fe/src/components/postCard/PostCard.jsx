import { Card, CardContent, CardMedia, Typography, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { MDBBtn } from 'mdb-react-ui-kit';

import { useEffect, useState } from "react";

import { FaRoad } from 'react-icons/fa'
import { RiTimerLine } from 'react-icons/ri'

import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import "./postCard.css";
import CommentSection from "../commentSection/CommentSection";
import AddCommentSection from "../addCommentSection/AddCommentSection";
import { getCommentsByPost } from "../../redux/commentSlice";


const PostCard = ({ post }) => {

  const dispatch = useDispatch();


  const { commentsArrayByPost } = useSelector((state) => state.comments)
  

  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleCommentsClick = () => {
    setIsCommentsOpen(prevState => !prevState);
  
  dispatch(getCommentsByPost(post._id))
  console.log(post._id)
  };

  return (
    <>
      <Card className="my-2 post-card d-flex ">
        <CardMedia
          className="post-card__image"
          image={post.image}
          title="Immagine del punto di partenza">

          <Tooltip className="tool-avatar" title={post.user.username}>
            <Avatar
              src={post.user.userAvatar}
              className="post-card__author-avatar"
            />

          </Tooltip>
        </CardMedia>

        <CardContent>
          <Typography variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>


        <CardContent className="post-card__content info__content bg-warning">
          <Typography className="my-1" variant="body2" color="text.secondary">
            {post.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Da: {post.startingPoint}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A: {post.endingPoint}
          </Typography>

          <Typography className="space-between" variant="body2" color="text.secondary">
            <FaRoad />: {post.kilometers + "km"} - <RiTimerLine />: {post.travelTime + "ore"}
          </Typography>
          <Typography className="experience-level p-1 my-2 mx-0 px-0">
            {post.user.drivingExperienceLevel}
          </Typography>
          <MDBBtn type="button" class="btn btn-light" data-mdb-ripple-color="dark" onClick={handleCommentsClick}>Comments</MDBBtn>
        </CardContent>
      </Card>
      {isCommentsOpen && (
        <div>
          <h2>Comments</h2>
          <AddCommentSection post={post} />
        </div>
      )}
      {isCommentsOpen && commentsArrayByPost && commentsArrayByPost.map((comment) => (

            <CommentSection 
              key={nanoid()}
              comment = {comment}
            />
          ))}
    </>
  );
};

export default PostCard;