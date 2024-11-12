export default function () {
    return {
        token: "",
        user_id: null,
        session_id: "",
        score_user: {},
        user_profile: {},
        quiz: {},
        session: [],
        lastSession: {},
        showLoading: false,
        showDialog: false,
        messageDialog: "",
        iconDialog: "",
        currentQuiz: 0,
        allUser: [],
        myRank: 0,
        allRank: [],
        fotoAva: [
            require("@/assets/avatar/ava-man.png"),
            require("@/assets/avatar/ava-man2.png"),
            require("@/assets/avatar/ava-woman.png"),
            require("@/assets/avatar/ava-woman2.png"),
        ],
        countDown: "",
    };
}
