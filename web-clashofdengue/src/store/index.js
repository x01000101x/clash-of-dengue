import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import ClashOfDengue from "@/store/clashOfDengue";

export default createStore({
    modules: {
        ClashOfDengue,
    },
    plugins: [
        createPersistedState({
            storage: window.sessionStorage, // Menyimpan state ke sessionStorage
        }),
    ],
});
