import {
  PROJECTS_POPULATE_STORE,
  PROJECTS_CHANGE_ACTIVE_SECTION
} from "../types/projects"
import { status, messages, screens } from "../states/global"

export const populateStore = (projectsDbData) => {
  let iconsInStore = []
  const itemsInStore = {}

  Object.entries(projectsDbData).forEach(([techId, { icon, items }]) => {
    iconsInStore.push(icon)
    itemsInStore[techId] = items.map((item) => ({
      ...item,
      section: techId
    }))
  })

  return {
    type: PROJECTS_POPULATE_STORE,
    payload: {
      status: status[status.CICLE_FINISH],
      message: messages[status.CICLE_FINISH](screens.PROJECTS),
      icons: iconsInStore,
      items: itemsInStore
    }
  }
}

export const changeActiveSection = (sectionId) => ({
  type: PROJECTS_CHANGE_ACTIVE_SECTION,
  payload: { sectionId }
})
