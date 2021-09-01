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

      // we trigger notifications after an order is placed for all items.
      // > This is sub-optimal! The best solution is handling it from the
      //   server. We do not do it there as Firestore is not free.
      for (const item in items) {
        // firebase has cart items stored in values of objects where
        // keys are indexes starting from 0. So items[0] is the first,
        // then item[1], and so on.
        const { pushToken, title } = items[item]

        fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Host: "exp.host",
            Accept: "application/json",
            "Accept-Encoding": "gzip, deflate",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            to: pushToken,
            title: "Order was placed!",
            body: title
            // data: item, // <- extra data, if required
          })
        })
        console.log(pushToken, title)
      }
    } catch (err) {
      throw new Error("Error in `addOrder` @ actions/orders.js.", err)
    }
  }
}
