import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button
} from "react-native"
import { useDispatch } from "react-redux"
import ImagePicker from "../components/ImagePicker"
import LocationPicker from "../components/LocationPicker"
import * as placesActions from "../store/actions/places"
import colors from "../constants/colors"

export default function NewPlace(props) {
  const [title, setTitle] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const dispatch = useDispatch()

  const handleImageTaken = (imageUri) => setSelectedImage(imageUri)

  const handleSave = () => {
    dispatch(placesActions.addPlace(title, selectedImage))
    props.navigation.goBack()
  }

  return (
    <ScrollView>
      <View style={_styles.container}>
        <Text style={_styles.label}>Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={_styles.input}
        />
        <ImagePicker onImageTaken={handleImageTaken} />
        <LocationPicker />
        <Button title="Save" color={colors.PRIMARY} onPress={handleSave} />
      </View>
    </ScrollView>
  )
}

NewPlace.navigationOptions = {
  headerTitle: "Add place"
}

const _styles = StyleSheet.create({
  container: { margin: 30 },
  label: { fontSize: 18, marginBottom: 15 },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 2
  }
})
