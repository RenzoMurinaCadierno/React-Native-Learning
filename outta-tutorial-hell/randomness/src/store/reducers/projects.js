import { CHANGE_ACTIVE_ICON, INITIALIZE_DATA_IN_STORE } from "../types/projects"

const initialState = {
  icons: [], // [ { icon1InCategory1, icon2InCategory1, icon1InCategory2, ...} ]
  activeIconId: ""
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_DATA_IN_STORE:
      return {
        ...state,
        icons: action.payload.icons,
        activeIconId: action.payload.activeIconId || ""
      }

    case CHANGE_ACTIVE_ICON:
      const isSameIconAndIconWasActive =
        Boolean(state.activeIconId) && action.payload.id === state.activeIconId

      return {
        ...state,
        activeIconId: isSameIconAndIconWasActive ? "" : action.payload.id
      }

    default:
      return state
  }
}
