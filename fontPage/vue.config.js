module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.31.225:8058", // 测试
        // target: 'http://192.168.31.57:10010', // 测试
        // target: 'http://192.168.31.135:6677', // jss
        // target: 'http://192.168.31.75:10010', // yx 本地
        // target: 'http://192.168.31.116:10010', // byl 本地
        // target: 'http://192.168.31.202:10010', // yx 虚拟机
        // target: 'http://192.168.31.181:6677',// 胡润元
        changeOrigin: true,
        pathRewrite: {
          // 重写路径
          "^/api": ""
        }
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      patterns: [],
      preProcessor: "scss"
    }
  },
  css: {
    // 向所有 Sass 样式传入共享的全局变量：
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        prependData: `@import "~@/styles/index.scss";`
      }
    }
  }
};
