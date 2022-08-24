// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

// export
module.exports = {
  entry: './js/main.js',
  // 결과물(번들)을 반환하는 설정
  output: {
    //path: path.resolve(__dirname, 'dist'),
    //filename: 'main.js',
    clean: true  
  },

  // 번들링 후 결과물의 처라 방식 등 다양한 플러그인들을 설정  
  Plugins: [
    new HtmlPlugin({
      template: './index.html'
    })
  ]
}