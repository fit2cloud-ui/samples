import {success, error} from "./result-holder"

const auth = {
  admin: {
    id: "admin",
    name: 'Administrator'
  },
  dev: {
    id: "dev",
    name: 'Dev User'
  }
}

const users = {
  admin: {
    id: "admin",
    name: 'Administrator',
    email: "admin@fit2cloud.com",
    roles: ['admin'],
    language: "zh-CN"
  },
  dev: {
    id: "dev",
    name: 'Dev User',
    email: "dev@fit2cloud.com",
    roles: ['editor'],
    language: "zh-CN"
  }
}

module.exports = [
  // user login
  {
    url: '/samples/user/login',
    type: 'post',
    response: config => {
      const {username} = config.body
      const user = auth[username]

      // mock error
      if (!user) {
        return error("用户名或密码错误")
      }
      return success(user)
    }
  },

  // get user info
  {
    url: '/samples/user/info\.*',
    type: 'get',
    response: config => {
      const {id} = config.query
      const info = users[id]

      // mock error
      if (!info) {
        return error("无法获取用户详细信息")
      }

      return success(info)
    }
  },

  // user logout
  {
    url: '/samples/user/logout',
    type: 'post',
    response: () => {
      return success()
    }
  }
]
