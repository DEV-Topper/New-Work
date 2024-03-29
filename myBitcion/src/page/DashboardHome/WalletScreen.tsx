import { BiPlusCircle } from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa";

const WalletScreen = () => {
	document.title = "Wallet Screen";

	return (
		<div className="text-slate-950">
			<div className="flex justify-between">
				<h1 className="text-[23px] text-slate-950 font-bold">
					My Card
				</h1>

				<div className="flex gap-1 items-center">
					<BiPlusCircle size={20} />

					<h1 className="text-[17px] text-slate-950 font-bold">
						Add Wallet
					</h1>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4 mt-3">
				{Array.from({ length: 4 }, () => (
					<div className="rounded-lg bg-green-300 h-[180px] bg-contain bg-no-repeat bg-center p-5 flex flex-col justify-between">
						<div>
							<h5 className="text-[15px] text-green-800 font-semibold">
								Main Wallet
							</h5>
							<p className="font-bold text-[28px] font-mono">
								2820119
							</p>
						</div>

						<div className="flex justify-between items-center">
							<p className=" text-[20px] font-mono">
								2345 2345 0584 9430
							</p>
							<FaCcMastercard size={40} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WalletScreen;
