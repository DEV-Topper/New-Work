import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/banner_vector2.png";
import Input from "../../components/MainReUse/Input";
import Button from "../../components/MainReUse/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../api/Api";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Register = () => {
	const schema = yup.object({
		userName: yup.string().required(),
		email: yup.string().required(),
		password: yup.string().min(6).required(),
	});
	const navigate = useNavigate();

	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [userName, setUserName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const onHandleSubmit = (e: any) => {
		e.preventDefault();
		setLoading(true);
		if (email !== "") {
			// registerUser({
			// 	email,
			// 	password,
			// 	userName,
			// }).then((res: any) => {
			console.log(email);
			if (email) {
				setLoading(false);
				navigate("/auth/register-message");
				console.log(email);
			} else {
				alert("email is found");
				// setLoading(false);
				// toast.error(
				// 	`${
				// 		email
				// 			? "Email has Already been used before!"
				// 			: email
				// 	}`
				// );
			}
			// });
		} else {
			alert("function not working");
		}
	};

	const submit = handleSubmit((data) => {
		console.log(data);

		registerUser(data).then((res) => {
			console.log(res);
			navigate("/auth/register-message");
		});
	});
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
			<form
				className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
				onSubmit={onHandleSubmit}
			>
				<Input
					placeholder="UserName"
					className="w-[97%]"
					type="name"
					value={userName}
					required
					{...register("userName")}
					onChange={(e: any) => {
						setUserName(e.target.value);
					}}
				/>
				<Input
					placeholder="Email"
					className="w-[97%]"
					type="email"
					value={email}
					required
					{...register("email")}
					onChange={(e: any) => {
						setEmail(e.target.value);
					}}
				/>

				<div>
					<Input
						placeholder="Password"
						className="w-[97%]"
						type="password"
						show
						value={password}
						required
						{...register("password")}
						onChange={(e: any) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
					REGISTER
				</div>
				<div className="flex flex-col">
					<Button
						name="Register"
						className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300 font-semibold"
						type="submit"
						icon={
							loading && (
								<ClipLoader
									color="white"
									size={18}
								/>
							)
						}
						onClick={onHandleSubmit}
					/>
				</div>
			</form>
			<div className="mt-5 text-[13px]">
				Already have an account yet?{" "}
				<span className="font-bold text-blue-900">
					<Link to="/auth/login">Login here</Link>
				</span>
			</div>
		</div>
	);
};

export default Register;
