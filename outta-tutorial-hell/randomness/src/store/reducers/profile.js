import { INITIALIZE_PROFILE_DATA } from "../types/profile"

const initialState = {
  sections: {}, // contains banner data
  iconCategories: [], // contains sections data
  iconToCategoryMap: {} // { html: 'mainTechs', css: 'mainTechs', ... }
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_PROFILE_DATA:
      return {
        ...state,
        sections: action.payload.sections,
        iconCategories: action.payload.iconCategories,
        iconToCategoryMap: action.payload.iconsToCategoryMap
      }

    default:
      return state
  }
}
