export const types = {
  main: {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY",
    DANGER: "DANGER"
  },
  accent: {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY"
  },
  background: {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY",
    CONTRAST: "CONTRAST",
    DARK: "DARK"
  }
}

const colors = {
  main: {
    ..._getColorDistribution(types.main.PRIMARY, "#3885d1", "56, 133, 209"),
    ..._getColorDistribution(types.main.SECONDARY, "#8a38d1", "138, 56, 209"),
    ..._getColorDistribution(types.main.DANGER, "#ff4a36", "255, 74, 54")
  },
  accent: {
    ..._getColorDistribution(types.accent.PRIMARY, "#81dbd2", "129, 219, 210"),
    ..._getColorDistribution(types.accent.SECONDARY, "#ecbbfa", "236, 187, 250")
  },
  background: {
    ..._getColorDistribution(
      types.background.PRIMARY,
      "#fffafa",
      "255, 250, 250"
    ),
    ..._getColorDistribution(
      types.background.SECONDARY,
      "#b6d0e2",
      "182, 208, 226"
    ),
    ..._getColorDistribution(
      types.background.CONTRAST,
      "#f8f8ff",
      "248, 248, 255"
    ),
    ..._getColorDistribution(types.background.DARK, "#121212", "18, 18, 18")
  }
}

function _getColorDistribution(name, hex, rgb) {
  return {
    [name]: hex,
    [name + "_RGB"]: rgb,
    [name + "_RGB_FORMATTED"]: `rgb(${rgb})`,
    [name + "_ALPHA"]: (alphaValue) => `rgba(${rgb}, ${alphaValue ?? 1})`
  }
}

export function reverseType(type) {
  const _type = type.toUpperCase()

  switch (_type) {
    case types.background.CONTRAST:
      return types.background.DARK
    case types.background.DARK:
      return types.background.PRIMARY
    case types.main.PRIMARY:
      return types.main.SECONDARY
    case types.main.SECONDARY:
    default:
      return types.main.PRIMARY
  }
}

export default colors
