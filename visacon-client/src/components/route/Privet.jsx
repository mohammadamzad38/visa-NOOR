import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function Privet({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-2xl font-italic font-bold">Loading.......</div>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/signin"} replace />;
}
