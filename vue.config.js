module.exports = {
  lintOnSave: false,
  filenameHashing: false,
  // assetsDir: "static", // 放置生成的靜態資源 (js、css、img、fonts) 的目錄。default: ''
 // publicPath: "./",
  //publicPath: "/Data_System",
  publicPath: process.env.NODE_ENV === "production"
  ? '/Data_System'
  : './',
  pages: {
    front: {
      entry: "src/front/main.js", // 配置入口js檔案
      template: "./public/front.html", // 主頁面
      filename: "front.html", // 打包後的html檔名稱
      // title: "前台測試", // 打包後的.html中<title>標籤的文字內容
      chunks: ["chunk-vendors", "chunk-common", "front"],
    },
    back: {
      entry: "src/back/main.js", // 配置入口js檔案
      template: "./public/back.html", // 主頁面
      filename: "back.html", // 打包後的html檔名稱
      // title: "不動產前台", // 打包後的.html中<title>標籤的文字內容
      chunks: ["chunk-vendors", "chunk-common", "back"],
    },
  },
  devServer: {
    index: "front.html",
    open: true,
    port: 8080, // 埠號
    host: "localhost",
    // historyApiFallback: {
    //  index: '/front.html'
    //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
    // },
    proxy: {
      "/api2": {
        target: "http://localhost:3000/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api2": "",
        },
      },
      "/outapi": {
        target: "https://roadsafety.tw/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/outapi": "",
        },
      },
    },
  },
};
//console.log(publicPath)
