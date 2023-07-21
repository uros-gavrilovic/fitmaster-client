import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SecuredRoute = ({ component: Component, ...otherProps }) => {
  const { token } = useSelector((state) => state.userReducer);
  return token ? <Component {...otherProps} /> : <Navigate to="/" />;
};

export default SecuredRoute;
