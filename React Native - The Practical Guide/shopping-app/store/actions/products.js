import * as Notifications from "expo-notifications"
import { Product } from "../../models/product"

export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token

      const response = await fetch(
        `https://rnmcshoppingapp-default-rtdb.firebaseio.com/products/${id}.json?auth=${token}`,
        { method: "DELETE" }
      )
      if (!response.ok) throw new Error("Something went wrong")

      return dispatch({ type: DELETE_PRODUCT, id })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch, getState) => {
    // get current permissions (iOS only, Android asks at installation)
    let permission = await Notifications.getPermissionsAsync()
    let pushToken = null

    if (permission.status !== "granted") {
      // request for permissions if not already granted
      permission = await Notifications.requestPermissionsAsync()
    }

    if (permission.status !== "granted") {
      // if no permissions were granted upon request, nothing to do
      console.log("Permissions not granted for notifications.")
    } else {
      // permissions granted. Save push token in `response.data`
      pushToken = (await Notifications.getExpoPushTokenAsync()).data
    }

    /**
     * you can fire any async code here! Redux thunk handles it.
     *
     * Firebase sends requests to any node.
     *
     * By default, using just the uri will translate to a GET request, and
     * > If the resource does not exist, Firebase creates a document for it.
     * > All endpoints need `.json` extension. This is exclusive to FB.
     * > Return value is a promise, which resolves to the data from db.
     * > That data is a raw string. It needs to be parsed to JSON.
     *
     * Adding an object as a second argument converts the request to the
     * specified method. We use POST here.
     * > Firebase auto-generates an ID. Convenient.
     */
    try {
      // second arg incoming from redux thunk is a method to get the current
      // full store state. We use it to fetch the token in state.auth
      const { token, userId } = getState().auth

      const response = await fetch(
        `https://rnmcshoppingapp-default-rtdb.firebaseio.com/products.json?auth=${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            imageUrl,
            price,
            userId,
            pushToken // user's push token (null or defined)
          })
        }
      )

      const data = await response.json()

      dispatch({
        type: CREATE_PRODUCT,
        // id is returned as "name" key in generated ducument
        payload: {
          id: data.name,
          userId,
          pushToken,
          title,
          description,
          imageUrl,
          userId
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateProduct = (id, title, description, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token

      const response = await fetch(
        `https://rnmcshoppingapp-default-rtdb.firebaseio.com/products/${id}.json?auth=${token}`,
        {
          method: "PATCH", // 'PUT' overrides, 'PATCH' updates where differs
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description, imageUrl })
        }
      )

      if (!response.ok) throw new Error("Something went wrong")

      return dispatch({
        type: UPDATE_PRODUCT,
        payload: { id, title, description, imageUrl }
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://rnmcshoppingapp-default-rtdb.firebaseio.com/products.json"
      )

      // Firebase's response status boolean (400, 500)
      // > throwing here will be caught on <ProductOverview />
      if (!response.ok) throw new Error("Something went wrong")

      const userId = getState().auth.userId
      const data = await response.json()
      const products = []

      for (const key in data) {
        const values = data[key]
        products.push(
          new Product(
            key,
            values.userId,
            values.pushToken, // key extracted from firebase
            values.title,
            values.imageUrl,
            values.description,
            values.price
          )
        )
      }

      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          availableProducts: products,
          userProducts: products.filter((p) => p.userId === userId)
        }
      })
    } catch (err) {
      console.log(err)
      throw err // send to custom analytics server
    }
  }
}
