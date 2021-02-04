import {getInfo, updateInfo, logout} from '@/api/user'
import {resetRouter} from '@/router'

const state = {
  isLogin: true,
  id: '',
  name: '',
  language: "",
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
  login({commit}) {
    commit('LOGIN')
  },

  getInfo({commit}, id) {
    getInfo(id).then(response => {
      const {roles, id, name, language} = response.data
      commit('SET_ROLES', roles)
      commit('SET_ID', id)
      commit('SET_NAME', name)
      commit('SET_LANGUAGE', getLanguage(language))
    })
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
