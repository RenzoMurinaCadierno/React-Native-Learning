import { ADD_TO_CART } from "../actions/cart"
import CartItem from "../../models/cart"

const initialState = { items: {}, total: 0 }

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, price, title } = action.product
      let updatedOrNewCartItem = {}

      if (state.items[id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[id].quantity + 1,
          price,
          title,
          state.items[id].sum + price
        )
      } else {
        updatedOrNewCartItem = new CartItem(1, price, title, price)
      }
      return {
        ...state,
        items: { ...state.items, [id]: updatedOrNewCartItem },
        total: state.total + price
      }

    default:
      return state
  }
}

export default cartReducer
