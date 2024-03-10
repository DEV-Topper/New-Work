import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

import View from "../page/home/View";
import Settings from "../components/settings/Settings";

const DashboardRouter = createBrowserRouter([
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

export default DashboardRouter;
