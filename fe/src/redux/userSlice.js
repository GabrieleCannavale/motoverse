import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const endpoint = "http://localhost:5070"

const initialState = {
	usersArrayRedux: [],
	status: 'idle'
};

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		
		
	}
});

export default userSlice.reducer;

//! ADD NEW USER(post)

export const userPost = createAsyncThunk(
	"user/register",

	async (user) => {
		const form = new FormData()

		form.append("username", user.username);
		form.append("fullName", user.fullName);
		form.append("email", user.email);
		form.append("password", user.password);
		form.append("drivingExperienceLevel", user.drivingExperienceLevel);
		form.append("birthDate", user.birthDate);
		form.append("userAvatar", user.userAvatar);

		try{
			const res = await axios.post(`${endpoint}/register`, form, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			})
			console.log(res.data);
			return res.data;

		} catch(error) {
			console.log(error)
		}
	}
)