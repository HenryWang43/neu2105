import VuexPersistence from "vuex-persist"

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
const userNameList = {
    state:{
        staffs:[]
    },

    mutations:{
        setStaffs: (state, staffs) => {
            state.staffs = staffs;
        }
    },
    plugins: [vuexLocal.plugin]
}
    export default userNameList