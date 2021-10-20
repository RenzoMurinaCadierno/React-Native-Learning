import {
  FETCH_DATABASE_INIT,
  FETCH_DATABASE_ERROR,
  FETCH_DATABASE_SUCCESS
} from "../types/global"
import { status, messages } from "../data/global"
import * as profileActions from "../actions/profile"
import initDb from "../data/mockDb"

export const initializeDatabase = () => async (dispatch) => {
  dispatch({
    type: FETCH_DATABASE_INIT,
    payload: {
      status: status.FETCH_DATABASE_INIT,
      message: messages[status.FETCH_DATABASE_INIT]
    }
  })

  try {
    const db = await initDb()

    if (!db.ok) throw new Error()

    const data = await JSON.parse(db.data)

    dispatch({
      type: FETCH_DATABASE_SUCCESS,
      payload: {
        data,
        status: status.FETCH_DATABASE_SUCCESS,
        message: messages[status.FETCH_DATABASE_SUCCESS]
      }
    })
    dispatch(profileActions.populateStore(data))
  } catch (err) {
    console.log(err)

    dispatch({
      type: FETCH_DATABASE_ERROR,
      payload: {
        stack: err,
        status: status.FETCH_DATABASE_ERROR,
        message: messages[status.FETCH_DATABASE_ERROR]
      }
    })
  }
}
