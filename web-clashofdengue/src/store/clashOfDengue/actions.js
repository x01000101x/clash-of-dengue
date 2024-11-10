const clashOfDengueService = require("@/service").default;
export const registerUser = async ({ commit }, request) => {
    try {
        commit("setShowLoading", true);

        const res = await clashOfDengueService.authRegister(request);
        if (res.status === false) {
            throw new Error(res.message || "Registration failed");
        }
        commit("setShowLoading", false);
        return res;
    } catch (err) {
        commit("setShowLoading", false);
        if (err.response) {
            const errorMessage =
                err.response.data.message || "Something went wrong";
            const validationErrors = err.response.data.errors || {};
            commit("setShowLoading", false);
            commit("setCreateDialog", {
                show: true,
                message: errorMessage + validationErrors,
                icon: "fa-solid fa-circle-exclamation",
            });
        } else {
            commit("setShowLoading", false);
            commit("setCreateDialog", {
                show: true,
                message: err.message,
                icon: "fa-solid fa-circle-exclamation",
            });
        }
        throw err;
    }
};

export const loginUser = async ({ commit }, request) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.authLogin(request);
        console.debug("res Login User", res);

        if (res.status === false) {
            throw new Error(res.message || "login failed");
        }
        commit("setShowLoading", false);
        commit("setToken", res.token);
        commit("setUserId", res.user_id);
        commit("setSessionId", res.session_id);
        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const logoutUser = async ({ commit, getters }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.authLogout({
            token: getters.getToken,
        });
        console.debug("res logout User", res);

        if (res.status === false) {
            throw new Error(res.message || "logout failed");
        }
        commit("setShowLoading", false);
        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const getScoreUser = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.getScore({
            token: getters.getToken,
            id: getters.getUserId,
        });
        console.debug("res get score User", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Get Score failed");
        }
        commit("setShowLoading", false);
        commit("setScoreUser", res.response);

        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
    }
};

export const getProfileUser = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.getUser({
            token: getters.getToken,
            id: getters.getUserId,
        });
        console.debug("res Profile User", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Get Profile failed");
        }
        commit("setShowLoading", false);
        commit("setUserProfile", res.response);

        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const getQuiz = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.getQuiz({
            token: getters.getToken,
        });
        console.debug("res Get Quiz", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Get Quiz failed");
        }
        commit("setShowLoading", false);
        commit("setQuiz", res.response);

        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const sendScore = async ({ getters, commit }, request) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.updateScore({
            token: getters.getToken,
            id: getters.getUserId,
            is_correct: request.correct,
            score: request.score,
            question_no: request.question_no,
        });
        console.debug("res Send Score", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Send Score failed");
        }
        commit("setShowLoading", false);
        commit("setScoreUser", res.response);
        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const updateUser = async ({ getters, commit }, request) => {
    try {
        commit("setShowLoading", true);
        const req = {
            ...request,
            id: getters.getUserId,
        };
        const res = await clashOfDengueService.editUser({
            token: getters.getToken,
            req,
        });
        console.debug("res Update User", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Edit User failed");
        }
        commit("setShowLoading", false);
        commit("setUserProfile", res.response);
        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const getSession = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.getSession({
            token: getters.getToken,
        });
        console.debug("res get session", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Get Session failed");
        }
        commit("setShowLoading", false);
        commit("setSession", res.response);

        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const endGame = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.validateSession({
            token: getters.getToken,
            id: getters.getUserId,
            session: getters.getLastSession.id,
        });
        console.debug("res Start Session User", res);

        if (res.status === false) {
            throw new Error(res.message || "Maaf sesi anda telah berakhir");
        }
        commit("setShowLoading", false);
        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};
export const getQuizBySession = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.questionSession({
            token: getters.getToken,
            session: getters.getLastSession,
        });
        console.debug("res get quiz session", res);

        if (res.status === false) {
            throw new Error(res.message || "get quiz session failed");
        }
        if (res.response.length === 0) {
            throw new Error(res.message || "Soal tidak tersedia");
        }
        commit("setShowLoading", false);
        commit("setQuiz", res.response);
        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
        throw err;
    }
};

export const getAllUser = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.getAllUser({
            token: getters.getToken,
        });
        console.debug("res All User", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Get All failed");
        }
        commit("setShowLoading", false);
        commit("setAllUser", res.response);

        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
    }
};

export const getRank = async ({ getters, commit }) => {
    try {
        commit("setShowLoading", true);
        const res = await clashOfDengueService.getRank({
            token: getters.getToken,
        });
        console.debug("res Rank", res);

        if (res.status === false || !res.response) {
            throw new Error(res.message || "Get Rank");
        }

        const filteredData = res.response.filter((item) => item.role_id === 4);
        const sortedRanks = filteredData.sort((a, b) => {
            return parseInt(b.total_score) - parseInt(a.total_score);
        });
        console.log("SORETED RANK", sortedRanks);

        const myRankIndex = sortedRanks.findIndex(
            (score) => score.score_id === String(getters.getUserId)
        );
        const myRank = myRankIndex + 1;
        console.log("myRank", myRank);

        if (myRank) {
            console.log(`Your rank: ${myRank}`);
            commit("setUserRank", myRank);
        } else {
            commit("setUserRank", 0);
        }
        commit("setShowLoading", false);
        commit("setAllRank", sortedRanks);

        return res;
    } catch (err) {
        commit("setShowLoading", false);
        commit("setCreateDialog", {
            show: true,
            message: err.message,
            icon: "fa-solid fa-circle-exclamation",
        });
    }
};
