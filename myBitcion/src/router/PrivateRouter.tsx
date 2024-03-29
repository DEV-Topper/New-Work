import { useState, useEffect, FC, PropsWithChildren } from "react";
import { Navigate, RouterProvider, useNavigate } from "react-router-dom";
import { useUserCookie } from "../hooks/userHooks";
import Loading from "../page/Loading";
import DashboardRouter from "./DashboardRouter";
import { Router } from "./Router";
import { jwtDecode } from "jwt-decode";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const { data, isLoading } = useUserCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (typeof data?.data?.data === "undefined") {
        navigate("/auth/login");
      }
    }
  }, [data, isLoading]);

  return isLoading ? (
    <Loading />
  ) : !isLoading && typeof data?.data?.data !== "undefined" ? (
    <>{children}</>
  ) : !isLoading && typeof data?.data?.data === "undefined" ? (
    <Navigate to="/auth/login" />
  ) : (
    <Navigate to="auth/login" />
  );
};

export default PrivateRouter;
