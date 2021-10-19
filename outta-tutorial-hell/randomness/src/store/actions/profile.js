import {
  PROFILE_POPULATE_STORE,
  PROFILE_TRIGGER_LOADING,
  PROFILE_FETCH_DATABASE_FAIL,
  PROFILE_CHANGE_ACTIVE_SUBSECTION
} from "../types/profile"
import { status, messages } from "../data/profile"
import initDb from "../data/mockDb"

export const populateStore = () => async (dispatch) => {
  dispatch({ type: PROFILE_TRIGGER_LOADING })

  try {
    const db = await initDb()

    if (!db.ok) throw new Error(messages[status.FETCH_DATABASE_ERROR])

    const { profile } = await JSON.parse(db.data)

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

    dispatch({
      type: PROFILE_POPULATE_STORE,
      payload: { iconsToCategoryMap, iconCategories, sections }
    })
  } catch (err) {
    console.log(err)
    dispatch({ type: PROFILE_FETCH_DATABASE_FAIL })
  }
}

export const changeActiveSubSection = (subCategoryId) => ({
  type: PROFILE_CHANGE_ACTIVE_SUBSECTION,
  payload: { subCategoryId }
})

// import { INITIALIZE_PROFILE_DATA_IN_STORE } from "../types/profile"
// import { bannerData, screenBodyData } from "../data/profile"

// export const initializeDataInStore = (
//   iconCategories = screenBodyData,
//   sections = bannerData
// ) => {
//   const iconsToCategoryMap = {}

//   iconCategories.forEach((category) => {
//     category?.icons?.forEach((icon) => {
//       iconsToCategoryMap[icon.id] = category.id
//     })
//   })

//   return {
//     type: INITIALIZE_PROFILE_DATA_IN_STORE,
//     payload: { iconsToCategoryMap, iconCategories, sections }
//   }
// }
