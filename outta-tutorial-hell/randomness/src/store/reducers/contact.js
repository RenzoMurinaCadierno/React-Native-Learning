import { CONTACT_POPULATE_STORE } from "../types/contact"
import { status, messages, screens } from "../data/global"

const initialState = {
  status: status.CICLE_START,
  message: messages[status.CICLE_START](screens.CONTACT),
  bullets: {} // { email: { bulletEmail }, github: { bulletGithub }, ...}
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

    default:
      return state
  }
}
