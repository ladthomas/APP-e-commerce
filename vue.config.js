module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          isCustomElement: (tag) => tag.startsWith("ion-"),
        };
        return options;
      });
  },
  devServer: {
    Proxy: "https://3540-160-155-147-112.ngrok-free.app",
  }
};
