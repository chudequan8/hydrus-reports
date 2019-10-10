<template>
  <div class="report-head">
    <div class="calc__result-container">
      <ul class="calc__result-bg" ref="dotContainer">
        <li
          class="calc__result-dot"
          v-for="(n, i) in 18"
          :key="n"
          :style="dotStyle[i]"
        ></li>
      </ul>
      <p
        class="calc__result-title"
        :class="scoreClass"
        :style="{
          color: activeScore.color,
          visibility: scoreClass.length ? 'visible' : 'hidden'
        }"
      >
        {{ activeScore.text }}
      </p>
      <p class="calc__result-info">下款率评估</p>
    </div>
    <p class="report-date">
      报告时间2018-09-30
    </p>
    <div class="report-head-supplement">
      <span>黑名单指数70</span>
      <span>欺诈等级3</span>
    </div>
  </div>
</template>

<script>
const scoreList = [
  {
    score: 0,
    color: '#FF5252',
    text: '较差'
  },
  {
    score: 60,
    color: '#52E2FF',
    text: '良'
  },
  {
    score: 80,
    color: '#63FFA2',
    text: '优'
  }
]
export default {
  name: 'pageHead',
  data() {
    return {
      percent: 50,
      activeScore: scoreList.slice(0, 1)[0],
      scoreClass: [],
      dotCount: 18,
      dotStyle: []
    }
  },
  methods: {
    initCalcResult() {
      const _this = this
      // 因为长宽相等，所以计算一个就行
      const dotContainerCenter =
        _this.$refs.dotContainer.getBoundingClientRect().width / 2
      for (let i = scoreList.length - 1; i >= 0; i--) {
        if (_this.percent >= scoreList[i].score) {
          _this.activeScore = scoreList.slice(i, i + 1)[0]
          break
        }
      }

      for (let i = 0; i < _this.dotCount; i++) {
        _this.dotStyle.push({
          transform: `translateX(${-Math.sin(
            (((360 / _this.dotCount) * Math.PI) / 180) * i
          ) *
            dotContainerCenter +
            dotContainerCenter}px) 
              translateY(${Math.cos(
                (((360 / _this.dotCount) * Math.PI) / 180) * i
              ) *
                dotContainerCenter +
                dotContainerCenter}px) 
              rotate(${(360 / _this.dotCount) * i}deg)`
        })
      }

      const curColor = _this.activeScore.color
      const curRate = (_this.percent / 100) * _this.dotCount
      new Promise(resolve => {
        for (let i = 1, j = Math.min(_this.dotCount, curRate); i <= j; i++) {
          setTimeout(() => {
            _this.dotStyle[i - 1].borderColor = curColor
            // _this.$forceUpdate()
            _this.$refs.dotContainer.children[
              i - 1
            ].style.borderColor = curColor
            if (i === j) {
              resolve()
            }
          }, 150 * i)
        }
      }).then(() => {
        setTimeout(() => {
          _this.scoreClass = ['animated', 'bounceIn']
        }, 300)
      })
    }
  },
  mounted() {
    this.initCalcResult()
  }
}
</script>
