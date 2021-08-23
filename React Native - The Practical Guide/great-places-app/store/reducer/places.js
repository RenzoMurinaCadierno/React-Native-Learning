import Place from "../../models/place"
import { ADD_PLACE } from "../actions/places"

const initialState = { items: [] }

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      return {
        items: state.items.concat(
          new Place(new Date().toString(), action.payload.title)
        )
      }

    default:
      return state
  }
}
