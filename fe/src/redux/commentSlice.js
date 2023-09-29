import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const endpoint = "http://localhost:5070"

const initialState = {
	commentsArrayByPost: [],
	status: "idle",
	singleComment: {}
}

const commentSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCommentsByPost.fulfilled, (state, action) => {
				state.commentsArrayByPost = action.payload;
			})
	}
});

export default commentSlice.reducer;


export const getCommentsByPost = createAsyncThunk(
	'comments/getCommentsByPost',
	async (postId) => {
		const res = await axios.get(`${process.env.REACT_APP_SERVERBASE_URL}/comments/post/${postId}`);
		console.log(res.data.comments)
		return res.data.comments;
	}
);

export const createComment = createAsyncThunk(
	'comments/createComment',
	async (newComment) => {
		const form = new FormData();
		form.append("user", newComment.user);
		form.append("content", newComment.content);
		form.append("match", newComment.match);
		form.append("postId", newComment.postId);
		const res = await axios.post(`${process.env.REACT_APP_SERVERBASE_URL}/comments/create`, newComment);
		console.log(res.data);
		return res.data.payload
	}
)