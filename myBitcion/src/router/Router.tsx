import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../page/HomeScreen";
import AuthLayout from "../components/layout/AuthLayout";
import Register from "../page/auth/Register";
import SignIn from "../page/auth/SignIn";
import Layout from "../components/layout/Layout";
import Settings from "../components/settings/Settings";
import View from "../page/home/View";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <HomeScreen />,
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
				path: "register",
			},
		],
	},

	{
		path: "/",
		element: <Layout />,

		children: [
			{
				index: true,
				element: <View />,
			},
			{
				index: true,
				path: "dashboard",
				element: <View />,
			},
			{
				index: true,
				path: "settings",
				element: <Settings />,
			},
		],
	},
]);
