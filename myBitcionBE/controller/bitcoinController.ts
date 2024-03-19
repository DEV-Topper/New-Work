import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import BitcoinModel from "../model/BitcoinModel";
import { verifiedEmail } from "../utils/email";
import { HTTP } from "../utils/enums";
import jwt from "jsonwebtoken";
import { log } from "console";

export const createUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { email, password, userName } = req.body;
		const salt = await bcrypt.genSalt(10);

		log(email, password, userName);
		const hashed = await bcrypt.hash(password, salt);

		const token = crypto.randomBytes(4).toString("hex");

		const user = await BitcoinModel.create({
			userName,
			email,
			password: hashed,
			token,
			// status: userName,
		});
		await verifiedEmail(user);

		return res.status(HTTP.CREATED).json({
			message: "This user has successfully been created.",
			data: user,
		});
	} catch (error: any) {
		return res.status(HTTP.BAD).json({
			message: "Sorry!! There was an error, User not created..",
			data: error?.message,
		});
	}
};

export const VerifyUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { token } = req.body;
		const user = await BitcoinModel.findOne({ token });

		if (user) {
			const updatedUser = await BitcoinModel.findByIdAndUpdate(
				user._id,
				{ token: "", verify: true },
				{ new: true }
			);

			console.log("Updated user:", updatedUser);

			return res.status(HTTP.CREATED).json({
				message: "This user has succeddfully been verified",
				data: user,
			});
		} else {
			return res.status(HTTP.BAD).json({
				message:
					"Sorry!! This token has already been used by you.. Or You are not registered to this platform.",
			});
		}
	} catch (error) {
		return res.status(HTTP.BAD).json({
			message: "Sorry!! There was an error, User not created..",
			data: error,
		});
	}
};

export const signInUser = async (
	req: any,
	res: Response
): Promise<Response> => {
	try {
		const { password, email } = req.body;

		const user = await BitcoinModel.findOne({ email });

		if (user) {
			const checkCode = await bcrypt.compare(password, user.password);

			if (checkCode) {
				if (user.verify && user.token === "") {
					const encrypted = jwt.sign(
						{ id: user._id, status: user.status },
						"jAs",
						{
							expiresIn: "1d",
						}
					);

					req.session.data = user._id;

					return res.status(HTTP.CREATED).json({
						message: "This user has successfully been logged-in",
						data: encrypted,
					});
				} else {
					return res.status(HTTP.BAD).json({
						message: "Sorry!! Verify your account.",
					});
				}
			} else {
				return res.status(HTTP.BAD).json({
					message: "Sorry!! Password is incorrect.",
				});
			}
		} else {
			return res.status(HTTP.BAD).json({
				message: "Sorry!! Email doesn't exist.",
			});
		}
	} catch (error) {
		return res.status(HTTP.BAD).json({
			message:
				"Sorry!! User not created. There was an error with this request.",
		});
	}
};

export const getAllUsers = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const getUsers = await BitcoinModel.find();

		return res.status(HTTP.OK).json({
			message: "Viewing all users",
			data: getUsers,
			length: getUsers.length,
		});
	} catch (error) {
		return res.status(HTTP.BAD).json({
			message: "Error Finding Users",
			data: error,
		});
	}
};

export const logOutUser = async (
	req: any,
	res: Response
): Promise<Response> => {
	try {
		res.cookie("peter", {
			maxAge: 0,
			secure: false,
			sameSite: "lax",
		});
		req.session.destroy();

		return res.status(HTTP.OK).json({
			message: "User has been loggged out",
		});
	} catch (error) {
		return res.status(HTTP.BAD).json({
			message: "Error logging userout",
			data: error,
		});
	}
};

export const getCookieUser = async (req: any, res: Response) => {
	try {
		const data = req.session.data;
		const read = req.session.cookie;

		return res.status(HTTP.OK).json({
			message: "user cookie data",
			data: { data, read },
		});
	} catch (error: any) {
		return res.status(HTTP.BAD).json({
			message: "Error creating user: ",
		});
	}
};
