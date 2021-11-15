import { CONTACT_POPULATE_STORE, CONTACT_TRIGGER_TOAST } from "../types/contact"
import { status, messages, screens } from "../states/global"
import { Link } from "@app-utils/functions"

export const populateStore = (contactDbData) => async (dispatch) => {
  dispatch({
    type: CONTACT_POPULATE_STORE,
    payload: {
      status: status[status.CICLE_FINISH],
      message: messages[status.CICLE_FINISH](screens.CONTACT),
      bullets: contactDbData.bullets
    }
  })
}

export const triggerToast = (bulletName) => async (dispatch, getState) => {
  if (!Boolean(bulletName)) {
    dispatch({
      type: CONTACT_TRIGGER_TOAST,
      payload: { show: false, onPressText: () => {} }
    })
  } else {
    const { text, url } = getState().contact.bullets[bulletName].toastData

    dispatch({
      type: CONTACT_TRIGGER_TOAST,
      payload: { show: true, text, onPressText: () => Link.mayOpenUrl(url) }
    })
  }
}
