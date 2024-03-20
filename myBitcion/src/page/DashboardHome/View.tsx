import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { fetchCryptoData } from "../api/bitcoinApi";
import pix from "../../assets/bitcoinpic.png";

async function createCryptoChart(): Promise<void> {
	const cryptoData = await fetchCryptoData();
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
							borderColor: "red",
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
		name: "Bit Coin",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(This Week)",
		buyPrice: "$563,443",
		sellPrice: "$563,443",
	},
	{
		name: "Bit Coin",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(This Week)",
		buyPrice: "$563,443",
		sellPrice: "$563,443",
	},
	{
		name: "Bit Coin",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(This Week)",
		buyPrice: "$563,443",
		sellPrice: "$563,443",
	},
	{
		name: "Bit Coin",
		price: "$48,200.00",
		percentage: "+4%",
		week: "(This Week)",
		buyPrice: "$563,443",
		sellPrice: "$563,443",
	},
];

const CryptoChart: React.FC = () => {
	useEffect(() => {
		createCryptoChart();
	}, []);

	return (
		<div>
			<div className="grid grid-cols-2 ">
				{data.map((crypto, index) => (
					<div
						key={index}
						className="mb-4 bg-green-500 w-[240px] justify-center items-center h-[130px] flex rounded-md"
					>
						<div className="w-[200px]">
							<div className="flex items-center mb-3">
								<img
									src={pix}
									alt=""
									className="w-[30px]"
								/>
								<div className="ml-2 text-[12px] font-bold">
									{crypto.name}
								</div>
							</div>
							<div className="mb-3">
								<h3 className="font-bold">
									{crypto.price}{" "}
									<span>
										<span className="text-[12px]">
											{crypto.percentage}
										</span>
										<span className="text-[13px]">{crypto.week}</span>
									</span>
								</h3>
								{/* <canvas id="cryptoChart"></canvas> */}
								<div className="w- h-[1px] bg-black mt-4 ml-2"></div>
							</div>
							<div className="flex gap-1">
								<div className="">
									<span className="text-[12px] font-bold">Buy</span>
									<span className="text-[12px] font-bold m-1">
										{crypto.buyPrice}
									</span>
								</div>
								<div className="">
									<span className="text-[12px] font-bold mr-1">
										Sell
									</span>
									<span className="text-[12px] font-bold">
										{crypto.sellPrice}
									</span>
								</div>
								<div className="">
									<span className="text-[12px] font-bold">
										Details
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<canvas
				id="cryptoChart"
				className="w-full bg-white rounded-lg shadow-lg"
			></canvas>
		</div>
	);
};

export default CryptoChart;
