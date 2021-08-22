import AsyncStorage from "@react-native-async-storage/async-storage"

const FB_API_KEY = `AIzaSyCYMZ0dYeN1G2i72aG0GboxR6uM-B_Ql7w`

export const AUTHENTICATE = "AUTHENTICATE"
export const LOGOUT = "LOGOUT"

async function authUser(authType, email, password) {
  const fbAuthType = authType === "signin" ? "signInWithPassword" : "signUp"

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:${fbAuthType}?key=${FB_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true })
    }
  )

  const data = await response.json()

  if (!response.ok) {
    const error = data.error.message
    let message = "Something went wrong"

    // login errors
    if (error === "EMAIL_NOT_FOUND") message = "Invalid email"
    else if (error === "INVALID_PASSWORD") message = "Invalid password"
    // signup errors
    else if (error === "EMAIL_EXISTS") message = "Email already in use"
    else if (error.includes("WEAK_PASSWORD")) message = "Weak password"

    throw new Error(message)
  }

  return data
}

export const authenticate = (userId, token, expirationTime) => (dispatch) => {
  dispatch(setLogoutTimeout(expirationTime))
  dispatch({
    type: AUTHENTICATE,
    userId,
    token
  })
}

export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await authUser("signup", email, password)

      dispatch(
        authenticate(
          data.localId,
          data.idToken,
          parseInt(data.expiresIn) * 1000
        )
      )

      saveDataToStorage(data.idToken, data.localId, data.expiresIn)
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await authUser("signin", email, password)

      dispatch(
        authenticate(
          data.localId,
          data.idToken,
          parseInt(data.expiresIn) * 1000
        )
      )

      saveDataToStorage(data.idToken, data.localId, data.expiresIn)
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

let logoutTimeout

function setLogoutTimeout(expirationTime) {
  return (dispatch) => {
    logoutTimeout = setTimeout(() => {
      dispatch(logout())
    }, expirationTime)
  }
}

function clearLogoutTimeout() {
  logoutTimeout && clearTimeout(logoutTimeout)
}

export const logout = () => {
  clearLogoutTimeout()

  AsyncStorage.removeItem("userData")

  return { type: LOGOUT }
}

function saveDataToStorage(token, userId, expiresIn) {
  // current time in ms + expiration time in ms, converted to Date()
  const expirationDate = new Date(
    new Date().getTime() + parseInt(expiresIn) * 1000
  ).toISOString()

  return AsyncStorage.setItem(
    "userData",
    JSON.stringify({ token, userId, expirationDate })
  )
}
