import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSession } from '../../middlewares/protectedRoutes'
import { createComment, getCommentsByPost } from "../../redux/commentSlice";
import '../commentSection/commentStyles.css'

export default function AddCommentSection({ post }) {
  const session = useSession();

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [content, setContent] = useState("");

  const submitComment = (e) => {
    e.preventDefault();

    const commentData = {
      user: session.id,
      content: content,
      match: checked,
      postId: post._id
    }

    dispatch(createComment(commentData));
    setContent(""); // Azzera il contenuto dell'input
    setChecked(false); // Resetta il checkbox
    dispatch(getCommentsByPost(post._id))
  }

  return (
    <section className="comment-container">
      <Container className="py-3">
        <Row className="justify-content-center w-100">
          <Col md="12" lg="10" xl="8" className="w-100">
            <Card className="ms-3 comment-card">

              <Card.Body className="p-2 d-flex flex-column">
                <div className="d-flex align-items-center py-1">
                    <img
                  className="comment-avatar me-2"
                  src={session.userAvatar}
                  alt="avatar"
                /> 
                <h5>{session.username}</h5>
                </div>
              
                <div className="comment-content">
                 
                  <Form.Group controlId="comment">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Lascia un commento"
                    />
                  </Form.Group>
                  <Form.Group controlId="checkbox">
                    <Form.Check
                      type="checkbox"
                      label="Ci sarò!"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  </Form.Group>
                  <Button variant="danger" onClick={submitComment}>
                    Send
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
