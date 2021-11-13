import { Linking } from "react-native"
import { CONTACT_POPULATE_STORE, CONTACT_TRIGGER_TOAST } from "../types/contact"
import { status, messages, screens } from "../states/global"

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

const mayOpenUrl = async (url) => {
  if (!Boolean(url)) return

  try {
    const canOpenUrl = await Linking.canOpenURL(url)

    if (canOpenUrl) Linking.openURL(url)
    else console.log("Cannot open URL.")
  } catch (err) {
    console.log("Failed to open URL.", err)
  }
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
      payload: { show: true, text, onPressText: () => mayOpenUrl(url) }
    })
  }
}
