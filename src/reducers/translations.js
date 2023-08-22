import { createSlice } from "@reduxjs/toolkit";

const translationsSlice = createSlice({
  name: "translations",
  initialState: {
    translations: {}
  },

  reducers: {
    setTranslations(state, action) {
      state.translations = action.payload;
    },
  },
});

export const translationsActions = translationsSlice.actions;
export default translationsSlice.reducer;
