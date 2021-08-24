import Place from "../../models/place"
import { LOAD_PLACES, ADD_PLACE } from "../actions/places"

const initialState = { items: [] }

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PLACES:
      return {
        items: action.payload.places.map(
          (p) => new Place(p.id.toString(), p.title, p.imageUri)
        )
      }

    case ADD_PLACE:
      return {
        items: state.items.concat(
          new Place(
            action.payload.id.toString(),
            action.payload.title,
            action.payload.pathToImg
          )
        )
      }

    default:
      return state
  }
}
