import { INITIALIZE_DATA_IN_STORE } from "../types/profile"

const initialState = {
  sections: {}, // contains banner data
  iconCategories: [], // contains sections data
  iconToCategoryMap: {} // { html: 'mainTechs', css: 'mainTechs', ... }
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_DATA_IN_STORE:
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
