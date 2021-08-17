import React, { useCallback, useEffect, useState } from "react"
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"

export default function EditProduct(props) {
  const prodId = props.navigation.getParam("productId")
  const targetProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  )

  const [title, setTitle] = useState(targetProduct?.title || "")
  const [imageUrl, setImageUrl] = useState(targetProduct?.imageUrl || "")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState(
    targetProduct?.description || ""
  )

  const handleSubmit = useCallback(() => console.log("submit"), [])

  useEffect(() => {
    props.navigation.setParams({ handleSubmit })
  }, [handleSubmit])

  return (
    <ScrollView>
      <View style={_styles.form}>
        <FormElement label="Title" value={title} onChangeText={setTitle} />
        <FormElement
          label="Image URL"
          value={imageUrl}
          onChangeText={setImageUrl}
        />
        {
          // edit price only in 'Add product' mode
          !targetProduct && (
            <FormElement label="Price" value={price} onChangeText={setPrice} />
          )
        }
        <FormElement
          label="Description"
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </ScrollView>
  )
}

EditProduct.navigationOptions = ({ navigation }) => {
  const handleSubmit = navigation.getParam("handleSubmit")

  return {
    headerTitle: navigation.getParam("productId")
      ? "Edit Product"
      : "Add product",
    headerLeft: () => (
      <CustomHeaderButtons
        title="Menu"
        iconName="menu"
        onPress={navigation.toggleDrawer}
      />
    ),
    headerRight: () => (
      <CustomHeaderButtons
        title="Save"
        iconName="checkmark"
        onPress={handleSubmit}
      />
    )
  }
}

const _styles = StyleSheet.create({
  form: { margin: 20 },
  formControl: { width: "100%" },
  label: { fontFamily: "open-sans-bold", marginVertical: 8 },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
})

function FormElement({ label, value, onChangeText }) {
  return (
    <View style={_styles.formControl}>
      <Text style={_styles.label}>{label}</Text>
      <TextInput
        style={_styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}
