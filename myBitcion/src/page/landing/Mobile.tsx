import React from "react";
import Button from "../../components/reUse/Button";
import mobile from "../../assets/mobile-app.gif";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Mobile = () => {
	return (
		<div className="min-h-[130vh] lg:min-h-[100vh] bg-blue-600 w-full flex justify-center items-center">
			<div className="w-[80%] text-white flex-row-reverse justify-between space-y-5 lg:space-y-0 flex flex-wrap lg:flex-nowrap items-center text-center lg:text-start">
				<div className="w-full flex justify-center lg:w-full">
					<img
						src={mobile}
						alt=""
						className="w-[10000%]"
					/>
				</div>
				<div className="w-full lg:w-1/2">
					<h2 className="text-blue-300 font-semibold text-[23px]">
						CRYPTOKING APP
					</h2>
					<h1 className="text-[35px] mb-5 font-bold">
						Download Mobile App
					</h1>
					<p className="mt-5 text-[18px]">
						The Cryptoking very own app is available to download for
						your iPhone or Android™ device! … Now Download the new
						mobile app, and get the most out of your membership with
						special tools designed to enhance your experience.
						Download the Cryptoking new mobile app, and
					</p>
					<p className="my-5 text-[18px]">
						Download the Cryptoking new mobile app, and get the most
						out of your membership with special tools designed to
						enhance your experience.
					</p>
					<div className="flex gap-5 justify-center lg:justify-start flex-wrap">
						<Button
							text={"Google Store"}
							icon={<FaGooglePlay />}
						/>
						<Button
							text={"Apple Store"}
							icon={<FaApple />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
