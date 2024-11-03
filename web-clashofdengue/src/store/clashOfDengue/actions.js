const clashOfDengueService = require("@/service").default;
export const registerUser = async (_, request) => {
    try {
        const res = await clashOfDengueService.authRegister(request);
        if (res.status === false) {
            throw new Error(res.message || "Registration failed");
        }
        return res;
    } catch (err) {
        if (err.response) {
            const errorMessage =
                err.response.data.message || "Something went wrong";
            const validationErrors = err.response.data.errors || {};
            throw new Error(
                `${errorMessage} ${JSON.stringify(validationErrors)}`
            );
        } else {
            throw new Error(err.message);
        }
    }
};

export const loginUser = async ({ commit }, request) => {
    try {
        const res = await clashOfDengueService.authLogin(request);
        console.log("res Login User", res);

        if (res.status === false) {
            throw new Error(res.message || "login failed");
        }

        commit("setToken", res.token);
        return res;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const logoutUser = async ({ getters }) => {
    try {
        const res = await clashOfDengueService.authLogout({
            token: getters.getToken,
        });
        console.log("res logout User", res);

        if (res.status === false) {
            throw new Error(res.message || "logout failed");
        }

        return res;
    } catch (err) {
        throw new Error("Network error: " + err.message);
    }
};
