const FB_API_KEY = `AIzaSyCYMZ0dYeN1G2i72aG0GboxR6uM-B_Ql7w`

export const SIGNUP = "SIGNUP"
export const LOGIN = "LOGIN"

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

export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await authUser("signup", email, password)

      dispatch({ type: SIGNUP, token: data.idToken, userId: data.localId })
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

      dispatch({ type: LOGIN, token: data.idToken, userId: data.localId })
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
