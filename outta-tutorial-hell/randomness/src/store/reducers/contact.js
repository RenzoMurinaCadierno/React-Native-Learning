import { CONTACT_POPULATE_STORE, CONTACT_TRIGGER_TOAST } from "../types/contact"
import { status, messages, screens } from "../states/global"

const initialState = {
  status: status.CICLE_START,
  message: messages[status.CICLE_START](screens.CONTACT),
  bullets: {}, // { email: { bulletEmail }, github: { bulletGithub }, ...}
  toast: { show: false, text: "", onPressText: () => {} }
}

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT_POPULATE_STORE:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        bullets: action.payload.bullets
      }

    case CONTACT_TRIGGER_TOAST:
      return { ...state, toast: { ...state.toast, ...action.payload } }

    default:
      return state
  }
}
