import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    membersDTO: [],
    error: undefined,
  },

  reducers: {
    fetchMembers(state, action) {
      state.members = action.payload;
      state.error = undefined;
    },
    fetchDTOMembers(state, action) {
      state.membersDTO = action.payload;
      state.error = undefined;
    },
    addMember(state, action) {
      state.members = [action.payload].concat(state.members);
      state.error = undefined;
    },
    deleteMember(state, action) {
      state.members.splice(
        state.books.findIndex((member) => member.id === action.payload)
      );
      state.error = undefined;
    },
    updateMember(state, action) {
      state.members = state.members?.map((member) =>
        member.id === action.payload.id ? action.payload : member
      );
      state.error = undefined;
    },

    actionError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearError(state) {
      state.error = undefined;
    },
  },
});

export const membersActions = membersSlice.actions;
export default membersSlice.reducer;