import { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate } from "react-router-dom";

const SecuredRoute = ({ component: Component, ...otherProps }) => {
  // const context = useContext(AuthContext);
  // return context.validToken ? (
  //   <Component {...otherProps} />
  // ) : (
  //   <Navigate to="/" />
  // );

  const token = sessionStorage.getItem("token");
  return token ? <Component {...otherProps} /> : <Navigate to="/" />;
};

export default SecuredRoute;
