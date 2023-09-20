import "./styles/center.css";
import "./styles/container.css";
import "./styles/text.css";
import AuthContext from "./utils/security/AuthContext";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import SecuredRoute from "./utils/security/SecuredRoute";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import Menu from "./components/menu/Menu";
import Dashboard from "./components/app/dashboard/Dashboard";
import AddMembers from "./components/app/add-members/AddMembers";
import Members from "./components/app/members/Members";
import Packages from "./components/app/packages/Packages";
import Planner from "./components/app/planner/Planner";
import Exercises from "./components/app/exercises/Exercises";
import Trainers from "./components/app/trainers/Trainers";
import Settings from "./components/app/settings/Settings";
import WorkoutPlans from "./components/app/workout-plans/WorkoutPlans";
import { useEffect } from "react";
import { fetchAppInfo } from "./actions/app";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppInfo());
  }, []);

  const { appTheme } = useSelector((state) => state.appReducer);

  return (
    <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
      <AuthContext.Provider value={{ user: null, validToken: true }}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={<SecuredRoute component={Menu} display={<Dashboard />} />}
          />
          <Route
            exact
            path="/add-members"
            element={<SecuredRoute component={Menu} display={<AddMembers />} />}
          />
          <Route
            exact
            path="/members"
            element={<SecuredRoute component={Menu} display={<Members />} />}
          />
          <Route
            exact
            path="/workout-plans"
            element={
              <SecuredRoute component={Menu} display={<WorkoutPlans />} />
            }
          />
          <Route
            exact
            path="/packages"
            element={<SecuredRoute component={Menu} display={<Packages />} />}
          />
          <Route
            exact
            path="/planner"
            element={<SecuredRoute component={Menu} display={<Planner />} />}
          />
          <Route
            exact
            path="/exercises"
            element={<SecuredRoute component={Menu} display={<Exercises />} />}
          />
          <Route
            exact
            path="/trainers"
            element={<SecuredRoute component={Menu} display={<Trainers />} />}
          />
          <Route
            exact
            path="/settings"
            element={<SecuredRoute component={Menu} display={<Settings />} />}
          />
        </Routes>
        <NotificationContainer />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
