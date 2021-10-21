import {
  FETCH_DATABASE_INIT,
  FETCH_DATABASE_ERROR,
  FETCH_DATABASE_SUCCESS
} from "../types/global"
import { status, messages, screens } from "../data/global"

const initialState = {
  data: {},
  status: status.CICLE_START,
  message: messages[status.CICLE_START](screens.GLOBAL),
  stack: ""
}

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATABASE_INIT:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        stack: ""
      }

    case FETCH_DATABASE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        message: action.payload.message,
        stack: ""
      }

    case FETCH_DATABASE_ERROR:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        stack: action.payload.stack
      }

    default:
      return state
  }
}
