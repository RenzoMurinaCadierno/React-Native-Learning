export const status = {
  CICLE_START: "CICLE_START",
  FETCH_DATABASE_INIT: "FETCH_DATABASE_INIT",
  FETCH_DATABASE_SUCCESS: "CICLE_FINISH",
  FETCH_DATABASE_ERROR: "FETCH_DATABASE_ERROR",
  CICLE_FINISH: "CICLE_FINISH"
}

export const screens = {
  GLOBAL: "GLOBAL",
  PROFILE: "PROFILE",
  PROJECTS: "PROJECTS"
}

export const messages = {
  [status.CICLE_START]: (screen) => `[${screens[screen]}] Initializing...`,
  [status.FETCH_DATABASE_INIT]: (screen) =>
    `[${screens[screen]}] Retrieving from database...`,
  [status.FETCH_DATABASE_SUCCESS]: (screen) =>
    `[${screens[screen]}] Database fetched successfully.`,
  [status.FETCH_DATABASE_ERROR]: (screen) =>
    `[${screens[screen]}] Please check your internet connection and try again.`,
  [status.CICLE_FINISH]: (screen) => `[${screens[screen]}] Ready.`
}
