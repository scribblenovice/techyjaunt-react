import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const isAuthenticated = localStorage.getItem("isPaid");
  if (!isAuthenticated) {
    return <Navigate to="/checkout" replace />;
  }
  return props.children;
}

export default ProtectedRoute;
