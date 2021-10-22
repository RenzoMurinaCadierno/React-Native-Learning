import React from "react"
import { FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import UI from "@app-components/UI"
import animations from "@app-constants/animations"

const colorProps = {
  activeAnimation: animations.icons.color.IN,
  inactiveAnimation: animations.icons.color.OUT
}
test renders, onLayout, click same icon to inactivate, keep on with caRD
function IconList({ fontScale, onIconPress, ...rest }) {
  const { icons, activeSectionId } = useSelector((state) => state.projects)

  const renderItem = ({ item }) => (
    <UI.Icon.WithSpring
      active={item.id === activeSectionId}
      name={item.name}
      activeColor={item.activeColor}
      inactiveColor={item.inactiveColor}
      size={fontScale}
      style={_styles.icon}
      onPress={() => onIconPress(item.id)}
      colorProps={colorProps}
    />
  )

  return (
    <FlatList
      data={icons}
      renderItem={renderItem}
      style={_styles.container}
      contentContainerStyle={_styles.contentContainer}
      {...rest}
    />
  )
}

export default React.memo(IconList)

const _styles = StyleSheet.create({
  container: { width: "100%", flex: 1 },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: { marginVertical: "15%" }
})
