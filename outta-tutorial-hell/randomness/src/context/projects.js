import React, { createContext } from "react"
import useViewPortContext from "@app-hooks/useViewPortContext"
import useBreakpoints from "@app-hooks/useBreakpoints"

const MenuContext = createContext({ fontScale: 23 })
const BodyContext = createContext({ fontScale: 17, cardMaxHeight: 250 })

function MenuContextProvider({ children }) {
  const { vw } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const context = {
    fontScale: breakpoints.select({ sm: vw(11), any: vw(9.5) })
  }

  return <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
}

function BodyContextProvider({ children }) {
  const { vw, vh } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const context = {
    fontScale: breakpoints.select({ sm: vw(5.25), any: vw(4.5) }),
    cardMaxHeight: breakpoints.select({ sm: vh(47.5), any: vh(44.5) })
  }

  return <BodyContext.Provider value={context}>{children}</BodyContext.Provider>
}

const Context = {
  Menu: {
    Consumable: MenuContext,
    Provider: MenuContextProvider
  },
  Body: {
    Consumable: BodyContext,
    Provider: BodyContextProvider
  }
}

export default Context
