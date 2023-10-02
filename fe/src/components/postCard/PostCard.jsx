import React, { useState } from 'react';
import { Typography, Tooltip, Hidden } from "@mui/material";
import { Card, Col } from 'react-bootstrap';
import Avatar from "@mui/material/Avatar";
import { MDBBtn } from 'mdb-react-ui-kit';
import { FaRoad } from 'react-icons/fa';
import { RiTimerLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import CommentSection from "../commentSection/CommentSection";
import AddCommentSection from "../addCommentSection/AddCommentSection";
import { getCommentsByPost } from "../../redux/commentSlice";
import './postCard.css'

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { commentsArrayByPost } = useSelector((state) => state.comments);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleCommentsClick = () => {
    setIsCommentsOpen(prevState => !prevState);
    dispatch(getCommentsByPost(post._id));

  };

  return (
    
    <Card className='post-card' style={{backgroundColor:'#FFE6C7'}}>
      <Card.Header style={{height:"5rem"}}>
        <Tooltip className="tool-avatar d-flex align-items-baseline" title={post.user.username}>
          <Avatar
            alt={post.user.username}
            src={post.user.userAvatar}
            className="post-card__author-avatar"
          />
           <Card.Title className='mx-3'>{post.title}</Card.Title>
        </Tooltip>
      </Card.Header>
      <Card.Img variant="top" src={post.image}  style={{height:"10rem", overflow:'hidden'}}/>
      <Card.Body style={{height:'13rem'}} >
        
        <Card.Text>
          {post.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
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
        <Typography className="experience-level p-1 my-2 mx-0 px-0 text-center">
          abilità di guida:{'   '} {post.user.drivingExperienceLevel}
        </Typography>
        <Typography type="button" className="btn btn-light" ripple="dark" onClick={handleCommentsClick}>Comments</Typography>

      </Card.Footer>
      {isCommentsOpen && (
        <div>
          <AddCommentSection post={post} />
        </div>
      )}

      {isCommentsOpen && commentsArrayByPost && commentsArrayByPost.map((comment) => (
        <CommentSection
          key={nanoid()}
          comment={comment}
        />
      ))}
    </Card>

  );
};

export default PostCard;
