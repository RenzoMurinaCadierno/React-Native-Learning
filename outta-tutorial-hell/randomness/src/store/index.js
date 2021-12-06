import initializeDb from "./db/initialize"
import profileDb from "./db/profile"
import projectsDb from "./db/projects"
import contactDb from "./db/contact"
import globalReducer from "./reducers/global"
import profileReducer from "./reducers/profile"
import projectsReducer from "./reducers/projects"
import contactReducer from "./reducers/contact"
import * as globalActions from "./actions/global"
import * as profileActions from "./actions/profile"
import * as projectsActions from "./actions/projects"
import * as contactActions from "./actions/contact"
import * as globalTypes from "./types/global"
import * as profileTypes from "./types/profile"
import * as projectsTypes from "./types/projects"
import * as contactTypes from "./types/contact"
import * as globalStates from "./states/global"

const db = {
  initialize: initializeDb,
  profile: profileDb,
  projects: projectsDb,
  contact: contactDb
}
const reducers = {
  global: globalReducer,
  profile: profileReducer,
  projects: projectsReducer,
  contact: contactReducer
}
const actions = {
  global: globalActions,
  profile: profileActions,
  projects: projectsActions,
  contact: contactActions
}
const types = {
  global: globalTypes,
  profile: profileTypes,
  projects: projectsTypes,
  contact: contactTypes
}
const states = { global: globalStates }
const store = { db, reducers, actions, types, states }

export default store
