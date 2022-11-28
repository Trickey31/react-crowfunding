import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiredAuthPage = ({ permission }) => {
  const { user } = useSelector((state) => state.auth);
  const userPermission = user?.permissions || [];
  const location = useLocation();
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate("/sign-in");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);
  // if (!user || !user.email) return null;
  return userPermission.find((p) => permission?.include(p)) ? (
    <Outlet></Outlet>
  ) : user ? (
    <Navigate state={{ from: location }} to={"/unauthorized"} replace />
  ) : (
    <Navigate state={{ from: location }} to={"/sign-in"} replace />
  );
};

export default RequiredAuthPage;
