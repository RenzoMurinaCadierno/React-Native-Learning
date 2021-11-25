import React, { createContext } from "react"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useBreakpoints from "@app-hooks/useBreakpoints"

const BannerContext = createContext({
  fontScale: 17,
  headerShrinkThereshold: 300
})
const BodyContext = createContext({ fontScale: 11 })

function BannerContextProvider({ children }) {
  const { vw, vh } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const context = {
    fontScale: breakpoints.select({ sm: vw(5.5), any: vw(5) }),
    headerShrinkThereshold: vh(50),
    isSmallDevice: breakpoints.get("sm")
  }

  return (
    <BannerContext.Provider value={context}>{children}</BannerContext.Provider>
  )
}

function BodyContextProvider({ children }) {
  const { vw } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const context = {
    fontScale: breakpoints.select({ sm: vw(3.5), any: vw(3) })
  }

  return <BodyContext.Provider value={context}>{children}</BodyContext.Provider>
}

const Context = {
  Banner: {
    Consumable: BannerContext,
    Provider: BannerContextProvider
  },
  Body: {
    Consumable: BodyContext,
    Provider: BodyContextProvider
  }
}

export default Context
