import PRODUCTS from "../../data/dummy"
import { DELETE_PRODUCT } from "../actions/products"

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((p) => p.ownerId === "u1") // only user 1
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state
  }
}

export default productsReducer
