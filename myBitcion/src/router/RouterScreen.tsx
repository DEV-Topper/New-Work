import { useEffect, useState } from "react";
import { useUserCookie } from "../hooks/userHooks";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import DashboardRouter from "./DashboardRouter";
import Loading from "../page/Loading";

const RouterScreen = () => {
	const { data, isLoading } = useUserCookie();

	return (
		<div>
			{typeof data?.data?.data === "string" && !isLoading ? (
				<RouterProvider router={DashboardRouter} />
			) : typeof data?.data?.data === "undefined" && !isLoading ? (
				<RouterProvider router={Router} />
			) : isLoading ? (
				<Loading />
			) : (
				<Loading />
			)}
		</div>
	);
};

export default RouterScreen;
