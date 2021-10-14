import {
  CHANGE_ACTIVE_ICON,
  INITIALIZE_PROJECT_DATA_IN_STORE
} from "../types/projects"
import { profileBodyData } from "../data/projects"

export const initializeDataInStore = (iconCategories = profileBodyData) => {
  const icons = []

  iconCategories.forEach((category) => {
    category?.icons?.forEach((icon) => {
      icons.push(icon)
    })
  })

  return {
    type: INITIALIZE_PROJECT_DATA_IN_STORE,
    payload: { icons }
  }
}

export const changeActiveIcon = (id) => ({
  type: CHANGE_ACTIVE_ICON,
  payload: { id }
})
