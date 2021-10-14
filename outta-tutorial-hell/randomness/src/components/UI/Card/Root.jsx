import React, { createContext, useContext } from "react"
import { View, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import colors from "@app-constants/colors"
import useViewPort from "@app-hooks/useViewPort"

export const CardContext = createContext(18) // arbitrary default fontScale

export function RootWithContextProvider(props) {
  const { vw } = useViewPort()

  return (
    <CardContext.Provider value={vw}>
      <Root {...props} />
    </CardContext.Provider>
  )
}

export default function Root({ style, children, ...rest }) {
  const vw = useContext(CardContext)
  const styles = _styles(vw)

  return (
    <LinearGradient
      colors={[colors.background.CONTRAST, colors.accent.PRIMARY_ALPHA(0.25)]}
      style={[styles.container, style]}
      {...rest}
    >
      {children}
    </LinearGradient>
  )
}
keep on adding stuff to Card
const _styles = (vw) =>
  StyleSheet.create({
    container: {
      borderRadius: vw(1),
      backgroundColor: colors.background.CONTRAST,
      padding: vw(3),
      margin: vw(3),
      elevation: vw(1),
      alignSelf: "stretch"
    }
  })

// export default function Root({ style, children, ...rest }) {
//   const { vw } = useViewPort()
//   const styles = _styles(vw)

//   return (
//     <LinearGradient
//       colors={[colors.background.CONTRAST, colors.accent.PRIMARY_ALPHA(0.25)]}
//       style={[styles.container, style]}
//       {...rest}
//     >
//       {children}
//     </LinearGradient>
//   )
// }

// const _styles = (vw) =>
//   StyleSheet.create({
//     container: {
//       borderRadius: vw(1),
//       backgroundColor: colors.background.CONTRAST,
//       padding: vw(3),
//       margin: vw(3),
//       elevation: vw(1),
//       alignSelf: "stretch"
//     }
//   })
