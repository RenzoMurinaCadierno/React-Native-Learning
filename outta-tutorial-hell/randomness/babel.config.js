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
            "@screens": ["./src/screens"],
            "@navigation": ["./src/navigation"],
            "@constants": ["./src/constants"],
            "@components": ["./src/components"],
            "@hooks": ["./src/hooks"],
            "@hoc": ["./src/hoc"]
          }
        }
      ]
    ]
  }
}
