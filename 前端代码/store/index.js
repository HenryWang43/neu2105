import { createStore } from 'vuex';
import user from './modules/user.js';
import permission from './modules/permission.js';
import getters from './modules/getters.js';
import VuexPersistence from "vuex-persist";
import userNameList from './modules/userNameList.js';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = createStore({
  modules: {
      user,
      permission,
      userNameList
  },
  getters,
  plugins: [vuexLocal.plugin]
  
})

export { store };
