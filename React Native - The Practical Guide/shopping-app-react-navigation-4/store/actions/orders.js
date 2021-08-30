import Order from "../../models/order"

export const ADD_ORDER = "ADD_ORDER"
export const SET_ORDERS = "SET_ORDERS"

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId

    try {
      const response = await fetch(
        `https://rnmcshoppingapp-default-rtdb.firebaseio.com/orders/${userId}.json`
      )

      if (!response.ok) throw new Error("Something went wrong")

      const data = await response.json()
      const orders = []

      for (const key in data) {
        const values = data[key]
        orders.push(
          // date comes from fb as a string, we need an object. `new Date`
          new Order(key, values.items, values.total, new Date(values.date))
        )
      }

      dispatch({ type: SET_ORDERS, orders })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export const addOrder = (items, total) => {
  return async (dispatch, getState) => {
    const date = new Date()

    try {
      const { token, userId } = getState().auth

      const response = await fetch(
        `https://rnmcshoppingapp-default-rtdb.firebaseio.com/orders/${userId}.json?auth=${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items, total, date: date.toISOString() })
        }
      )

      if (!response.ok) {
        throw new Error("Error in `addOrder` @ actions/orders.js ")
      }

      const data = await response.json()

      dispatch({
        type: ADD_ORDER,
        payload: { id: data.name, items, total, date }
      })
    } catch (err) {
      throw new Error("Error in `addOrder` @ actions/orders.js.", err)
    }
  }
}
