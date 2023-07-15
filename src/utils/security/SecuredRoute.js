import { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate } from "react-router-dom";

const SecuredRoute = ({ component: Component, ...otherProps }) => {
  const context = useContext(AuthContext);
  console.log(context);

  return context.validToken ? (
    <Component {...otherProps} />
  ) : (
    <Navigate to="/" />
  );
};

export default SecuredRoute;
