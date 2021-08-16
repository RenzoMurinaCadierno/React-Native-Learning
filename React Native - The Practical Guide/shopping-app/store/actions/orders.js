export const ADD_ORDER = "ADD_ORDER"

export const addOrder = (items, total) => ({
  type: ADD_ORDER,
  payload: { items, total }
})
