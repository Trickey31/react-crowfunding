import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredAuthPage = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!user || !user.email) return null;
  return <>{children}</>;
};

export default RequiredAuthPage;
