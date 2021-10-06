import {
  CHANGE_ACTIVE_ICON_ID,
  INITIALIZE_DATA_IN_STORE
} from "../types/profile"
import { profileBodyData } from "../data/projects"

export const initializeDataInStore = (iconCategories = profileBodyData) => {
  const icons = []

  iconCategories.forEach((category) => {
    category?.icons?.forEach((icon) => {
      icons.push(icon)
    })
  })

  return {
    type: INITIALIZE_DATA_IN_STORE,
    payload: { icons }
  }
}
