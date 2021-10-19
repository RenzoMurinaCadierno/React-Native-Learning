import {
  PROFILE_CHANGE_ACTIVE_SUBSECTION,
  PROFILE_FETCH_DATABASE_FAIL,
  PROFILE_POPULATE_STORE,
  PROFILE_TRIGGER_LOADING
} from "../types/profile"
import { status, messages } from "../data/profile"

const initialState = {
  status: status.CICLE_STARTUP,
  message: messages[status.CICLE_STARTUP],
  sections: {}, // contains banner data
  iconCategories: [], // contains sections data
  iconToCategoryMap: {}, // { html: 'mainTechs', css: 'mainTechs', ... }
  activeSubSectionId: ""
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_TRIGGER_LOADING:
      return {
        ...state,
        status: status.FETCH_DATABASE_INIT,
        message: messages[status.FETCH_DATABASE_INIT]
      }

    case PROFILE_POPULATE_STORE:
      return {
        ...state,
        status: status.CICLE_FINISHED,
        message: messages[status.CICLE_FINISHED],
        sections: action.payload.sections,
        iconCategories: action.payload.iconCategories,
        iconToCategoryMap: action.payload.iconsToCategoryMap
      }

    case PROFILE_FETCH_DATABASE_FAIL:
      return {
        ...state,
        status: status.FETCH_DATABASE_ERROR,
        message: messages[status.FETCH_DATABASE_ERROR]
      }

    case PROFILE_CHANGE_ACTIVE_SUBSECTION:
      return { ...state, activeSubSectionId: action.payload.subCategoryId }

    default:
      return state
  }
}

// import { INITIALIZE_PROFILE_DATA_IN_STORE } from "../types/profile"

// const initialState = {
//   sections: {}, // contains banner data
//   iconCategories: [], // contains sections data
//   iconToCategoryMap: {} // { html: 'mainTechs', css: 'mainTechs', ... }
// }

// export default function profileReducer(state = initialState, action) {
//   switch (action.type) {
//     case INITIALIZE_PROFILE_DATA_IN_STORE:
//       return {
//         ...state,
//         sections: action.payload.sections,
//         iconCategories: action.payload.iconCategories,
//         iconToCategoryMap: action.payload.iconsToCategoryMap
//       }

//     default:
//       return state
//   }
// }
