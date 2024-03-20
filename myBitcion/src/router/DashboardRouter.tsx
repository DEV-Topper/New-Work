import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

import View from "../page/DashboardHome/View";
import Settings from "../components/settings/Settings";
import WalletScreen from "../page/DashboardHome/WalletScreen";
import TransactionScreen from "../page/DashboardHome/TransactionScreen";
import CryptoScreen from "../page/DashboardHome/CryptoScreen";
import ExchangeScreen from "../page/DashboardHome/ExchangeScreen";
import Complains from "../page/DashboardHome/Complainscreen";

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
			{
				index: true,
				path: "wallet",
				element: <WalletScreen />,
			},
			{
				index: true,
				path: "transaction",
				element: <TransactionScreen />,
			},
			{
				index: true,
				path: "crypto",
				element: <CryptoScreen />,
			},
			{
				index: true,
				path: "exchange",
				element: <ExchangeScreen />,
			},
			{
				index: true,
				path: "complains",
				element: <Complains />,
			},
		],
	},
]);

export default DashboardRouter;
