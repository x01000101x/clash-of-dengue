const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: "[name].[contenthash].js",
    },
  },
  chainWebpack: (config) => {
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    // Mendaftarkan plugin mini-css-extract-plugin jika belum terdaftar
    config.plugin("extract-css").use(MiniCssExtractPlugin, [
      {
        filename: "[name].[contenthash].css",
      },
    ]);
  },
  pwa: {
    name: "COD Clash Of Dengue",
    short_name: "Clash Of Dengue",
    themeColor: "#EB008B",
    msTileColor: "#2D93A5",
    manifestPath: "manifest.json",
    iconPaths: {
      favicon32: "img/icons/logo32.png",
      favicon16: "img/icons/logo16.png",
      appleTouchIcon: "img/icons/logo152.png",
      maskIcon: "img/icons/logo32.png",
      msTileImage: "img/icons/logo152.png",
    },
    workboxOptions: {
      skipWaiting: true,
    },
  },
});
