import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

import AddPostModal from "../addPostModal/AddPostModal";
import { Col, Row, Form, Button } from "react-bootstrap";
import PostCard from "../postCard/PostCard";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts, filterPosts } from "../../redux/postSlice";



function PostContainer() {
	const dispatch = useDispatch();
	const { postsArrayRedux } = useSelector((state) => state.posts)

	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		const { value } = e.target;
		if (value === "") {
			dispatch(getPosts())
		}
		setSearchTerm(value)
	};

	const filteredResult = (e) => {
		e.preventDefault();
		dispatch(filterPosts(searchTerm))
	}

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<>
			<MDBContainer style={{ marginTop: '6rem' }}>
				<Row className="align-items-center justify content-evenly">
					<Col md={4}>
						<AddPostModal />
					</Col>
					<Col md={8}>
						<Form className="my-1" onSubmit={filteredResult}>
							<Form.Control
								type="search"
								placeholder="cerca post per provincia"
								className="me-2"
								aria-label="Search"
								onChange={handleSearch}
							/>
						</Form>
					</Col>
				</Row>
				<Row className='g-4 no-gutters mt-2 row-cols-2'>
					{postsArrayRedux && postsArrayRedux.map((post) => (
						<Col key={nanoid()} md={6} className="mb-4">
							<PostCard post={post} />
						</Col>
					))}
				</Row>
			</MDBContainer>
		</>
	);
}

export default PostContainer;