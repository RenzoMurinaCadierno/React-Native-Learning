import React, { useState, createContext } from "react"
import { View, StyleSheet } from "react-native"

export const ActionsContext = createContext(["", () => {}])

export default function ActionsContainer({ children, style, ...rest }) {
  const [activeIcon, setActiveIcon] = useState("")

  const changeActiveIcon = (id) => {
    if (activeIcon === id) setActiveIcon("")
    else setActiveIcon(id)
  }

  return (
    <ActionsContext.Provider value={[activeIcon, changeActiveIcon]}>
      <View style={[_styles.container, style]} {...rest}>
        {children}
      </View>
    </ActionsContext.Provider>
  )
}

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 3,
    marginTop: 5,
    overflow: "hidden"
  }
})
