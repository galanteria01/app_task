import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import User from "../../interfaces/User";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    first_name: "Shoury",
    last_name: "Sharma",
    email: "shanuu12e@gmail.com",
    avatar: "https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/60a7fc98c2fa8d4e87b46687_1.png"
  } as User,
  reducers: {
    addUser(state: User, action: PayloadAction<User>) {
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.avatar = action.payload.avatar;
    },
    removeUser(state: User) {
      state = {} as User;
    }
  }
})

export const { addUser, removeUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer