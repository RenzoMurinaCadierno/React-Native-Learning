import {
  CHANGE_ACTIVE_ICON_ID,
  INITIALIZE_DATA_IN_STORE
} from "../types/profile"
import { bannerData, screenBodyData } from "../data/profile"

export const initializeDataInStore = (
  iconCategories = screenBodyData,
  sections = bannerData
) => {
  const iconsToCategoryMap = {}

  iconCategories.forEach((category) => {
    category?.icons?.forEach((icon) => {
      iconsToCategoryMap[icon.id] = category.id
    })
  })

  return {
    type: INITIALIZE_DATA_IN_STORE,
    payload: { iconsToCategoryMap, iconCategories, sections }
  }
}
