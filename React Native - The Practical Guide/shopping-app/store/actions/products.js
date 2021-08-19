import { Product } from "../../models/product"

export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"
export const SET_PRODUCTS = "SET_PRODUCTS"

export const deleteProduct = (id) => ({ type: DELETE_PRODUCT, id })

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch) => {
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
      const response = await fetch(
        "https://rnmcshoppingapp-default-rtdb.firebaseio.com/products.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description, imageUrl, price })
        }
      )

      const data = await response.json()

      dispatch({
        type: CREATE_PRODUCT,
        // id is returned as "name" key in generated ducument
        payload: { id: data.name, title, description, imageUrl, price }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const updateProduct = (id, title, description, imageUrl) => ({
  type: UPDATE_PRODUCT,
  payload: { id, title, description, imageUrl }
})

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://rnmcshoppingapp-default-rtdb.firebaseio.com/products.jso"
      )

      // Firebase's response status boolean (400, 500)
      // > throwing here will be caught on <ProductOverview />
      if (!response.ok) throw new Error("Something went wrong")

      const data = await response.json()
      const products = []

      for (const key in data) {
        const values = data[key]
        products.push(
          new Product(
            key,
            "u1",
            values.title,
            values.imageUrl,
            values.description,
            values.price
          )
        )
      }

      dispatch({
        type: SET_PRODUCTS,
        payload: { id: data.name, products }
      })
    } catch (err) {
      console.log(err)
      throw err // send to custom analytics server
    }
  }
}
