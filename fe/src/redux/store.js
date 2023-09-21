import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
import userSlice from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		users: userSlice,
		posts: postSlice,
		comments: commentSlice
	}
})

export default store;