import { HTTP } from "./enums";

export interface iError {
	name: string;
	message: string;
	status: HTTP;
	success: boolean;
}

// export interface iBitconUser {
// 	email: string;
// 	userName: string;
// 	password: string;
// 	token: string;
// 	verify: boolean;
// 	avater: string;
// 	avaterID: string;
// }

// export interface iBitconUserData extends iBitconUser, Document {}
