import { Product } from "../../models/product"
import {
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  CREATE_PRODUCT,
  FETCH_PRODUCTS
} from "../actions/products"

const initialState = { availableProducts: [], userProducts: [] }

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        availableProducts: action.payload.availableProducts,
        userProducts: action.payload.userProducts
      }

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (prod) => prod.id !== action.id
        ),
        availableProducts: state.availableProducts.filter(
          (prod) => prod.id !== action.id
        )
      }

    case CREATE_PRODUCT:
      const newProduct = new Product(
        action.payload.id, // created in firebase, as "name" (check action)
        action.payload.userId, // created in firebase, when logging in
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        action.payload.price
      )
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct)
      }

    case UPDATE_PRODUCT:
      const idxInUserProducts = state.userProducts.findIndex(
        (prod) => prod.id === action.payload.id
      )
      const idxInAvailableProducts = state.availableProducts.findIndex(
        (prod) => prod.id === action.payload.id
      )
      const updatedProduct = new Product(
        action.payload.id,
        state.userProducts[idxInUserProducts].userId,
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        state.userProducts[idxInUserProducts].price
      )
      const updatedUserProducts = [...state.userProducts]
      const updatedAvailableProducts = [...state.availableProducts]
      updatedUserProducts[idxInUserProducts] = updatedProduct
      updatedAvailableProducts[idxInAvailableProducts] = updatedProduct
      return {
        ...state,
        userProducts: updatedUserProducts,
        availableProducts: updatedAvailableProducts
      }

    default:
      return state
  }
}

export default productsReducer
