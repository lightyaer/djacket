module.exports = {
  devServer: {
    port: 8594,
  },
  pwa: {
    name: "djacket",
    // themeColor: "#4DBA87",
    // msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "dev/sw.js",
      // ...other Workbox options...
    },
  },
};
