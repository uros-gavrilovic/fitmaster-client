import { createSlice } from "@reduxjs/toolkit";

const packageSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
    packagesDTO: [],
    allPackagesDTO: [],
    package: undefined,
    error: undefined,
  },

  reducers: {
    fetchPackages(state, action) {
      state.packages = action.payload;
      state.error = undefined;
    },
    fetchPackagesDTO(state, action) {
      state.packagesDTO = action.payload;
      state.allPackagesDTO = state.packagesDTO;
      state.error = undefined;
    },
    fetchPackage(state, action) {
      state.package = action.payload;
      state.error = undefined;
    },
    addPackage(state, action) {
      state.packages = [action.payload].concat(state.packages);
      state.error = undefined;
    },
    deletePackage(state, action) {
      state.packagesDTO.splice(
        state.packagesDTO.findIndex((pack) => pack.packageID === action.payload)
      );
      state.error = undefined;
    },
    updatePackage(state, action) {
      state.packages = state.packages?.map((pack) =>
        pack.id === action.payload.id ? action.payload : pack
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

export const packagesActions = packageSlice.actions;
export default packageSlice.reducer;
