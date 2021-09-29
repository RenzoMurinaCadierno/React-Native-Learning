function getColorDistribution(name, hex, rgb) {
  return {
    [name]: hex,
    [name + "_RGB"]: rgb,
    [name + "_RGB_FORMATTED"]: `rgb(${rgb})`,
    [name + "_ALPHA"]: (alphaValue) => `rgba(${rgb}, ${alphaValue ?? 1})`
  }
}

const colors = {
  main: {
    ...getColorDistribution("PRIMARY", "#3885d1", "56, 133, 209"),
    ...getColorDistribution("SECONDARY", "#8a38d1", "138, 56, 209"),
    ...getColorDistribution("DANGER", "#ff4a36", "255, 74, 54")
  },
  accent: {
    ...getColorDistribution("PRIMARY", "#81dbd2", "129, 219, 210"),
    ...getColorDistribution("SECONDARY", "#ecbbfa", "236, 187, 250")
  },
  background: {
    ...getColorDistribution("PRIMARY", "#fffafa", "255, 250, 250"),
    ...getColorDistribution("SECONDARY", "#b6d0e2", "182, 208, 226"),
    ...getColorDistribution("CONTRAST", "#f8f8ff", "248, 248, 255"),
    ...getColorDistribution("DARK", "#121212", "18, 18, 18")
  }
}

export default colors
