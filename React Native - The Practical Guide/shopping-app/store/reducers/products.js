import PRODUCTS from "../../data/dummy"

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((p) => p.ownerId === "u1") // only user 1
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default productsReducer
