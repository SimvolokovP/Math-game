import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";


type UserState = {
  user: IUser;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: { id: 0, name: "", score: 0 }, 
  isLoading: false,
  error: null,
};

// export const fetchUserScore = createAsyncThunk<IUser, { userId: number }>(
//   "user/fetchUserScore",
//   async ({ userId }) => {
//     const userDoc = await firebaseDB
//       .collection("users")
//       .doc(userId.toString())
//       .get();
//     if (userDoc.exists) {
//       return { id: userDoc.id, ...userDoc.data() } as IUser; 
//     }
//     return { id: userId, name: "Test", score: 0 };
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getTgUser: (state, action) => {
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUserScore.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchUserScore.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.user.score = action.payload.score; 
  //     })
  //     .addCase(fetchUserScore.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message || "Failed to fetch user score";
  //     });
  // },
});

export const { getTgUser } = userSlice.actions;

export default userSlice.reducer;
