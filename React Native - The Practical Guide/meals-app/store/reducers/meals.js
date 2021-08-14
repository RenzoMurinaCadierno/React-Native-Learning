import { MEALS } from "../../data/dummy"
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals"

const initialState = { meals: MEALS, filteredMeals: MEALS, favoriteMeals: [] }

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIdx = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      )
      if (existingIdx !== -1) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals
            .slice(0, existingIdx)
            .concat(state.favoriteMeals.slice(existingIdx + 1))
        }
      } else {
        const mealToAdd = state.meals.find((meal) => meal.id === action.mealId)
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(mealToAdd)
        }
      }

    case SET_FILTERS:
      const filters = action.filters

      const filteredMeals = state.meals.filter((meal) => {
        if (
          (filters.isGluttenFree && !meal.isGluttenFree) ||
          (filters.isLactoseFree && !meal.isLactoseFree) ||
          (filters.isVegan && !meal.isVegan) ||
          (filters.isVegetarian && !meal.isVegetarian)
        ) {
          return false
        }
        return true
      })

      return { ...state, filteredMeals }

    default:
      return state
  }
}

export default mealsReducer
