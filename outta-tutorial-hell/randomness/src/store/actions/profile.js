import { INITIALIZE_PROFILE_DATA } from "../types/profile"
import { bannerData, mainTechsData } from "../data/profile"

export const initializeProfileData = (
  iconCategories = [mainTechsData],
  sections = bannerData
) => {
  const iconsToCategoryMap = {}

  iconCategories.forEach((category) => {
    category?.icons?.forEach(
      (icon) => (iconsToCategoryMap[icon.id] = category.id)
    )
  })

  return {
    type: INITIALIZE_PROFILE_DATA,
    payload: { iconsToCategoryMap, iconCategories, sections }
  }
}
