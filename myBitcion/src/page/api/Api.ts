import axios from "axios";

const URL: string = "http://localhost:2244/api/v1";
const URL2: string = "http://localhost:2244";

export const registerUser = async (data: any) => {
	try {
		return await axios
			.post(`${URL}/register-account`, { data })
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
			.post(`${URL2}/login-account`, data)
			.then((res: any) => {
				return res?.data;
			});
	} catch (error: any) {
		return error;
	}
};

export const verifyUser = async (data: any) => {
	try {
		return await axios
			.patch(`${URL2}/verify-account`, { token: data })
			.then((res: any) => {
				return res?.data;
			});
	} catch (error: any) {
		return error;
	}
};

// export const registerUser = async(data: any) =>{
//     try{
//         return await axios
//         .post(`${URL}/register-account`, {data})
//         .then((res: any) =>{
//             return res?.data
//         })
//     }catch (error: any){
//         return error
//     }
// }

// export const registerUser = async(data: any) =>{
//     try{
//         return await axios
//         .post(`${URL}/register-account`, {data})
//         .then((res: any) =>{
//             return res?.data
//         })
//     }catch (error: any){
//         return error
//     }
// }
