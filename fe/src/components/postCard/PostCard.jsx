import React, { useState } from 'react';
import { Typography, Tooltip, Hidden } from "@mui/material";
import { Card, Col } from 'react-bootstrap';
import Avatar from "@mui/material/Avatar";
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
    
    <Card className='post-card border border-1 border-dark'>
      <Card.Header style={{height:"5rem"}}>
        <Tooltip className="tool-avatar d-flex align-items-baseline bg-white border rounded-pill" title={post.user.username}>
          <Avatar
            alt={post.user.username}
            src={post.user.userAvatar}
            className="post-card__author-avatar border border-2 border-dark"
          />
           <Card.Title className='title mx-3 py-2 fw-bold fst-italic'>{post.title}</Card.Title>
        </Tooltip>
      </Card.Header>
      <Card.Img className='rounded-0' src={post.image}  style={{height:"10rem", overflow:'hidden'}}/>
      <Card.Body className='border border-0'>
        
        <Card.Text>
          {post.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between border border-0'>
        <div className='pe-2'>
           <Typography className="my-1" variant="body2"color={'white'}  >
          {post.date}
        </Typography>
        <Typography color={'white'} variant="body2">
          Da: {post.startingPoint}
        </Typography>
        <Typography variant="body2" color={'white'} >
          A: {post.endingPoint}
        </Typography>

        <Typography className="space-between"  color={'white'}  >
          <FaRoad />: {post.kilometers + "km"} - <RiTimerLine />: {post.travelTime + "ore"}
        </Typography>
        </div>
       
        <div className='d-flex flex-column align-items-end justify-content-between'>
         <Typography className="experience-level px-3 my-2 text-center rounded-pill">
         <em>abilità di guida:{'   '} {post.user.drivingExperienceLevel}</em> 
        </Typography>
        <Typography type="button" className="btn btn-dark" ripple="light" onClick={handleCommentsClick}>Rispondi</Typography>
        </div>
  

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
