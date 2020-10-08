// module.exports = {
//   devServer: {
//     host: "localhost",
//     port: 8080,
//     proxy: {
//       '/api': {
//         target: 'https://mall-pre.springboot.cn',
//         changeOrigin: true,
//         pathRewrite: {
//           '/api': ''
//         }
//       }
//     }
//   }
// }

module.exports = {
  //服务
  // devServer: {
  //   host: "localhost",
  //   port: 8080,
  //   disableHostCheck: true,
  //   proxy: {
  //     "/api": {
  //       target: "http://mall-pre.springboot.cn",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "/api": "",
  //       },
  //     },
  //   },
  //   // publicPath: "/app", //设置子路径
  // },
  // productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // outputDir: "desc", //打包后的文件夹
  // indexPath: 'index2.html' //指定生成的 index.html 的输出路径
  // chainWebpack: config => {
  //   config.plugins.delete('prefetch')
  // }
};
// 代理
// module.exports = {
//   devServer: {
//     host: "localhost",
//     port: 8080,
//     proxy: {
//       "/api": {
//         target: "http://mall-pre.springboot.cn",
//         changeOrigin: true,
//         pathRewrite: {
//           "/api": "",
//         },
//       },
//     },
//   },
// };
