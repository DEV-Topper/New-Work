import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../model/userModel";
import { verifiedEmail } from "../utils/email";
import { HTTP } from "../utils/enums";
import jwt from "jsonwebtoken";
import { log } from "console";
import { error } from "console";

export const createUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { email, password, userName } = req.body;
		const salt = await bcrypt.genSalt(10);

		const hashed = await bcrypt.hash(password, salt);

		const token = crypto.randomBytes(4).toString("hex");

		const user = await userModel.create({
			userName,
			email,
			password: hashed,
			token,
		});

		await verifiedEmail(user);
		return res.status(HTTP.CREATED).json({
			message: "Accountcreated successfully.",
			data: user,
			status: 201,
		});
	} catch (error: any) {
		return res.status(HTTP.BAD).json({
			message: "Sorry!! There was an error, User not created..",
			data: error?.message,
			status: 404,
		});
	}
};

export const VerifyUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { token } = req.body;
		const user = await userModel.findOne({ token });

		if (user) {
			const updatedUser = await userModel.findByIdAndUpdate(
				user._id,
				{ token: "", verify: true },
				{ new: true }
			);

			console.log("Updated user:", updatedUser);

			return res.status(HTTP.CREATED).json({
				message: "This user has succeddfully been verified",
				data: user,
				status: 201,
			});
		} else {
			return res.status(HTTP.BAD).json({
				message:
					"Sorry!! This token has already been used by you.. Or You are not registered to this platform.",
				status: 404,
			});
		}
	} catch (error) {
		return res.status(HTTP.BAD).json({
			message: "Sorry!! T here was an error, User not created..",
			data: error,
			status: 404,
		});
	}
};

export const signInUser = async (
	req: any,
	res: Response
): Promise<Response> => {
	try {
		const { password, email } = req.body;

		const user = await userModel.findOne({ email });

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

					req.session.isAuth = true;
					req.session.data = user._id;

					return res.status(HTTP.CREATED).json({
						message: "This user has successfully been logged-in",
						data: encrypted,
						status: 201,
					});
				} else {
					return res.status(HTTP.BAD).json({
						message: "Sorry!! Verify your account.",
						status: 404,
					});
				}
			} else {
				return res.status(HTTP.BAD).json({
					message: "Sorry!! Password is incorrect.",
					status: 404,
				});
			}
		} else {
			return res.status(HTTP.BAD).json({
				message: "Sorry!! Email doesn't exist.",
				status: 404,
			});
		}
	} catch (error) {
		return res.status(HTTP.BAD).json({
			message:
				"Sorry!! User not created. There was an error with this request.",
			status: 404,
		});
	}
};

export const getAllUsers = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const getUsers = await userModel.find();

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
		res.cookie("aydee", {
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

export const viewUserStatus = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { userID } = req.params;

		const user = await userModel.findById(userID);

		return res.status(200).json({
			message: "viewing user record",
			data: user,
			status: 200,
		});
	} catch (error) {
		return res.status(404).json({
			message: "Error verifying user",
		});
	}
};

export const viewUserStatusByName = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { userName } = req.params;

		const user = await userModel.findOne({ userName });

		return res.status(200).json({
			message: "viewing user record by her name",
			data: user,
			status: 200,
		});
	} catch (error) {
		return res.status(404).json({
			message: "Error verifying user",
		});
	}
};
