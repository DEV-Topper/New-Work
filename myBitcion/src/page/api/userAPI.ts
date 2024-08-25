import axios from "axios";

const URL: string = "http://localhost:2244/api/v1";

export const registerUser = async (data: any) => {
	try {
		return await axios
			.post(`${URL}/register-account`, data, {
				withCredentials: false,
			})
			.then((res: any) => {
				return res?.data;
			});
	} catch (error) {
		console.log(error);
	}
};
export const loginUser = async (data: any) => {
	try {
		return await axios
			.post(`${URL}/login-account`, data, { withCredentials: true })
			.then((res: any) => {
				return res?.data;
			});
	} catch (error: any) {
		return error?.response;
	}
};

export const verifyUser = async (data: any) => {
	try {
		return await axios
			.post(`${URL}/verify-account`, { token: data })
			.then((res: any) => {
				return res?.data;
			});
	} catch (error: any) {
		return error?.response;
	}
};

export const readUserCookie = async () => {
	try {
		return await axios
			.get(`${URL}/get-user-cookie`, { withCredentials: true })
			.then((res: any) => {
				return res?.data;
			});
	} catch (error: any) {
		return error;
	}
};

export const readUser = async (userID: string) => {
	try {
		return await axios
			.get(`${URL}/view-user/${userID}`)
			.then((res: any) => {
				return res?.data;
			});
	} catch (error) {
		return error;
	}
};

export const getUserLandingPage = async (userName: string) => {
	try {
		return await axios.get(`${URL}/${userName}`).then((res: any) => {
			return res?.data;
		});
	} catch (error: any) {
		return error;
	}
};

export const viewUserByName = async (userName: string) => {
	try {
		return await axios
			.get(`${URL}/get-school-by-name/${userName}`)
			.then((res: any) => {
				return res?.data;
			});
	} catch (error) {
		return error;
	}
};
