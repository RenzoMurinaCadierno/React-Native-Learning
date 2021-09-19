import { useWindowDimensions } from "react-native"

export default function useViewPort() {
  const { width, height } = useWindowDimensions()

  return { vw: scale(width / 100), vh: scale(height / 100) }
}

function scale(factor) {
  return (units) => units * factor
}
