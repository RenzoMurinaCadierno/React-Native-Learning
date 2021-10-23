module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@app-screens": ["./src/screens"],
            "@app-navigation": ["./src/navigation"],
            "@app-constants": ["./src/constants"],
            "@app-components": ["./src/components"],
            "@app-hooks": ["./src/hooks"],
            "@app-hoc": ["./src/hoc"],
            "@app-store": ["./src/store"],
            "@app-context": ["./src/context"],
            "@app-models": ["./src/models"],
            "@app-utils": ["./src/utils"],
            "@app-assets": ["./assets"]
          }
        }
      ]
    ]
  }
}
