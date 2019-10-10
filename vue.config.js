const px2rem = require('postcss-plugin-px2rem')

const postcss = px2rem({
  rootValue: 37.5,
  selectorBlackList: ['body', '.van-circle__layer'],
  mediaQuery: true
})

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
}
