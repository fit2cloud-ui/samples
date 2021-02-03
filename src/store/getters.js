const getters = {
  sidebar: state => state.app.sidebar,
  isLogin: state => state.user.isLogin,
  id: state => state.user.id,
  name: state => state.user.name,
  language: state => state.user.language,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
}
export default getters
