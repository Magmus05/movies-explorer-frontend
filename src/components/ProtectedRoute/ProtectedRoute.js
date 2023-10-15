import React from "react";
import { Navigate } from "react-router-dom";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";
const ProtectedRoute = ({ element: Component, ...props }) => {
  const isLog = React.useContext(IsLoggedInContext);
  return isLog ? <Component {...props} /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
