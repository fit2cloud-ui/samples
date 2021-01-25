const getters = {
  auth: state => state.user.auth,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters