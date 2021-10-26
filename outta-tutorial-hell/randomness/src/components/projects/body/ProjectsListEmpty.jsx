import React from "react"
import Layout from "@app-components/layout"

export default function ProjectsListEmpty(props) {
  return (
    <Layout.Screen.Placeholder
      title="No category selected"
      subtitle="Tap an icon to load some projects"
      {...props}
    />
  )
}

ProjectsListEmpty.defaultProps = { titleProps: {}, subtitleProps: {} }
