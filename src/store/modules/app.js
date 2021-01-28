const get = () => {
  return localStorage.getItem('sidebarStatus')
}
const set = value => {
  localStorage.setItem('sidebarStatus', value)
}
const state = {
  sidebar: {
    opened: get() ? !!+get() : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      set(1)
    } else {
      set(0)
    }
  },
  CLOSE_SIDEBAR: (state) => {
    set('sidebarStatus', 0)
    state.sidebar.opened = false
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  toggleSideBar({commit}) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({commit}, {withoutAnimation}) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({commit}, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
