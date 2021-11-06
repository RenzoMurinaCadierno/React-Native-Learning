import React from "react"
import { StyleSheet, View } from "react-native"
import Opacity from "../Animation/Opacity"
import OverlayPressable from "../../layout/Overlay/Pressable"
import TextWithScaleTransition from "../Text/TextWithScaleTransition"
import colors from "@app-constants/colors"

function DroppableItem({
  active,
  name,
  title,
  backgroundColor,
  fontScale,
  description,
  onPress,
  onLayout,
  containerStyle,
  titleStyle,
  descriptionStyle,
  titleProps,
  descriptionProps,
  ...rest
}) {
  return (
    <View onLayout={(e) => onLayout?.(name, e.nativeEvent.layout)}>
      <Opacity
        active={active}
        Component={OverlayPressable}
        animated
        colors={[backgroundColor, colors.background.CONTRAST_ALPHA(0.1)]}
        style={[_styles.container, containerStyle]}
        {...rest}
      >
        <TextWithScaleTransition
          show={active}
          type="semi-bold-italic"
          size={fontScale}
          elevation={fontScale / 15}
          color={colors.accent.PRIMARY}
          shadowColor={colors.background.DARK}
          style={[_styles.text, titleStyle]}
          {...titleProps}
        >
          {title}
        </TextWithScaleTransition>
        <TextWithScaleTransition
          show={active}
          type="regular-italic"
          size={fontScale * 0.8}
          elevation={fontScale / 10}
          color={colors.accent.SECONDARY}
          shadowColor={colors.background.DARK}
          style={[_styles.text, descriptionStyle]}
          {...descriptionProps}
        >
          {description}
        </TextWithScaleTransition>
      </Opacity>
    </View>
  )
}

DroppableItem.defaultProps = {
  fontScale: 28,
  titleProps: {},
  subtitleProps: {}
}

export default React.memo(DroppableItem)

const _styles = StyleSheet.create({
  container: { paddingVertical: 8, alignSelf: "stretch" },
  text: { paddingHorizontal: 12, paddingVertical: 1 }
})
