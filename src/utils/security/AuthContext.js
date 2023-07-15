import React from "react";

const AuthContext = React.createContext({
  user: null,
  validToken: null, // TESTING ONLY
});

export default AuthContext;
