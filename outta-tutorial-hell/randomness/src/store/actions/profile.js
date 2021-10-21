import {
  PROFILE_POPULATE_STORE,
  PROFILE_CHANGE_ACTIVE_SUBSECTION
} from "../types/profile"
import { status, messages, screens } from "../data/global"

export const populateStore = (data) => {
  const { profile } = data

  let iconCategories = []
  const sections = {}
  const iconsToCategoryMap = {}

  Object.values(profile.sections).forEach((category) => {
    iconCategories.push({
      id: category.id,
      title: category.title,
      icons: category.icons
    })

    sections[category.id] = {}

    Object.entries(category.content).forEach(
      ([subSectionName, subSectionContent]) => {
        sections[category.id][subSectionName] = {
          ...subSectionContent,
          category: category.title
        }
      }
    )

    category.icons.forEach((icon) => {
      iconsToCategoryMap[icon.id] = category.id
    })
  })

  return {
    type: PROFILE_POPULATE_STORE,
    payload: {
      status: status[status.CICLE_FINISH],
      message: messages[status.CICLE_FINISH](screens.PROFILE),
      iconsToCategoryMap,
      iconCategories,
      sections
    }
  }
}

export const changeActiveSubSection = (subCategoryId) => ({
  type: PROFILE_CHANGE_ACTIVE_SUBSECTION,
  payload: { subCategoryId }
})
