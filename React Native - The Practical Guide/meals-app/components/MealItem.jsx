import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native"

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress
}) {
  return (
    <View style={_styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[_styles.row, _styles.header]}>
          <ImageBackground source={{ uri: imageUrl }} style={_styles.bgImg}>
            <View style={_styles.titleContainer}>
              <Text numberOfLines={1} style={_styles.title}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={[_styles.row, _styles.detail]}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    backgroundColor: "lightgray",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: "2%"
  },
  row: { flexDirection: "row" },
  header: { height: "85%" },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  bgImg: { width: "100%", height: "100%", justifyContent: "flex-end" },
  detail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  }
})
