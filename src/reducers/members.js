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
    loading: false,
    memberLoading: false, // Used for fetch requests to avoid table loading
  },

  reducers: {
    fetchMembers(state, action) {
      state.members = action.payload;

      state.error = undefined;
      state.loading = false;
    },
    fetchMembersDTO(state, action) {
      state.membersDTO = action.payload;
      state.allMembersDTO = state.membersDTO;

      state.error = undefined;
      state.loading = false;
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
      state.memberLoading = false;
    },
    addMember(state, action) {
      state.members = [action.payload].concat(state.members);

      state.error = undefined;
      state.loading = false;
    },
    deleteMember(state, action) {
      state.membersDTO = state.membersDTO.filter(
        (pack) => pack.memberID !== action.payload
      );

      state.error = undefined;
      state.loading = false;
    },
    updateMember(state, action) {
      state.membersDTO = state.membersDTO?.map((member) =>
        member.memberID === action.payload.memberID ? action.payload : member
      );

      state.error = undefined;
      state.loading = false;
    },

    actionStart(state, action) {
      state.error = undefined;

      if (action.payload === true) {
        state.memberLoading = true;
      } else {
        state.loading = true;
      }
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
