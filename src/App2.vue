<template>
  <div id="app">
    <report-head :percent="percent" :score="activeScore"></report-head>
    <card style="margin-top: -102px">
      <div class="target-user-body">
        <div class="target-user-avatar"></div>
        <div class="target-user-info">
          <p class="target-user-name">李明</p>
          <p class="target-user-idcard">身份证号：2206**********0130</p>
          <div
            class="target-user-supplement"
            :style="{ color: activeScore.color }"
          >
            <span class="supplement-item">黑名单指数70</span>
            <span
              class="supplement-item splitline"
              :style="{ borderColor: activeScore.color }"
            ></span>
            <span class="supplement-item">欺诈等级3</span>
          </div>
        </div>
      </div>
    </card>
    <card title="检测解读">
      <div class="unscramble-block">
        <h4 class="unscramble-title">● 黑名单指数</h4>
        <p class="unscramble-content">
          立方黑卡是根据网络行为大数据出具的面向社会人群的综合报告，风险指数经供参考，指数越高，表明借贷信用越差，被拒的可能性越大
        </p>
      </div>
      <div class="unscramble-block">
        <h4 class="unscramble-title">● 评价表</h4>
        <div class="unscramble-content unscramble-table">
          <div class="unscramble-table-row">
            <p class="unscramble-table-item unscramble-table-title">分数</p>
            <p class="unscramble-table-item">0-25</p>
            <p class="unscramble-table-item">26-85</p>
            <p class="unscramble-table-item">86-100</p>
          </div>
          <div class="unscramble-table-row">
            <p class="unscramble-table-item unscramble-table-title">评价</p>
            <p class="unscramble-table-item">优</p>
            <p class="unscramble-table-item">良</p>
            <p class="unscramble-table-item">差</p>
          </div>
          <div class="unscramble-table-row">
            <p class="unscramble-table-item unscramble-table-title">等级</p>
            <p class="unscramble-table-item">1</p>
            <p class="unscramble-table-item">2</p>
            <p class="unscramble-table-item">3</p>
          </div>
        </div>
      </div>
    </card>
    <card title="直接联系人">
      <div class="direct-contact">
        <div class="contact-block space-between">
          <van-circle
            v-model="currentRate"
            :rate="targetRate"
            :speed="50"
            color="#6BBBF3"
            layer-color="#F1F1F1"
          >
            <div class="van-circle__text">
              <p class="target-count">{{ text }}</p>
              <p class="target-name">黑名单占比</p>
            </div>
          </van-circle>
          <van-circle
            v-model="currentRate"
            :rate="targetRate"
            :speed="50"
            color="#FF936A"
            layer-color="#F1F1F1"
          >
            <div class="van-circle__text">
              <p class="target-count">{{ text }}</p>
              <p class="target-name">逾期占比</p>
            </div>
          </van-circle>
        </div>
        <div class="contact-block space-between">
          <div class="contact-target">
            <p class="target-count">62</p>
            <p class="target-name">黑名单个数</p>
          </div>
          <div class="contact-target">
            <p class="target-count">25</p>
            <p class="target-name">逾期个数</p>
          </div>
          <div class="contact-target">
            <p class="target-count">11</p>
            <p class="target-name">逾期M3+个数</p>
          </div>
        </div>
      </div>
    </card>
    <card title="间接联系人">
      <div class="contact-block space-between">
        <div class="contact-target">
          <p class="target-count">62</p>
          <p class="target-name">黑名单个数</p>
        </div>
        <div class="contact-target">
          <p class="target-count">25</p>
          <p class="target-name">逾期个数</p>
        </div>
        <div class="contact-target">
          <p class="target-count">11</p>
          <p class="target-name">逾期M3+个数</p>
        </div>
      </div>
    </card>
    <card title="主叫联系人">
      <div class="contact-block space-between">
        <div class="contact-target">
          <p class="target-count">62</p>
          <p class="target-name">联系人数</p>
        </div>
        <div class="contact-target">
          <p class="target-count">25</p>
          <p class="target-name">联系人黑名单个数</p>
        </div>
        <div class="contact-target">
          <p class="target-count">11</p>
          <p class="target-name">联系人逾期个数</p>
        </div>
      </div>
    </card>
    <card title="与同行通话">
      <div class="contact-block space-between">
        <div class="contact-target">
          <p class="target-count">62</p>
          <p class="target-name">与同行通话次数</p>
        </div>
        <div class="contact-target">
          <p class="target-count">25</p>
          <p class="target-name">与同行通话秒数</p>
        </div>
      </div>
    </card>
    <card title="与法院/律师通话">
      <div class="contact-block space-between">
        <div class="contact-target">
          <p class="target-count">62</p>
          <p class="target-name">与法院通话次数</p>
        </div>
        <div class="contact-target">
          <p class="target-count">25</p>
          <p class="target-name">与律师通话秒数</p>
        </div>
      </div>
    </card>
    <card title="风险名单">
      <ul class="risk-list">
        <li class="risk-list-item">
          <p class="risk-origin">宜信</p>
          <p class="risk-detail">命中手机号码138****9090</p>
          <p class="risk-detail">风险原因——资料虚假</p>
        </li>
        <li class="risk-list-item">
          <p class="risk-origin">宜信</p>
          <p class="risk-detail">命中手机号码138****9090</p>
          <p class="risk-detail">风险原因——资料虚假</p>
        </li>
        <li class="risk-list-item">
          <p class="risk-origin">宜信</p>
          <p class="risk-detail">命中手机号码138****9090</p>
          <p class="risk-detail">风险原因——资料虚假</p>
        </li>
      </ul>
    </card>
  </div>
</template>

<script>
import ReportHead from './components/ReportHead'
import Card from './components/Card'
const scoreList = [
  { score: 0, color: '#FF5252', text: '较差' },
  { score: 60, color: '#52E2FF', text: '良' },
  { score: 80, color: '#63FFA2', text: '优' }
]
export default {
  name: 'reportContainer',
  components: { ReportHead, Card },
  data() {
    return {
      percent: 70,
      currentRate: 0,
      targetRate: 0,
      activeScore: scoreList.slice(0, 1)[0],
      cardList: [],
      slideList: []
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  },
  watch: {
    slideList: {
      handler(val) {
        if (val[2]) {
          this.targetRate = 80
        }
      }
    }
  },
  created() {
    console.log(JSON.parse(document.body.attributes['data-data'].value))
    for (let i = scoreList.length - 1; i >= 0; i--) {
      if (this.percent >= scoreList[i].score) {
        this.activeScore = scoreList.slice(i, i + 1)[0]
        break
      }
    }
  },
  mounted() {
    this.cardList = this.$children.filter(
      children => children.$options.name === Card.name
    )
    this.slideList = new Array(this.cardList.length).fill(0)
    this.scrollFunc()
    this.$el.addEventListener('scroll', this.scrollFunc)
  },

  methods: {
    scrollFunc() {
      if (this.slideList[this.slideList.length - 1]) {
        this.$el.removeEventListener('scroll', this.scrollFunc)
      }
      for (let i = 0; i < this.slideList.length; i++) {
        if (this.slideList[i]) {
          continue
        }
        if (
          this.$el.scrollTop + document.body.clientHeight >=
          this.cardList[i].$el.offsetTop
        ) {
          this.slideList.splice(i, 1, 1)
          this.cardList[i].$el.className =
            this.cardList[i].$el.className + ' animated slideInUp'
        }
      }
    }
  }
}
</script>
