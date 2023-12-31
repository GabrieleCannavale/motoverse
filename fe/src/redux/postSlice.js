import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import axios from 'axios'

const endpoint = "http://localhost:5070"

const initialState = {
	postsArrayRedux: [],
	status: "idle",
	singlePost: {}
}

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		filterPosts: (state, action) => {
			state.postsArrayRedux = state.postsArrayRedux.filter((post) => {
				return post.province.toLowerCase().includes(action.payload.toLowerCase());
			})
		}
	},
	extraReducers: (builder) => {
		builder
			//*GET CASES
			.addCase(getPosts.fulfilled, (state, action) => {
				state.postsArrayRedux = action.payload;
			})
	}
});

export const { filterPosts } = postSlice.actions;	
export default postSlice.reducer


//!POST POST
export const postPost = createAsyncThunk(
	"post/POST",
	async (postPayload, {dispatch}) => {
		
		const form = new FormData();
		form.append("title", postPayload.title);
		form.append("startingPoint", postPayload.startingPoint);
		form.append("endingPoint", postPayload.endingPoint);
		form.append("province", postPayload.province);
		form.append("image", postPayload.image);
		form.append("content", postPayload.content);
		form.append("kilometers", postPayload.kilometers);
		form.append("travelTime", postPayload.travelTime);
		form.append("user", postPayload.user);
		form.append("date", postPayload.date)

		try {
			const res = await axios.post(`${process.env.REACT_APP_SERVERBASE_URL}/posts/create`, form, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			}).then(() => dispatch(getPosts()))
			console.log(res.data);
			return res.data;
		} catch (error) {
			console.log(error);
			toast.error('Something gone wrong, try later', {
				position: "top-center",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				});
		}
	}
);

//! GET POSTS	
export const getPosts = createAsyncThunk(
	'post/GET',
	async () => {
		try {
			const res = await axios.get(`${process.env.REACT_APP_SERVERBASE_URL}/posts`);
			if (!res.ok) {
				console.log(`HTTP error! status: ${res.status}`);
			};
			console.log(res.data);
			return res.data.posts;
		} catch (error) {
			console.error(error);
		}
	}
);

//! GET SINGLE POST BY ID
export const getPostById = createAsyncThunk(
	"posts/SinglePost",
	async (id) => {
		try {
			const res = await axios.get(`${process.env.REACT_APP_SERVERBASE_URL}/posts/${id}`);
			console.log(res.data)
			return res.data
		} catch (error) {
			console.log(error)
		}
	}
)