import {login, logout, getInfo} from '@/api/user'
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
  // user login
  login({commit}, userInfo) {
    const {username, password} = userInfo
    return new Promise((resolve, reject) => {
      login({username: username.trim(), password: password}).then(() => {
        commit('LOGIN')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo({commit}) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const {data} = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {roles, id, name} = data

        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_ID', id)
        commit('SET_NAME', name)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  logout({commit, state}) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('LOGOUT')
        commit('SET_ROLES', [])
        resetRouter()

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
