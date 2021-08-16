import Order from "../../models/order"
import { ADD_ORDER } from "../actions/orders"

const initialState = { items: [] }

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        items: state.items.concat(
          new Order(
            new Date().toString(),
            action.payload.items,
            action.payload.total,
            new Date()
          )
        )
      }

    default:
      return state
  }
}
