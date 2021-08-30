import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { NavigationActions } from "react-navigation"
import ShopNavigator from "./Shop"

export default function NavigationContainer(props) {
  const navRef = useRef()
  const isAuth = useSelector((state) => Boolean(state.auth.token))

  // this useEffect triggers when `!token`, which happens when the user
  // is logged out from anywhere in the app.
  // > Logout action is handled in reducer. Here we navigate to auth.
  useEffect(() => {
    if (!isAuth) {
      /**
       * A ref attached to a component wrapped with `createAppContainer`
       * gains access to `dispatch`, to fire navigation actions declared
       * there with the respective import from 'react-navigation'!
       */
      navRef.current.dispatch(NavigationActions.navigate({ routeName: "Auth" }))
    }
  }, [isAuth])
  return <ShopNavigator ref={navRef} />
}
