import React from "react"
import { View, StyleSheet } from "react-native"

export const ActionsContext = React.createContext([{}, () => {}])

export default function ActionsContainer({ children, style, ...rest }) {
  return (
    <View style={[_styles.container, style]} {...rest}>
      {children}
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5
  }
})

// import React, { useContext, useState } from "react"
// import { View, StyleSheet } from "react-native"
// import useLayout from "@app-hooks/useLayout"

// export const ActionsContext = React.createContext([{}, () => {}])

// function ActionContextProvider({ children }) {
//   const layoutStateAndSetter = useLayout()

//   return (
//     <ActionsContext.Provider value={layoutStateAndSetter}>
//       {children}
//     </ActionsContext.Provider>
//   )
// }

// export default function ActionsContainer({ children, style, ...rest }) {
//   const onLayoutChange = useContext(ActionsContext)[1]

//   return (
//     <ActionContextProvider>
//       <View
//         style={[_styles.container, style]}
//         onLayout={onLayoutChange}
//         {...rest}
//       >
//         {children}
//       </View>
//     </ActionContextProvider>
//   )
// }

// const _styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     marginTop: 5
//   }
// })
