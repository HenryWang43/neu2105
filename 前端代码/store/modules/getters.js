const getters = {
    token: state => state.user.token,
    username: state => state.user.username,
    roles: state => state.user.roles,
    addRouters: state => state.permission.addRouters,
    routers: state => state.permission.routers
  }
  export default getters
  