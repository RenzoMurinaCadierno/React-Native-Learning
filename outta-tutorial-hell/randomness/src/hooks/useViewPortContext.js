import { useContext } from "react"
import ViewPortContext from "@app-context/viewPort"

export default function useViewPortContext() {
  return useContext(ViewPortContext)
}
