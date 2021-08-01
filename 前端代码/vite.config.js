const path = require("path");
// vite.config.js # or vite.config.ts
console.log(path.resolve(__dirname, "./src"));

module.exports = {
  chainWebpack:(config)=>{
    config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
      //根据需要进行配置
        .set('@',resolve('./src'))
        .set('assets',resolve('.src/assets'))
        .set('components',resolve('./src/components'))
        .set('views',resolve('.src/views'))},

  alias: {
    // 键必须以斜线开始和结束
    "/@/": path.resolve(__dirname, "./src"),
  },
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "dist",
  port: 3000,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  //   optimizeDeps: {
  //     include: ["moment", "echarts", "axios", "mockjs"],
  //   },
  proxy: {
    // 如果是 /api 打头，则访问地址如下
    "/api": {
      target: "http://82.156.9.146:10230/NPMS-PROVIDER/npmstest/",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
  devServer:{
    port: 8081,	// 端口
      proxy:{
          '/service':{ // 路径中有 /service 的请求都会走这个代理,可以自己定义一个,下面移除即可
              target:'http://www.test.com:555',    // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
              secure:false,
              changeOrigin:true,  // 开启代理，在本地创建一个虚拟服务端
              ws:true,       // 是否启用  websockets;
              pathRewrite:{   // 去掉 路径中的  /service  的这一截
                  '^/service':''
              }
          }
      }
  },

};
