import React from "react"
import Layout from "@app-components/layout"
import Enhanced from "@app-components/enhanced"
import UI from "@app-components/UI"
import withViewPort from "../hoc/withViewPort"

class ErrorBoundary extends React.Component {
  state = { hasErrored: false, error: "" }

  static getDerivedStateFromError(error) {
    return { hasErrored: true, error }
  }

  componentDidCatch(error) {
    return { hasErrored: true, error }
  }

  reset() {
    this.setState({ hasErrored: true, error: "" })
  }

  render() {
    if (this.state.hasErrored) {
      const { vw, vh } = this.props

      if (__DEV__) console.log(this.state.error)

      return (
        <Layout.Screen>
          <Layout.Screen.Placeholder
            title="Something went wrong x_x"
            subtitle="We do not know why it happened :/\nSo, it would be great if you could contact us to tell us what you remember doing to trigger this error :D\nMeanwhile, we can (hopefully) take you back to home screen the old fashioned way."
            size={vw(5)}
            style={{ marginHorizontal: vw(4), borderWidth: 1 }}
            titleStyle={{ marginBottom: vh(4) }}
          >
            <Enhanced.Animated.Pressable style={{ marginTop: vh(4) }}>
              <UI.Text size={vw(4.5)} type="semi-bold">
                Take me back
              </UI.Text>
            </Enhanced.Animated.Pressable>
          </Layout.Screen.Placeholder>
        </Layout.Screen>
      )
    }

    return this.props.children
  }
}

export default withViewPort(ErrorBoundary)
