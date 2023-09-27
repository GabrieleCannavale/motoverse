import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const endpoint = "http://localhost:5070"

const initialState = {
  usersArrayRedux: [],
  singleUser: {},
  status: 'idle'
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMotoToUserProfileAsync.fulfilled, (state, action) => {
        state.singleUser = action.payload
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.singleUser = action.payload
      })
  }
});

export default userSlice.reducer;

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

    try {
      const res = await axios.post(`${endpoint}/register`, form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error)
      toast.error('Register error!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
);

export const addMotoToUserProfileAsync = createAsyncThunk(
	"user/addMoto",
	async ({ user, userId }) => { // Modifica qui, passando un oggetto con user e userId
	  try {
		const formData = new FormData();
		formData.append("brand", user.brand);
		formData.append("model", user.model);
		formData.append("motoImage", user.motoImage);
  
		const res = await axios.patch(`${endpoint}/users/${userId}/addmoto`, formData, {
		  headers: {
			"Content-Type": "multipart/form-data"
		  }
		});
  
		return res.data;
	  } catch (error) {
		console.log(error);
		toast.error('Errore durante l\'aggiunta della moto!', {
		});
		throw error;
	  }
	}
  );
  
  
  export const getSingleUser = createAsyncThunk(
    'users/getSingleUserById',
    async (userId) => {
      const res = await axios.get(`${endpoint}/users/${userId}`);
      console.log(res.data)
      return res.data.userById;
    }
  );

  
