import "./styles/center.css";
import "./styles/container.css";
import "./styles/text.css";
import AuthContext from "./utils/security/AuthContext";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/app/Dashboard";
import Login from "./components/login/Login";
import SecuredRoute from "./utils/security/SecuredRoute";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
  return (
    <AuthContext.Provider value={{ user: null, validToken: true }}>
      {/* <NotificationContainer> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={<SecuredRoute component={Dashboard} />}
        ></Route>
      </Routes>
      {/* </NotificationContainer> */}
    </AuthContext.Provider>
  );
}

export default App;
