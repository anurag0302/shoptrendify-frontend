import {
  Navigate,
  Outlet,
} from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';
import { authSelector } from '../store/slices/authSlice';

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = '/' }: ProtectedRouteProps) => {
  const auth = useAppSelector(authSelector);
  console.log(auth.isLoggedIn)
  if (!auth.isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};
export default ProtectedRoute;