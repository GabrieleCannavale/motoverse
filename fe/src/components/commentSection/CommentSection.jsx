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

export default function CommentSection({comment}) {
	return (
		<section style={{ backgroundColor: "#f7f6f6" }}>
			<MDBContainer className="py-5 text-dark" style={{ maxWidth: "1000px" }}>
				<MDBRow className="justify-content-center">
					<MDBCol md="12" lg="10" xl="8">
						<MDBCard className="mb-3">
							<MDBCardBody>
								<div className="d-flex flex-start">
									<MDBCardImage
										className="rounded-circle shadow-1-strong me-3"
										src={comment.user.userAvatar}
										alt="avatar"
										width="40"
										height="40"
									/>

									<div className="w-100">
										<div className="d-flex justify-content-between align-items-center mb-3">
											<MDBTypography
												tag="h6"
												className="text-primary fw-bold mb-0"
											>
												{comment.user.username}
												<span className="text-dark ms-2">
													{comment.content}
												</span>
											</MDBTypography>
											<p className="mb-0">2 days ago</p>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<p className="small mb-0" style={{ color: "#aaa" }}>
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
											<div className="d-flex flex-row">
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