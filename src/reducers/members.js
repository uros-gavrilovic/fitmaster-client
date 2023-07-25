import { createSlice } from "@reduxjs/toolkit";
import { contains } from "../utils/utilFunctions";

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    membersDTO: [],
    allMembersDTO: [],
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
      state.allMembersDTO = state.membersDTO;
      state.error = undefined;
    },
    searchMembersDTO(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.membersDTO = state.allMembersDTO.filter((member) =>
        (member.firstName + " " + member.lastName)
          .toLowerCase()
          .includes(searchTerm)
      );
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
      state.membersDTO.splice(
        state.membersDTO.findIndex(
          (member) => member.memberID === action.payload
        )
      );
      state.error = undefined;
    },
    updateMember(state, action) {
      state.membersDTO = state.membersDTO?.map((member) =>
        member.memberID === action.payload.memberID ? action.payload : member
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
