import { Linking } from "react-native"
import { CONTACT_POPULATE_STORE, CONTACT_TRIGGER_TOAST } from "../types/contact"
import { status, messages, screens } from "../data/global"

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

const toastAction = (show, text, onPressText) => ({
  type: CONTACT_TRIGGER_TOAST,
  payload: { show, text, onPressText }
})

export const triggerToast = (bulletName) => async (dispatch, getState) => {
  if (!Boolean(bulletName)) {
    dispatch(toastAction(false, "", () => {}))
  } else {
    const { text, url } = getState().contact.bullets[bulletName].toastData

    dispatch(toastAction(true, text, () => mayOpenUrl(url)))
  }
}
