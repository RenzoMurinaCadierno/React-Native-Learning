import {
  PROJECTS_POPULATE_STORE,
  PROJECTS_CHANGE_ACTIVE_SECTION,
  PROJECTS_SET_ACTIVE_POINTER
} from "../types/projects"
import { status, messages, screens } from "../states/global"

const initialState = {
  status: status.CICLE_START,
  message: messages[status.CICLE_START](screens.PROJECTS),
  icons: [], // [ { icon1InCategory1, icon2InCategory1, icon1InCategory2, ...} ]
  items: [],
  activeSectionId: "",
  activeItemPrimaryKey: ""
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECTS_POPULATE_STORE:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        icons: action.payload.icons,
        items: action.payload.items
      }

    case PROJECTS_CHANGE_ACTIVE_SECTION:
      const isSameSection = action.payload.sectionId === state.activeSectionId
      return {
        ...state,
        activeSectionId: isSameSection ? "" : action.payload.sectionId
      }

    case PROJECTS_SET_ACTIVE_POINTER:
      return {
        ...state,
        activeSectionId: action.payload.sectionId,
        activeItemPrimaryKey: action.payload.itemPrimaryKey
      }

    default:
      return state
  }
}
