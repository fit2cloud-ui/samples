<template>
  <div class="login-container">
    <el-row type="flex">
      <el-col :span="12">
        <el-form :model="form" :rules="rules" ref="form">
          <div class="logo">
            <img :src="'/display/file/loginLogo'" style="width: 224px;height: 45px;" alt="">
          </div>
          <div class="title">
            <span id="s1">{{ loginTitle }}</span>
          </div>
          <div class="border"></div>
          <div class="welcome">
            {{ $t('login.welcome') }}
          </div>
          <div class="form">
            <el-form-item prop="username">
              <el-input v-model="form.username" :placeholder="$t('login.username')" autofocus
                        autocomplete="off"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" :placeholder="$t('login.password')" show-password autocomplete="off"
                        maxlength="30" show-word-limit/>
            </el-form-item>
          </div>
          <div class="btn">
            <el-button type="primary" class="submit" @click="submit('form')">
              {{ $t('commons.button.login') }}
            </el-button>
          </div>
          <div class="msg">
            {{ msg }}
          </div>
        </el-form>
      </el-col>
      <el-col :span="12">
        <img src="../../assets/login-desc.png" alt="Login" class="login-image">
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      result: {},
      form: {
        username: '',
        password: '',
        authenticate: 'LOCAL'
      },
      rules: {
        username: [
          {required: true, message: this.$tm('commons.validate.input', 'login.username'), trigger: 'blur'},
        ],
        password: [
          {required: true, message: this.$tm('commons.validate.input', 'login.password'), trigger: 'blur'},
          {min: 6, max: 30, message: this.$t('commons.validate.limit', [6, 30]), trigger: 'blur'}
        ]
      },
      msg: '',
      loginTitle: "Login MeterSphere"
    }
  },
  created: function () {
    document.addEventListener("keydown", this.watchEnter);
  },

  destroyed() {
    document.removeEventListener("keydown", this.watchEnter);
  },
  methods: {
    watchEnter(e) {
      let keyCode = e.keyCode;
      if (keyCode === 13) {
        this.submit('form');
      }
    },
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // TODO
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  min-width: 800px;
  max-width: 1280px;
  height: 520px;
  margin: calc((100vh - 560px) / 2) auto 0;
  background-color: #FFFFFF;

  & .login-image {
    height: 520px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
