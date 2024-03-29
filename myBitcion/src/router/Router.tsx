import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../page/HomeScreen";
import AuthLayout from "../components/layout/AuthLayout";
import Register from "../page/auth/Register";
import SignIn from "../page/auth/SignIn";
import Layout from "../components/layout/Layout";
import Settings from "../components/settings/Settings";
import View from "../page/home/View";
import HeroLayout from "../components/layout/HeroLayout";
import RegisterCard from "../page/auth/RegisterCard";
import Token from "../page/auth/Token";
import Loading from "../page/Loading";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HeroLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
      {
        index: true,
        path: "login",
        element: <SignIn />,
      },
      {
        index: true,
        path: "register-message",
        element: <RegisterCard />,
      },
      {
        index: true,
        path: "token",
        element: <Token />,
      },
    ],
  },
  {
    path: "*",
    element: <Loading />,
  },
]);
