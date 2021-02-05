/* 前后端不分离的登录方式*/
import {login, getCurrentUser, updateInfo, logout} from '@/api/user'
import {resetRouter} from '@/router'

const state = {
  login: false,
  name: "",
  language: "",
  roles: []
}

const mutations = {
  LOGIN: (state) => {
    state.login = true
  },
  LOGOUT: (state) => {
    state.login = false
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_LANGUAGE: (state, language) => {
    state.language = language
    localStorage.setItem('language', language)
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const getLanguage = lang => {
  let language = lang
  if (!language) {
    language = localStorage.getItem('language')
  }
  if (!language) {
    language = (navigator.language || navigator.browserLanguage).toLowerCase()
  }
  return language;
}

const actions = {
  login({commit}, userInfo) {
    const {username, password} = userInfo
    return new Promise((resolve, reject) => {
      login({username: username.trim(), password: password}).then(response => {
        commit('LOGIN')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  isLogin({commit, state, dispatch}) {
    return new Promise((resolve) => {
      if (state.login) {
        resolve(true)
        return;
      }
      dispatch("getCurrentUser").then(() => {
        commit('LOGIN')
        resolve(true)
      }).catch(() => {
        resolve(false)
      })
    });
  },

  getCurrentUser({commit}) {
    return new Promise((resolve, reject) => {
      getCurrentUser().then(response => {
        const {name, roles, language} = response.data
        commit('SET_NAME', name)
        commit('SET_ROLES', roles)
        commit('SET_LANGUAGE', getLanguage(language))
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    });
  },

  setLanguage({commit, state}, language) {
    commit('SET_LANGUAGE', language)
    return new Promise((resolve, reject) => {
      updateInfo(state.id, {language: language}).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
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
