function _getColorDistribution(name, hex, rgb) {
  return {
    [name]: hex,
    [name + "_RGB"]: rgb,
    [name + "_RGB_FORMATTED"]: `rgb(${rgb})`,
    [name + "_ALPHA"]: (alphaValue) => `rgba(${rgb}, ${alphaValue ?? 1})`
  }
}

const colors = {
  main: {
    ..._getColorDistribution("PRIMARY", "#3885d1", "56, 133, 209"),
    ..._getColorDistribution("SECONDARY", "#8a38d1", "138, 56, 209"),
    ..._getColorDistribution("DANGER", "#ff4a36", "255, 74, 54")
  },
  accent: {
    ..._getColorDistribution("PRIMARY", "#81dbd2", "129, 219, 210"),
    ..._getColorDistribution("SECONDARY", "#ecbbfa", "236, 187, 250")
  },
  background: {
    ..._getColorDistribution("PRIMARY", "#fffafa", "255, 250, 250"),
    ..._getColorDistribution("SECONDARY", "#b6d0e2", "182, 208, 226"),
    ..._getColorDistribution("CONTRAST", "#f8f8ff", "248, 248, 255"),
    ..._getColorDistribution("DARK", "#121212", "18, 18, 18")
  }
}

export default colors
