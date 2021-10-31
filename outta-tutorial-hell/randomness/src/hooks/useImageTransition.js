import { useState } from "react"
import animations from "@app-constants/animations"
import useLinearAnimatedValue from "@app-hooks/useLinearAnimatedValue"

const errorImageSource = require("@app-assets/images/imgNotFound.jpg")

export default function useImageTransition({
  transitionAnimation = animations.images.opacity.IN,
  errorSource = errorImageSource
} = {}) {
  const [errorImgSrc, setErrorImgSrc] = useState(null)
  const [loading, setLoading] = useState(true)

  const animatedValue = useLinearAnimatedValue({
    active: !loading,
    activeAnimation: transitionAnimation,
    animateWhenActiveOnly: true
  })

  const onLoad = () => setLoading(false)

  const onError = () => {
    setErrorImgSrc(errorSource)
    onLoad()
  }

  return { onLoad, onError, errorImgSrc, loading, animatedValue }
}
