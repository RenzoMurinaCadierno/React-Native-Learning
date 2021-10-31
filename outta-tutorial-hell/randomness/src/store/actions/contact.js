import {
  CONTACT_POPULATE_STORE,
  CONTACT_CHANGE_ACTIVE_BULLET
} from "../types/contact"
import { status, messages, screens } from "../data/global"

export const populateStore = (contactDbData) => {
  const bulletItems = Object.entries(contactDbData.bullets).map(
    ([bulletName, { id, icon, title, description }]) => ({
      id,
      name: bulletName,
      icon,
      title,
      description
    })
  )

  return {
    type: CONTACT_POPULATE_STORE,
    payload: {
      status: status[status.CICLE_FINISH],
      message: messages[status.CICLE_FINISH](screens.CONTACT),
      bulletItems,
      bullets: contactDbData.bullets
    }
  }
}

export const changeActiveBullet = (bulletId) => ({
  type: CONTACT_CHANGE_ACTIVE_BULLET,
  payload: { bulletId }
})
