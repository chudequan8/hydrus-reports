<template>
  <div class="ml-login-container">
    <div class="input-group">
      <input
        ref="mlMobile"
        class="ml-input"
        v-model="mobile"
        placeholder="请输入手机号"
        type="tel"
        @focus="scrollIntoView(1)"
        @blur="showMobileClear = false"
      />
      <van-icon
        v-show="showMobileClear"
        class="ml-input-clear"
        name="clear"
        @click="clearInput(1)"
      />
    </div>
    <div class="input-group">
      <input
        ref="mlVcode"
        class="ml-input vcode"
        v-model="vcode"
        placeholder="请输入验证码"
        type="number"
        @focus="scrollIntoView(2)"
        @blur="showVcodeClear = false"
      />
      <van-icon
        v-show="showVcodeClear"
        class="ml-input-clear"
        name="clear"
        @click="clearInput(2)"
      />
      <div
        class="input-group-action"
        :class="[disabled ? 'is-disabled' : '']"
        @click="getVcode"
      >
        {{ disabled ? timerNum + 's后重新获取' : '获取验证码' }}
      </div>
    </div>
    <div class="ml-login-btn">
      <img
        @click="login"
        class="ml-login-btn-pic"
        src="../assets/ml_btn_login_default@2x.png"
        alt=""
      />
    </div>
    <div class="ml-tips">
      温馨提示：未注册麦邻租房账号的手机号，登录时将自动注册，且代表您已同意
      <a class="ml-agreement" href="javascript: void(0);">《用户服务协议》</a>
    </div>
  </div>
</template>

<script>
import { getBrowser } from '@/utils/browser'

const browser = getBrowser()

export default {
  name: 'login',
  props: {
    roles: {
      type: String,
      default: 'user'
    }
  },
  data() {
    return {
      vcode: '',
      mobile: '',
      disabled: false,
      timerNum: 59,
      mlAgreementModelVisible: false,
      showMobileClear: false,
      showVcodeClear: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      if (!this.mobile) {
        this.$toast.fail('请输入手机号')
        return false
      }
      if (this.mobile.length !== 11) {
        this.$toast.fail('请输入正确的手机号')
        return false
      }
      if (!this.vcode) {
        this.$toast.fail('请输入验证码')
        return false
      }
    },
    getVcode() {
      if (this.disabled) {
        return false
      }
      if (!this.mobile) {
        this.$toast.fail('请输入手机号')
        return false
      }
      if (this.mobile.length !== 11) {
        this.$toast.fail('请输入正确的手机号')
        return false
      }
    },
    showMlAgreement() {
      this.mlAgreementModelVisible = true
    },
    resetFrom() {
      this.mobile = ''
      this.vcode = ''
    },
    scrollIntoView(type) {
      if (type === 1) {
        this.showMobileClear = !!this.mobile.length
      }
      if (type === 2) {
        this.showVcodeClear = !!this.vcode.length
      }
      if (document.activeElement.tagName.toLowerCase() === 'input') {
        window.setTimeout(() => {
          browser.isIos && document.activeElement.scrollIntoViewIfNeeded()
          browser.isAndroid && document.activeElement.scrollIntoView()
        }, 200)
      }
    },
    clearInput(type) {
      if (type === 1) {
        this.mobile = ''
        this.$refs.mlMobile.focus()
      } else {
        this.vcode = ''
        this.$refs.mlVcode.focus()
      }
    }
  },
  watch: {
    mobile(val) {
      this.showMobileClear = !!val
    },
    vcode(val) {
      this.showVcodeClear = !!val
    }
  }
}
</script>

<style lang="scss" scoped>
.ml-login-container {
  width: 690px;
  padding: 60px 30px;
  .input-group {
    position: relative;
    height: 100px;
    margin-bottom: 40px;
    border: 1px solid #9d6a43;
    border-radius: 0.1333rem;
    font-size: 32px;
    .ml-input {
      background-color: transparent;
      border: 0;
      width: 100%;
      height: 100%;
      padding: 30px;
      &.vcode {
        padding-right: 240px;
        & + .ml-input-clear {
          right: 220px;
        }
      }
    }
    .ml-input-clear {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      color: #999;
    }
    .input-group-action {
      position: absolute;
      top: 0;
      right: 0;
      padding: 30px 20px;
      white-space: nowrap;
      &.is-disabled {
        padding: 20px;
        font-size: 24px;
        line-height: 60px;
        color: #999;
      }
      &::before {
        content: '';
        position: absolute;
        top: 28px;
        left: 0;
        width: 0;
        height: 46px;
        border-left: 1px solid #d8d8d8;
      }
    }
  }
  .ml-login-btn {
    margin-bottom: 20px;
    .ml-login-btn-pic {
      width: 100%;
      height: 100px;
    }
  }
  .ml-tips {
    color: #ffab2c;
    .ml-agreement {
      color: #fa6701;
    }
  }
}
.ml-agreement-model {
  height: 90%;
  overflow: visible;
}
</style>
