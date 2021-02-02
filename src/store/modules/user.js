import {getInfo, logout} from '@/api/user'
import {resetRouter} from '@/router'

const state = {
  isLogin: true,
  id: '',
  name: '',
  roles: []
}

const mutations = {
  LOGIN: (state) => {
    state.isLogin = true
  },
  LOGOUT: (state) => {
    state.isLogin = false
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({commit}) {
    commit('LOGIN')
  },

  getInfo({commit}) {
    getInfo().then(data => {
      const {roles, id, name} = data
      commit('SET_ROLES', roles)
      commit('SET_ID', id)
      commit('SET_NAME', name)
    })
  },

  logout({commit}) {
    logout().then(() => {
      commit('LOGOUT')
      commit('SET_ROLES', [])
      resetRouter()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
