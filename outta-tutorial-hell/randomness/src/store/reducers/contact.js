import {
  CONTACT_POPULATE_STORE,
  CONTACT_CHANGE_ACTIVE_BULLET
} from "../types/contact"
import { status, messages, screens } from "../data/global"

const initialState = {
  status: status.CICLE_START,
  message: messages[status.CICLE_START](screens.CONTACT),
  bulletItems: [], // [ { bulletOne, bulletTwo, bulletThree, ...} ]
  bullets: {}, // { email: { bulletEmail }, github: { bulletGithub }, ...}
  activeBulletId: ""
}

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT_POPULATE_STORE:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        bulletItems: action.payload.bulletItems,
        bullets: action.payload.bullets
      }

    case CONTACT_CHANGE_ACTIVE_BULLET:
      const isSameSection = action.payload.bulletId === state.activeBulletId

      return isSameSection
        ? state
        : { ...state, activeBulletId: action.payload.bulletId }

    default:
      return state
  }
}
