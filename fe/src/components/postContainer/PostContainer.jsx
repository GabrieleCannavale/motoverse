import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

import AddPostModal from "../addPostModal/AddPostModal";
import { Col } from "react-bootstrap";
import PostCard from "../postCard/PostCard";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../redux/postSlice";



function PostContainer() {
	const dispatch = useDispatch();
	const { postsArrayRedux } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<>
			<MDBContainer style={{ marginTop: '6rem' }}>
				<AddPostModal />
				<MDBRow>
					{postsArrayRedux && postsArrayRedux.map((post) => (

						<PostCard
							key={nanoid()}
							post={post}
						/>

					))}
				</MDBRow>
			</MDBContainer>
		</>
	);
}

export default PostContainer;