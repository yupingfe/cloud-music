// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          'tab-font-size': 'font-size-lg',
          'cell-group-title-font-size': 'font-size-lg',
          // hack: `true; @import "assets/common/resetui.less";`
        },
      },
    },
  },
};