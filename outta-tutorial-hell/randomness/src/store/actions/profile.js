import {
  PROFILE_POPULATE_STORE,
  PROFILE_TRIGGER_LOADING,
  PROFILE_FETCH_DATABASE_FAIL
} from "../types/profile"
// import { bannerData, screenBodyData } from "../data/profile"
import initDb from "../data/mockDb"

// (iconCategories = screenBodyData, sections = bannerData) =>
export const populateStore = () => async (dispatch) => {
  dispatch({ type: PROFILE_TRIGGER_LOADING })

  try {
    make error work, then restructure projects store, then 1/3, 2/3...
    const { profile } = await initDb(true)

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
