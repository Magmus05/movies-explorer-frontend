import React from "react";
import { Navigate } from "react-router-dom";
import {IsLoggedInContext} from "../../contexts/IsLoggedInContext"

const ProtectedRoute = ({ element: Component, ...props }) => {
  return IsLoggedInContext ? (
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRoute;
