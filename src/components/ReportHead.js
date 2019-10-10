import { debounce } from '@/utils'
export default {
  name: 'pageHead',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    score: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      scoreClass: [],
      dotCount: 18,
      dotStyle: []
    }
  },
  methods: {
    initCalcResult() {
      this.initDotPosition()
      this.initDotAnime()
      window.addEventListener('resize', this.initDotPosition)
    },
    initDotPosition: debounce(
      function() {
        const _this = this
        // 因为长宽相等，所以计算一个就行
        const dotContainerCenter =
          _this.$refs.dotContainer.getBoundingClientRect().width / 2
        _this.dotStyle = []
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
      },
      300,
      true
    ),
    initDotAnime() {
      const _this = this
      const curColor = _this.score.color
      const curRate = Math.floor((_this.percent / 100) * _this.dotCount)
      new Promise(resolve => {
        if (curRate === 0) {
          resolve()
        }
        for (let i = 1, j = Math.min(_this.dotCount, curRate); i <= j; i++) {
          setTimeout(() => {
            // _this.dotStyle[i - 1].borderColor = curColor
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
  },
  render() {
    return (
      <div class="report-head">
        <div class="calc__result-container">
          <ul class="calc__result-bg" ref="dotContainer">
            {new Array(this.dotCount)
              .fill(1)
              .map((item, index) => index)
              .map(n => (
                <li
                  key={n}
                  class="calc__result-dot"
                  style={this.dotStyle[n]}
                ></li>
              ))}
          </ul>
          <p
            class={['calc__result-title', ...this.scoreClass]}
            style={{
              color: this.score.color,
              visibility: this.scoreClass.length ? 'visible' : 'hidden'
            }}
          >
            {this.score.text}
          </p>
          <p class="calc__result-info">评测结果</p>
        </div>
        <p class="report-date">报告时间2018-09-30</p>
      </div>
    )
  }
}
