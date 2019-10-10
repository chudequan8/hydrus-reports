<template>
  <div id="app">
    <van-button type="default" @click="loginModelVisible = !loginModelVisible"
      >默认按钮</van-button
    >
    <van-popup
      :close-on-click-overlay="false"
      class="ml-login-model"
      v-model="loginModelVisible"
    >
      <login-model ref="loginForm" roles="user"></login-model>
      <div class="ml-model-close" @click="closeLoginModel">
        <img src="./assets/ml_btn_close@2x.png" alt="" />
      </div>
    </van-popup>
  </div>
</template>
<script>
import LoginModel from './components/loginModel'
export default {
  name: 'reportContainer',
  components: {
    LoginModel
  },
  data() {
    return {
      loginModelVisible: false
    }
  },
  methods: {
    // 关闭登录弹窗，把表单清空
    closeLoginModel() {
      this.$refs.loginForm.resetFrom()
      this.loginModelVisible = false
    }
  }
}
</script>

<style lang="scss">
.ceshi-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  max-width: 750px;
  // background-color: #FFAB2C;
}

html {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #ffab2c;
  margin: 0 auto;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

:focus,
:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
  }
}

// 修改vant css
.van-toast--default {
  min-width: 120px;
  width: auto;
  .van-toast__text {
    font-size: 30px;
  }
}

.ml-model-close {
  position: absolute;
  bottom: -108px;
  left: 50%;
  margin-left: -44px;
  padding: 20px;
  img {
    width: 48px;
    height: 48px;
  }
}
// 两个页面公共样式
$mlMainColor: #91440a;
@mixin bgimgFix($url) {
  background-image: url($url);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.ml-login-model {
  border-radius: 0.1333rem;
  overflow: visible;
}
</style>
