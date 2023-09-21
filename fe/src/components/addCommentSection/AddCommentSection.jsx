import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSession } from '../../middlewares/protectedRoutes'
import { createComment } from "../../redux/commentSlice";

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
  }

  return (
    <section className="vh-100" >
      <Container className="py-5" style={{ maxWidth: "1000px" }}>
        <Row className="justify-content-center">
          <Col md="10" lg="8" xl="6">
            <Card>
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col xs={3}>
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src={session.userAvatar}
                      alt="avatar"
                      width="65"
                      height="65"
                    />
                  </Col>
                  <Col xs={9}>
                    <h5>{session.username}</h5>
					
                    <Form.Group controlId="comment">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What is your view?"
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
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
