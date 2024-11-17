import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, loder } = useContext(AuthContext);

  if (loder) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRout;
