import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart"
import { ADD_ORDER } from "../actions/orders"
import { DELETE_PRODUCT } from "../actions/products"
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

    case REMOVE_FROM_CART:
      const selectedItem = state.items[action.id]
      let updatedItems

      if (selectedItem.quantity > 1) {
        const { price, title, sum } = selectedItem
        updatedItems = {
          ...state.items,
          [action.id]: new CartItem(
            selectedItem.quantity - 1,
            price,
            title,
            sum - price
          )
        }
      } else {
        updatedItems = { ...state.items }
        delete updatedItems[action.id]
      }
      return {
        ...state,
        items: updatedItems,
        total: state.total - selectedItem.price
      }

    case ADD_ORDER:
      return initialState // clear cart on add order

    case DELETE_PRODUCT:
      // only if cart item exists in cart, we delete it
      if (state.items[action.id]) {
        const updatedItems = { ...state.items }
        const itemTotal = state.items[action.id].sum

        delete updatedItems[action.id]

        return { ...state, items: updatedItems, total: state.total - itemTotal }
      }

    default:
      return state
  }
}

export default cartReducer
