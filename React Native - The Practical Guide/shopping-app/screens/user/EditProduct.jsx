import React, { useCallback, useEffect, useReducer, useState } from "react"
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView
} from "react-native"
import { useSelector, useDispatch } from "react-redux"
import CustomHeaderButtons from "../../UI/CustomHeaderButtons"
import Input from "../../UI/Input"
import FetchViews from "../../UI/FetchViews"
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
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  // const prodId = props.navigation.getParam("productId")
  const prodId = props.route.params.productId ?? null // now `route`
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

  useEffect(() => {
    if (errorMsg) Alert.alert("Error on submit", errorMsg, [{ text: "OK" }])
  }, [errorMsg])

  const handleSubmit = useCallback(async () => {
    if (!formState.isFormValid) {
      return Alert.alert("Submit failed", "There are validation errors", [
        { text: "OK", style: "default" }
      ])
    }

    setErrorMsg("")
    setIsLoading(true)

    const { title, description, imageUrl, price } = formState.values

    try {
      if (targetProduct) {
        await dispatch(
          productActions.updateProduct(prodId, title, description, imageUrl)
        )
      } else {
        await dispatch(
          productActions.createProduct(title, description, imageUrl, +price)
        )
      }
      props.navigation.goBack()
    } catch (err) {
      setErrorMsg(err.message)
    }

    setIsLoading(false)
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

  // no more `navigation.setParams({ handleSubmit })`, as we now
  // can dynamically set navigation options from inside the component
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <CustomHeaderButtons
          title="Save"
          iconName="checkmark"
          onPress={handleSubmit ?? null}
        />
      )
    })
  }, [handleSubmit])

  return (
    <FetchViews isLoading={isLoading} responseGate={!isLoading}>
      <KeyboardAvoidingView
        style={{ flex: 1 }} // KeyboardAvoidingView needs the whole screen
        behavior="padding"
        keyboardVerticalOffset={10} // padding of 10
      >
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
      </KeyboardAvoidingView>
    </FetchViews>
  )
}

// headerRight is now in the component
export const screenOptions = ({ navigation, route }) => ({
  headerTitle: route.params?.productId ? "Edit Product" : "Add product",
  headerLeft: () => (
    <CustomHeaderButtons
      title="Menu"
      iconName="menu"
      onPress={navigation.toggleDrawer}
    />
  )
})

const _styles = StyleSheet.create({ form: { margin: 20 } })
