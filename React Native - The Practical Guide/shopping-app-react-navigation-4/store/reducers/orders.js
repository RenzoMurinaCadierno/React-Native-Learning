import Order from "../../models/order"
import { ADD_ORDER, SET_ORDERS } from "../actions/orders"

const initialState = { items: [] }

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return { items: action.orders }

    case ADD_ORDER:
      return {
        ...state,
        items: state.items.concat(
          new Order(
            action.payload.id,
            action.payload.items,
            action.payload.total,
            action.payload.date
          )
        )
      }

    default:
      return state
  }
}
