import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { fetchCryptoData } from "../api/bitcoinApi";
import bitcoin from "../../assets/bitcoinpic.png";
import EthereumClassic from "../../assets/EthereumClassic.png";
import litecoinlogo from "../../assets/litecoinlogo.png";
import ethereumlogo from "../../assets/ethereumlogo.png";
import axios from "axios";
import NewsCard from "../../components/MainStatic/NewsCard";

async function createCryptoChart(): Promise<void> {
	const cryptoData = await fetchCryptoData();
	let chart: Chart | null = null;
	if (cryptoData) {
		const prices = cryptoData.prices.map((pair) => pair[1]);
		const timestamps = cryptoData.prices.map((pair) =>
			new Date(pair[0]).toLocaleDateString()
		);

		const ctx = document.getElementById(
			"cryptoChart"
		) as HTMLCanvasElement | null;
		if (ctx) {
			new Chart(ctx, {
				type: "line",
				data: {
					labels: timestamps,
					datasets: [
						{
							label: "Bitcoin Price (USD)",
							data: prices,
							fill: false,
							borderColor: "blue",
							tension: 0.1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: false,
						},
					},
					interaction: {
						mode: "index",
						// speed: 0,
					},
				},
			});
		}
	}
}

const data = [
	{
		name: "LitCoin",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(30 days)",
		Image: litecoinlogo,
	},
	{
		name: "EthereumClassic",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(20 days)",
		Image: EthereumClassic,
	},
	{
		name: "Bit Coin",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(50 days)",
		Image: bitcoin,
	},
	{
		name: "Ethereum",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(30 days)",
		Image: ethereumlogo,
	},
];

interface NewsItem {
	title: string;
	description: string;
	link: string;
}

interface ExchangeRates {
	[crypto: string]: {
		[fiat: string]: number;
	};
}

const CryptoChart: React.FC = () => {
	document.title = "Dashboard Screen";

	const [news, setNews] = useState<NewsItem[]>([]);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					"https://rss.app/feeds/tB7pO8E6Tuor8JAi.xml"
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
		createCryptoChart();
	}, []);

	const bgColors = [
		"bg-black",
		"bg-white",
		"bg-white",
		"bg-green-300",
	];
	const textColors = [
		"text-white",
		"text-black",
		"text-black",
		"text-black",
	];

	const lilBgColors = [
		"bg-white",
		"bg-black",
		"bg-green-300",
		"bg-black",
	];

	const [amount, setAmount] = useState<string>("");
	const [sourceCurrency, setSourceCurrency] = useState<string>("BTC");
	const [targetCurrency, setTargetCurrency] = useState<string>("USD");
	const [exchangeRates] = useState<ExchangeRates>({
		BTC: { USD: 47000, EUR: 39000 },
		ETH: { USD: 1500, EUR: 1200 },
		// Add more exchange rates as needed
	});

	const handleAmountChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setAmount(event.target.value);
	};

	const handleSourceCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSourceCurrency(event.target.value);
	};

	const handleTargetCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setTargetCurrency(event.target.value);
	};

	const convertCurrency = () => {
		if (!amount || isNaN(parseFloat(amount))) {
			alert("Please enter a valid amount.");
			return;
		}

		const sourceRate = exchangeRates[sourceCurrency][targetCurrency];
		const convertedAmount = parseFloat(amount) * sourceRate;
		alert(
			`${amount} ${sourceCurrency} equals ${convertedAmount} ${targetCurrency}`
		);
	};

	return (
		<div>
			<div className=" w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div className=" grid grid-cols-2  gap-4">
					{data.map((crypto, index) => (
						<div
							key={index}
							className={`${bgColors[index % bgColors.length]} ${
								textColors[index % textColors.length]
							} justify-center items-center py-2 flex rounded-md border ${
								index === 1 || index == 2 ? "h-[90%]" : "h-[180px]"
							}`}
						>
							<div className="w-[90%]">
								<div className="flex items-center mb-3">
									<div
										className={`${
											lilBgColors[index % lilBgColors.length]
										}
										h-11 w-11 rounded-md ml-4 justify-center items-center flex `}
									>
										<img
											src={crypto.Image}
											alt=""
											className="w-[30px]"
										/>
									</div>
									<div className="ml-2 text-[12px] font-bold">
										{crypto.name}
									</div>
								</div>
								<div className="">
									<h3 className="font-bold ml-4">{crypto.price}</h3>
									{/* <canvas id="cryptoChart"></canvas> */}
								</div>
								<div className="flex gap-1 ml-4">
									<div className="">
										<span className="text-[12px] font-bold m-1">
											{crypto.percentage}
										</span>
									</div>
									<div className="">
										<span className="text-[12px] font-bold">
											{crypto.week}
										</span>
									</div>
									{/* <LiveCryptoGraph /> */}
								</div>
							</div>
						</div>
					))}
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
				<div className="">
					<canvas
						id="cryptoChart"
						className=" bg-white rounded-lg shadow-lg w-full h-[400px] lg:h-full"
					></canvas>
				</div>
				<div className=" bg-gray-400">
					<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
						<h2 className="text-2xl font-semibold mb-6 text-center">
							Cryptocurrency Converter
						</h2>
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2">
								Amount:
							</label>
							<input
								type="number"
								value={amount}
								onChange={handleAmountChange}
								className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2">
								From:
							</label>
							<select
								value={sourceCurrency}
								onChange={handleSourceCurrencyChange}
								className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
							>
								<option value="BTC">BTC</option>
								<option value="ETH">ETH</option>
								{/* Add more cryptocurrencies as needed */}
							</select>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-semibold mb-2">
								To:
							</label>
							<select
								value={targetCurrency}
								onChange={handleTargetCurrencyChange}
								className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
							>
								<option value="USD">USD</option>
								<option value="EUR">EUR</option>
								{/* Add more fiat currencies as needed */}
							</select>
						</div>
						<button
							onClick={convertCurrency}
							className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
						>
							Convert
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CryptoChart;
