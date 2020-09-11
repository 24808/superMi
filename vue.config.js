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
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://mall-pre.springboot.cn",
        changeOrigin: true,
        pathRewrite: {
          "/api": "",
        },
      },
    },
  },
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
