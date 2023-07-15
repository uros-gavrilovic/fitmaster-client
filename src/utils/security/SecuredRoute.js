import { useContext } from "react";

const SecuredRoute = ({ component: Component, ...otherProps }) => {
  const context = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={(props) => {
        if (context.validToken) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default SecuredRoute;
