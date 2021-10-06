import { INITIALIZE_DATA_IN_STORE } from "../types/projects"

const initialState = {
  icons: [] // [ { icon1InCategory1, icon2InCategory1, icon1InCategory2, ...} ]
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_DATA_IN_STORE:
      return {
        ...state,
        icons: action.payload.icons
      }

    default:
      return state
  }
}
