import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const isAuthenticated = sessionStorage.getItem(props.param);
  if (!isAuthenticated) {
    return <Navigate to={props.route} replace />;
  }
  return props.children;
}

export default ProtectedRoute;
