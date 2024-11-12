export const setToken = (state, value) => {
    state.token = value;
};

export const setUserId = (state, value) => {
    state.user_id = value;
};

export const setSessionId = (state, value) => {
    state.session_id = value;
};

export const setScoreUser = (state, value) => {
    state.score_user = value;
};

export const setUserProfile = (state, value) => {
    state.user_profile = value;
};

export const setQuiz = (state, value) => {
    state.quiz = value;
};

export const setSession = (state, value) => {
    state.session = value;
};

export const setLastSession = (state, value) => {
    state.lastSession = value;
};

export const setAllUser = (state, value) => {
    state.allUser = value;
};

export const setAllRank = (state, value) => {
    state.allRank = value;
};

export const setUserRank = (state, value) => {
    state.myRank = value;
};

export const setCountDown = (state, value) => {
    state.countDown = value;
};

export const addCurrentQuiz = (state) => {
    state.currentQuiz++;
};

export const setCurrentQuiz = (state, value) => {
    state.currentQuiz = value;
};

export const resetQuiz = (state) => {
    state.currentQuiz = 0;
};

export const resetStore = (state) => {
    state.token = "";
    state.user_id = null;
    state.session_id = "";
    state.score_user = {};
    state.user_profile = {};
    state.quiz = {};
    state.session = [];
    state.lastSession = {};
    state.currentQuiz = 0;
    state.allUser = [];
    state.allRank = [];
    state.myRank = 0;
};

export const setShowLoading = (state, value) => {
    state.showLoading = value;
};

export const setCreateDialog = (state, payload) => {
    state.showDialog = payload.show;
    state.messageDialog = payload.message;
    state.iconDialog = payload.icon;
};

export const resetDialog = (state) => {
    state.showDialog = false;
    state.messageDialog = "";
    state.iconDialog = "";
};
