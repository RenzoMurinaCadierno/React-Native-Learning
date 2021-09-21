import React from "react"
import { StyleSheet, Pressable } from "react-native"
import colors from "../../../constants/colors"
import Shadow from "./Shadow"
import IconWithHover from "./IconWithHover"
import Base from "./Base"

export default function Icon({
  containerStyle,
  iconStyle,
  size,
  color,
  elevate,
  onPress,
  active,
  ...rest
}) {
  const styles = _styles(size)

  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      {elevate ? (
        <>
          <IconWithHover
            size={size}
            activeColor={color}
            style={iconStyle}
            active={active}
            {...rest}
          />
          <Shadow
            syncWithHoverAnimation={active}
            width={size / 3}
            height={size / 5}
            style={styles.shadow}
          />
        </>
      ) : (
        <Base size={size} color={color} style={iconStyle} {...rest} />
      )}
    </Pressable>
  )
}

Icon.defaultProps = { color: colors.PRIMARY, size: 18 }

const _styles = (size) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      margin: size / 8,
      position: "relative"
    },
    shadow: {
      position: "absolute",
      bottom: -(size / 4),
      borderRadius: size / 2,
      elevation: 4
    }
  })
