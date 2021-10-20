export const status = {
  CICLE_START: "CICLE_START",
  FETCH_DATABASE_INIT: "FETCH_DATABASE_INIT",
  FETCH_DATABASE_SUCCESS: "CICLE_FINISH",
  FETCH_DATABASE_ERROR: "FETCH_DATABASE_ERROR"
}

export const messages = {
  [status.CICLE_START]: "Initializing app.",
  [status.FETCH_DATABASE_INIT]: "Retrieving from database...",
  [status.FETCH_DATABASE_SUCCESS]: "Ready.",
  [status.FETCH_DATABASE_ERROR]:
    "Please check your internet connection and try again."
}
