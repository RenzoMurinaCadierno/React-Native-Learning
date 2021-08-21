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

  if (!response.ok) {
    throw new Error("`signup`: Login error @store/actions/auth.js")
  }

  return await response.json()
}

export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await authUser("signup", email, password)
      console.log(data)
      dispatch({ type: SIGNUP })
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
      console.log(data)
      dispatch({ type: LOGIN })
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
