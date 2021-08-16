import React from "react"
import { View, Text, Image, StyleSheet, Button } from "react-native"
import TouchableComponent from "../../UI/TouchableComponent"
import colors from "../../constants/colors"
import * as sharedStyles from "../../constants/styles"

export default function ProductItem(props) {
  return (
    <View style={_styles.container}>
      {/* cannot have Touchable as single view child */}
      <View style={_styles.touchableContainer}>
        {/* `useForeground` enables ripple effect over all elements */}
        <TouchableComponent onPress={props.onViewDetails} useForeground>
          {/* cannot have multiple elements as Touchable children */}
          <View>
            <View style={_styles.imageContainer}>
              <Image style={_styles.image} source={{ uri: props.image }} />
            </View>
            <View style={_styles.textsContainer}>
              <Text style={_styles.title}>{props.title}</Text>
              <Text style={_styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={_styles.buttonsContainer}>
              <Button
                color={colors.PRIMARY}
                title="View details"
                onPress={props.onViewDetails}
              />
              <Button
                color={colors.PRIMARY}
                title="To cart"
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 20,
    ...sharedStyles.CARD_SHADOW
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
  textsContainer: { alignItems: "center", height: "15%", padding: 10 },
  title: { fontSize: 18, marginVertical: 2, fontFamily: "open-sans-bold" },
  price: { fontSize: 14, color: "#888", fontFamily: "open-sans" },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20
  }
})
