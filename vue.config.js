module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      '/api': {
        target: 'www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}