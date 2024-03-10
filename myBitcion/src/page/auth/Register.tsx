import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
	return (
		<div className="w-full h-[91vh] flex flex-col justify-center items-center">
			<div className="mb-10 text-center flex items-center w-full flex-col">
				<Link to="/">
					<img
						className="mb-5 w-56 h-28 object-contain"
						src={logo}
					/>{" "}
				</Link>
				<div className="text-[26px] font-bold mb-3">
					Create an Account
				</div>
				<div className="text-[14px] -mt-4"></div>
			</div>
			<form className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4">
				{/* <Input
					placeholder="Email"
					className="w-[97%]"
					type="email"
					required
					value={email}
					onChange={(e: any) => {
						setEmail(e.target.value);
					}}
				/> */}

				<div>
					{/* <Button
						name="Register"
						className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300"
						type="submit"
						icon={
							loading && (
								<ClipLoader
									color="white"
									size={18}
								/>
							)
						}
						// onClick={handleSubmit}
					/> */}
				</div>
				<div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
					Sign up with social network
				</div>
				<div className="flex flex-col">
					{/* <Button
						name="Continue with Google (coming soon)"
						className="h-14 bg-red-900 hover:bg-red-600 opacity-50 hover:text-white  transition-all duration-300 font-medium text-[#ababab] leading-tight w-[97%]text-center text-[12px] sm:text-base "
						icon={<FaGoogle />}
					/> */}
				</div>
			</form>
		</div>
	);
};

export default Register;
