import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import './commentStyles.css'

export default function CommentSection({ comment }) {
  console.log(comment)
  return (
    <section className="comment-container">
      <MDBContainer className="py-3 d-flex">
        <MDBRow className="justify-content-center w-100">
          <MDBCol md="12" lg="10" xl="8" className="w-100">
            <MDBCard className="comment-card">
              <MDBCardBody>
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="comment-avatar me-2"
                    src={comment.user[0].userAvatar}
                    alt="avatar"
                    width="40"
                    height="40"
                  />
                  <div className="w-100 comment-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        {comment.user[0].username}
                        <span className="text-dark ms-2">
                          {comment.content}
                        </span>
                      </MDBTypography>
                      <p className="mb-0">2 days ago</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="small mb-0">
                        <a href="#!" className="link-grey">
                          Remove
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Reply
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Translate
                        </a>
                      </p>
                      <div className="comment-icons">
                        <MDBIcon fas icon="star text-warning me-2" />
                        <MDBIcon
                          far
                          icon="check-circle"
                          style={{ color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}