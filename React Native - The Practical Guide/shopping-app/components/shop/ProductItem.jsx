import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import TouchableComponent from "../../UI/TouchableComponent"
import Card from "../../UI/Card"

export default function ProductItem(props) {
  return (
    <Card style={_styles.container}>
      {/* cannot have Touchable as single view child */}
      <View style={_styles.touchableContainer}>
        {/* `useForeground` enables ripple effect over all elements */}
        <TouchableComponent onPress={props.onSelect} useForeground>
          {/* cannot have multiple elements as Touchable children */}
          <View>
            <View style={_styles.imageContainer}>
              <Image style={_styles.image} source={{ uri: props.image }} />
            </View>
            <View style={_styles.textsContainer}>
              <Text style={_styles.title}>{props.title}</Text>
              <Text style={_styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={_styles.buttonsContainer}>{props.children}</View>
          </View>
        </TouchableComponent>
      </View>
    </Card>
  )
}

const _styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 20
  },
  touchableContainer: {
    overflow: "hidden",
    borderRadius: 10
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  image: { width: "100%", height: "100%" },
  textsContainer: { alignItems: "center", height: "17%", padding: 10 },
  title: { fontSize: 18, marginVertical: 2, fontFamily: "open-sans-bold" },
  price: { fontSize: 14, color: "#888", fontFamily: "open-sans" },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20
  }
})
