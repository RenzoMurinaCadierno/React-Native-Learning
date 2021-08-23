import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import colors from "../constants/colors"

export default function PlaceItem({ onSelect, image, title, address }) {
  return (
    <TouchableOpacity onPress={onSelect} style={_styles.placeItem}>
      <Image style={_styles.image} source={{ uri: image }} />
      <View style={_styles.infoContainer}>
        <Text style={_styles.title}>{title}</Text>
        <Text style={_styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  )
}

const _styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5
  },
  address: {
    color: "#666",
    fontSize: 16
  }
})
