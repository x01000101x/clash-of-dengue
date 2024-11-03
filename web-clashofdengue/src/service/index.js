import axios from "axios";
const url = "https://clashofdengue.com/api/backend";

export default {
    async authRegister(request) {
        const func = "Reigster User";
        const endpoint = url + "/auth/register";
        try {
            console.log(func, endpoint, request);
            const response = await axios.post(endpoint, request, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(
                    error.response.data.message || "Something went wrong"
                );
            } else {
                throw new Error("Network error: " + error.message);
            }
        }
    },
    async authLogin(request) {
        const func = "Login User";
        const endpoint = url + "/auth/login";
        const bodyRequest = {
            username: request.username,
            password: request.password,
        };
        try {
            console.log(func, endpoint, bodyRequest);
            const response = await axios.post(endpoint, bodyRequest, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(
                    error.response.data.message || "Something went wrong"
                );
            } else {
                throw new Error("Network error: " + error.message);
            }
        }
    },
    async authLogout(request) {
        const func = "Logout User";
        const endpoint = url + "auth/logout";
        const token = request.token;
        try {
            console.log(func, endpoint, token);
            const response = await axios.post(
                endpoint,
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(
                    error.response.data.message || "Something went wrong"
                );
            } else {
                throw new Error("Network error: " + error.message);
            }
        }
    },
    async getScore(request) {
        const func = "Get Score User";
        const endpoint = url + "/score";
        const token = request.token;
        try {
            console.log(func, endpoint, request.id);
            const response = await axios.get(`${endpoint}/${request.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(
                    error.response.data.message || "Something went wrong"
                );
            } else {
                throw new Error("Network error: " + error.message);
            }
        }
    },
};
