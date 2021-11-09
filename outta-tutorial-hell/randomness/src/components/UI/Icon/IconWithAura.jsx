import React from "react"
import { View, StyleSheet } from "react-native"
import Aura from "./Aura"
import IconWithCircle from "./IconWithCircle"
import { Color } from "@app-utils/functions"

function IconWithAura({
  type, // 'primary', 'secondary'
  size,
  aura,
  auraColor,
  containerStyle,
  iconContainerStyle,
  auraStyle,
  containerProps,
  iconContainerProps,
  auraProps,
  ...rest
}) {
  const styles = _styles(size)

  return (
    <View style={[styles.container, containerStyle]} {...containerProps}>
      {aura && (
        <Aura
          radius={size * 0.9}
          color={Color.getByTypeOrProp(type, auraColor)}
          style={auraStyle}
          {...auraProps}
        />
      )}
      <IconWithCircle
        type={type}
        size={size}
        containerStyle={[styles.iconContainer, iconContainerStyle]}
        containerProps={iconContainerProps}
        {...rest}
      />
    </View>
  )
}

IconWithAura.defaultProps = {
  size: 20,
  aura: true,
  containerProps: {},
  auraProps: {}
}

export default React.memo(IconWithAura)

const _styles = (size) =>
  StyleSheet.create({
    container: {
      width: size * 1.75,
      height: size * 1.75,
      position: "relative"
    },
    iconContainer: StyleSheet.absoluteFill
  })
