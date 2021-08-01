import { routes, constantRoutes } from '../../src/route/index.js';

const permission = {
    state: {
      routers: [],
      addRouters: []
    },
    mutations: {
      SET_ROUTERS: (state, routers) => {
        state.addRouters = routers;
        state.routers = constantRoutes.concat(routers);
      }
    },
    actions: {
      GenerateRoutes({ commit }, data) {
        return new Promise(resolve => {
          const { roles } = data;
          const { username } = data;
          const accessedRouters = routes.filter(v => {
            //admin帐号直接返回所有菜单
            // if(username==='admin') return true;
            if (hasPermission(roles, v)) {
              if (v.children && v.children.length > 0) {
                v.children = v.children.filter(child => {
                  if (hasPermission(roles, child)) {
                    return child
                  }
                  return false;
                });
                return v
              } else {
                return v
              }
            }
            return false;
          });
          //对菜单进行排序
          sortRouters(accessedRouters);
          commit('SET_ROUTERS', accessedRouters);
          resolve();
        })
      }
    }
  };
  
export default permission;