import React from "react"
import { Animated } from "react-native"

export default function withCreateAnimatedComponent(WrappedComponent) {
  class WithCreateAnimatedComponent extends React.Component {
    static displayName = `WithCreateAnimatedComponent(${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return Animated.createAnimatedComponent(WithCreateAnimatedComponent)
}
