import React, {useContext} from "react"
import Layout from "@app-components/layout"
import Context from "@app-context"

export default function ProjectsListEmpty(props) {
  const { fontScale } = useContext(Context.Projects.Body.Consumable)
  finish this one. Abstract fontScale in other screens. Go on testing diff devices
  return (
    <Layout.Screen.Placeholder
      title="No category selected"
      subtitle="Tap an icon to load some projects"
      {...props}
    />
  )
}
