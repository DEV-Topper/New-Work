import React, { useEffect, useState, useRef } from "react";
import bitcoin from "../../assets/bitcoinpic.png";
import EthereumClassic from "../../assets/EthereumClassic.png";
import litecoinlogo from "../../assets/litecoinlogo.png";
import ethereumlogo from "../../assets/ethereumlogo.png";
import axios from "axios";
import NewsCard from "../../components/MainStatic/NewsCard";
import ExchangeRate from "../../components/MainStatic/ExchangeRate";
import ViewBitcoin from "../../components/static/ViewBitcoin";
import ViewEthereum from "../../components/static/ViewEthereum";
import ViewLitcoin from "../../components/static/ViewLitcoin";
import ViewDoge from "../../components/static/ViewDoge";
import ViewBtcAnalysis from "../../components/static/ViewBitcoinAnalysis";

interface NewsItem {
	title: string;
	description: string;
	link: string;
}

const CryptoChart: React.FC = () => {
	document.title = "Dashboard Screen";

	const [news, setNews] = useState<NewsItem[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const scriptLoadedRef = useRef(false);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					"https://rss.app/feeds/txF6Dc9RY6I2otLn.xml"
				);
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(
					response.data,
					"text/xml"
				);
				const items = xmlDoc.querySelectorAll("item");

				const newsItems: NewsItem[] = Array.from(items).map(
					(item: any) => ({
						title: item.querySelector("title").textContent,
						description:
							item.querySelector("description").textContent,
						link: item.querySelector("link").textContent,
					})
				);

				setNews(newsItems);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		fetchNews();
	}, []);

	useEffect(() => {
		if (!scriptLoadedRef.current && containerRef.current) {
			const script = document.createElement("script");
			script.src =
				"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
			script.type = "text/javascript";
			script.async = true;
			script.innerHTML = JSON.stringify({
				autosize: true,
				symbol: "BINANCE:BTCUSDT",
				interval: "D",
				timezone: "Etc/UTC",
				theme: "light",
				style: "1",
				locale: "en",
				hide_top_toolbar: true,
				allow_symbol_change: false,
				calendar: false,
				support_host: "https://www.tradingview.com",
			});
			containerRef.current.appendChild(script);
			scriptLoadedRef.current = true;
		}
	}, []);

	return (
		<div className="h-[100%]">
			<div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div className="grid grid-cols-2 gap-4 ">
					<ViewBitcoin containerId="tradingview-widget-container-1" />
					<ViewEthereum containerId="tradingview-widget-container-2" />
					<ViewLitcoin containerId="tradingview-widget-container-3" />
					<ViewDoge containerId="tradingview-widget-container-4" />
				</div>
				<div
					className="overflow-x-hidden overflow-y-auto"
					style={{ maxHeight: "400px" }}
				>
					{news.map((item, index) => (
						<NewsCard
							key={index}
							title={item.title}
							description={item.description}
							link={item.link}
						/>
					))}
				</div>
				<div className="container mx-auto">
					<ViewBtcAnalysis />
				</div>
			</div>
			<div
				ref={containerRef}
				className="mt-96 h-[600px]"
			></div>
		</div>
	);
};

export default CryptoChart;
