import postSlice from "./postSlice";
import userSlice from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		users: userSlice,
		posts: postSlice
	}
})

export default store;