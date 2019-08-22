module.exports = {
  // 选项...
  devServer: {
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://m.you.163.com', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
      '/myapi':{
        target:"http://localhost:4000",//代理目标路径
        changeOrigin:true,
        pathRewrite:{
          '^/myapi':'' //路径重写
        }
      }
    }
  }
}