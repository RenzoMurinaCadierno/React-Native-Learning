import {
  PROJECTS_POPULATE_STORE,
  PROJECTS_CHANGE_ACTIVE_SECTION
} from "../types/projects"
import { status, messages, screens } from "../data/global"

export const populateStore = (projectsDbData) => {
  let iconsInStoreStore = []
  const itemsInStoreStore = {}

  Object.entries(projectsDbData).forEach(([techId, { icon, items }]) => {
    iconsInStoreStore.push(icon)
    itemsInStoreStore[techId] = items
  })

  return {
    type: PROJECTS_POPULATE_STORE,
    payload: {
      status: status[status.CICLE_FINISH],
      message: messages[status.CICLE_FINISH](screens.PROJECTS),
      icons: iconsInStoreStore,
      items: itemsInStoreStore
    }
  }
}

export const changeActiveSection = (sectionId) => ({
  type: PROJECTS_CHANGE_ACTIVE_SECTION,
  payload: { sectionId }
})
