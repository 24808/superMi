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
      "/myapi": {
        target: "http://mall-pre.springboot.cn",
        changeOrigin: true,
        pathRewrite: {
          "/myapi": "",
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
