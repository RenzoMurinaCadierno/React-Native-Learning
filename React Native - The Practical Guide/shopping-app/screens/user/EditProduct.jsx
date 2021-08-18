import React, { useCallback, useEffect, useReducer } from "react"
import { View, ScrollView, StyleSheet, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"
import Input from "../../UI/Input"
import * as productActions from "../../store/actions/products"

const UPDATE_FORM_INPUT = "UPDATE_FORM_INPUT"

const formReducer = (state, action) => {
  if (action.type === UPDATE_FORM_INPUT) {
    const updatedValues = {
      ...state.values,
      [action.input]: action.value
    }
    const updatedValidations = {
      ...state.validations,
      [action.input]: action.isInputValid
    }
    let isFormValid = true

    for (const key in updatedValidations) {
      isFormValid = isFormValid && updatedValidations[key]
    }

    return {
      values: updatedValues,
      validations: updatedValidations,
      isFormValid
    }
  }

  return state
}

export default function EditProduct(props) {
  const prodId = props.navigation.getParam("productId")
  const targetProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  )
  const dispatch = useDispatch()

  const [formState, formDispatch] = useReducer(formReducer, {
    values: {
      title: targetProduct?.title || "",
      imageUrl: targetProduct?.imageUrl || "",
      description: targetProduct?.description || "",
      price: ""
    },
    validations: {
      title: targetProduct ? true : false,
      imageUrl: targetProduct ? true : false,
      description: targetProduct ? true : false,
      // price starts false on 'new product' mode, always true on 'edit' mode
      price: targetProduct ? true : false
    },
    isFormValid: targetProduct ? true : false
  })

  const handleSubmit = useCallback(() => {
    if (!formState.isFormValid) {
      return Alert.alert("Submit failed", "There are validation errors", [
        { text: "OK", style: "default" }
      ])
    }

    const [title, description, imageUrl, price] = formState.values

    if (targetProduct) {
      dispatch(
        productActions.updateProduct(prodId, title, description, imageUrl)
      )
    } else {
      dispatch(
        productActions.createProduct(title, description, imageUrl, +price)
      )
    }

    props.navigation.goBack()
  }, [dispatch, prodId, formState])

  const handleOnChangeText = useCallback(
    (input, value, isInputValid) => {
      formDispatch({
        type: UPDATE_FORM_INPUT,
        value,
        isInputValid,
        input
      })
    },
    [formDispatch]
  )

  useEffect(() => {
    props.navigation.setParams({ handleSubmit })
  }, [handleSubmit])

  return (
    <ScrollView>
      <View style={_styles.form}>
        <Input
          id="title"
          initialValue={targetProduct?.title || ""}
          initialIsValid={Boolean(targetProduct)}
          label="Title"
          value={formState.values.title}
          // binding sets default args at the end!!!
          onChangeText={handleOnChangeText}
          isValid={formState.validations.title}
          validationMsg="Please enter a valid title"
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect
          required
        />
        <Input
          id="imageUrl"
          initialValue={targetProduct?.imageUrl || ""}
          initialIsValid={Boolean(targetProduct)}
          label="Image URL"
          value={formState.values.imageUrl}
          onChangeText={handleOnChangeText}
          isValid={formState.validations.imageUrl}
          validationMsg="Please enter a valid image url"
          required
          // {
          // returnKeyType="next"
          // onEndEditing: () => console.log("closed keyboard"),
          // onSelectionChange: () => console.log("selected something"),
          // onSubmitEditing: () => console.log("hit 'submit' button ")
          // }
        />
        {
          // edit price only in 'Add product' mode
          !targetProduct && (
            <Input
              id="price"
              label="Price"
              value={formState.values.price}
              onChangeText={handleOnChangeText}
              isValid={formState.validations.price}
              validationMsg="Please enter a valid price"
              keyboardType="decimal-pad"
              required
              min={0.1}
            />
          )
        }
        <Input
          id="description"
          initialValue={targetProduct?.description || ""}
          initialIsValid={Boolean(targetProduct)}
          label="Description"
          value={formState.values.description}
          onChangeText={handleOnChangeText}
          validationMsg="Please enter a valid description"
          isValid={formState.validations.description}
          autoCapitalize="sentences"
          autoCorrect
          multiline
          numberOfLines={3}
          required
          minLength={3}
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

const _styles = StyleSheet.create({ form: { margin: 20 } })
