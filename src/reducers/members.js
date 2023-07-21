import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    membersDTO: [],
    member: undefined,
    error: undefined,
  },

  reducers: {
    fetchMembers(state, action) {
      state.members = action.payload;
      state.error = undefined;
    },
    fetchMembersDTO(state, action) {
      state.membersDTO = action.payload;
      state.error = undefined;
    },
    fetchMember(state, action) {
      state.member = action.payload;
      state.error = undefined;
    },
    addMember(state, action) {
      state.members = [action.payload].concat(state.members);
      state.error = undefined;
    },
    deleteMember(state, action) {
      state.members.splice(
        state.members.findIndex((member) => member.id === action.payload)
      );
      state.error = undefined;
    },
    updateMember(state, action) {
      state.members = state.members?.map((member) =>
        member.id === action.payload.id ? action.payload : member
      );
      state.error = undefined;
    },

    actionStart(state) {
      state.error = undefined;
    },
    actionError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = undefined;
    },
  },
});

export const membersActions = membersSlice.actions;
export default membersSlice.reducer;
