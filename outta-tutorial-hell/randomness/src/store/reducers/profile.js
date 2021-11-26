import {
  PROFILE_CHANGE_ACTIVE_SUBSECTION,
  PROFILE_POPULATE_STORE,
  PROFILE_TRIGGER_TOAST
} from "../types/profile"
import { status, messages, screens } from "../states/global"

const initialState = {
  status: status.CICLE_START,
  message: messages[status.CICLE_START](screens.PROFILE),
  sections: {}, // contains banner data
  iconCategories: [], // contains sections data
  iconToCategoryMap: {}, // { html: 'mainTechs', css: 'mainTechs', ... }
  activeSubSectionId: "",
  toast: { show: false, text: "", onPressText: () => {} }
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_POPULATE_STORE:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        sections: action.payload.sections,
        iconCategories: action.payload.iconCategories,
        iconToCategoryMap: action.payload.iconsToCategoryMap
      }

    case PROFILE_CHANGE_ACTIVE_SUBSECTION:
      const isSameSubSection =
        action.payload.subSectionId === state.activeSubSectionId
      return {
        ...state,
        activeSubSectionId: isSameSubSection ? "" : action.payload.subSectionId
      }

    case PROFILE_TRIGGER_TOAST:
      return { ...state, toast: { ...state.toast, ...action.payload } }

    default:
      return state
  }
}
