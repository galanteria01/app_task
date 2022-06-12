import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import User from "../../interfaces/User";

export const usersSlice = createSlice({
  name: "users",
  initialState: [] as User[],
  reducers: {
    addUsers(state: User[], action: PayloadAction<User[]>) {
      state.push(...action.payload);
    },
    removeUsers(state: User[]) {
      state = [];
    }
  }
})

export const { addUsers, removeUsers } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer