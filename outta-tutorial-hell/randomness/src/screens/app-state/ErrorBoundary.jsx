import React from "react"
import { View } from "react-native"
import { reloadAsync } from "expo-updates"
import Layout from "@app-components/layout"
import UI from "@app-components/UI"
import withViewPort from "@app-hoc/withViewPort"
import colors from "@app-constants/colors"

class ErrorBoundary extends React.Component {
  constructor() {
    super()
    this.state = { hasErrored: false, error: "" }
    this.reloadApp = this.reloadApp.bind(this)
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true, error }
  }

  componentDidCatch(error) {
    return { hasErrored: true, error }
  }

  async reloadApp() {
    await reloadAsync()
  }

  render() {
    if (!this.state.hasErrored) return this.props.children

    const { vw, vh } = this.props

    const styles = _createStyles(vw, vh)

    if (__DEV__) console.log(this.state.error)

    return (
      <Layout.Screen.WithMountAnimation>
        <Layout.Screen.Placeholder
          title="You found the hidden screen!"
          subtitle="Congratulations! :D\nSomething you've done in the app triggered what you are seeing here.\nYou've beaten us, the dev team, as we forgot how to access this screen not so long after we created it :c\nWould you be so kind to contact us to tell us what you did to reach it?\nMeanwhile, we can pat you on your shoulder and warp you back to app's startup screen (hopefully).\nP.S.: If QA asks, it's a feature."
          size={vw(5)}
          style={styles.placeholder.container}
          titleStyle={styles.placeholder.title}
        >
          <View style={styles.pressable.container}>
            <UI.Pressable
              color={colors.background.PRIMARY_ALPHA(0.2)}
              onPress={this.reloadApp}
            >
              <UI.Text
                size={vw(5)}
                type="semi-bold"
                style={styles.pressable.text}
              >
                Take me there
              </UI.Text>
            </UI.Pressable>
          </View>
        </Layout.Screen.Placeholder>
      </Layout.Screen.WithMountAnimation>
    )
  }
}

export default withViewPort(ErrorBoundary)

function _createStyles(vw, vh) {
  return {
    placeholder: {
      container: { marginHorizontal: vw(4) },
      title: { marginBottom: vh(3) }
    },
    pressable: {
      container: {
        marginTop: vh(3),
        borderWidth: vw(0.5),
        borderRadius: vw(15),
        borderColor: colors.main.PRIMARY,
        backgroundColor: colors.accent.PRIMARY_ALPHA(0.3),
        overflow: "hidden"
      },
      text: {
        paddingHorizontal: vw(5),
        paddingVertical: vh(2),
        letterSpacing: vw(0.25)
      }
    }
  }
}
