import { CONTACT_POPULATE_STORE } from "../types/contact"
import { status, messages, screens } from "../data/global"

export const populateStore = (contactDbData) => {
  return {
    type: CONTACT_POPULATE_STORE,
    payload: {
      status: status[status.CICLE_FINISH],
      message: messages[status.CICLE_FINISH](screens.CONTACT),
      bullets: contactDbData.bullets
    }
  }
}
