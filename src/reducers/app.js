import { createSlice } from "@reduxjs/toolkit";
import { appInfo } from "../constants/globals";

const appSlice = createSlice({
  name: "app",
  initialState: {
    appName: appInfo.DEFAULT_NAME,
    appVersion: appInfo.DEFAULT_VERSION,
    appLocale: appInfo.DEFAULT_LOCALE,
    appTheme: appInfo.DEFAULT_THEME,

    loading: false,
    error: undefined,
  },

  reducers: {
    fetchTheme(state, action) {
      state.theme = action.payload;
      state.loading = false;
    },
    fetchAppInfo(state, action) {
      state.appName = action.payload.appName;
      state.appVersion = action.payload.appVersion;
      state.appLocale = action.payload.appLocale;
      state.appTheme = action.payload.appTheme;

      sessionStorage.setItem("appName", action.payload.appName);
      sessionStorage.setItem("appVersion", action.payload.appVersion);
      sessionStorage.setItem("appLocale", action.payload.appLocale);
      sessionStorage.setItem("appTheme", action.payload.appTheme);

      state.loading = false;
    },

    actionStart(state) {
      state.loading = true;
      state.error = undefined;
    },
    actionError(state, action) {
      state.error = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
