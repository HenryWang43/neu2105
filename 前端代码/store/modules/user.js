import VuexPersistence from "vuex-persist"

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const user = {
    state:{
        token: '',
        username: '',
        roles: [],
        password: '',
        name: ''
    },
    
    mutations: {
        setToken: (state, token) => {
            state.token = token;
        },
        setuserName: (state, username) => {
            state.username = username;
        },
        setRoles: (state, roles) => {
            state.roles = roles;
        },
        setPasword: (state, password) => {
            state.password = password;
        },
        setName: (state, name) => {
            state.name = name;
        }
    },

    actions:{
        setToken ({ commit }, token){
            return new Promise(resolve => {
                commit('setToken', token)
                resolve
            })
        },

        // login({ commit }, userInfo) {
        //     const username = userInfo.username.trim()
        //     return new Promise((resolve, reject) =>{
        //         this.login(username, userInfo.password).then(res =>{
        //             const token = res.data.token
        //             commit('setToken', token)
        //             const roles = res.data.roles
        //             const userprofile = res.data.userprofile
        //             if (roles && roles.length >0){
        //                 commit('setRoles', roles)
        //             } else{
        //                 reject('getInfo: roles must be not null')
        //             }
        //             commit('setName', userprofile.username)
        //             resolve(Response)
        //             resolve()
        //         }).catch(error => {
        //             reject(error)
        //         })
        //     })
        // }
        logout ({ commit, state }){
            return new Promise((resolve, reject) => {
                {
                  commit('setuserName','')
                  commit('setToken', '')
                  commit('setRoles', [])
                  commit('setStaffs', [])
                  resolve()
                }
                })
        },
        loginFail ({ commit, state }){
            return new Promise((resolve, reject) => {
                {
                  commit('setToken', '')
                  commit('setRoles', [])
                  commit('setStaffs', [])
                  resolve()
                }
                })
        }
    },
    plugins: [vuexLocal.plugin]

}
export default user