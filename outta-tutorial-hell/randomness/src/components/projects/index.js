import React from "react"
import MenuRoot from "./menu/Root"
import MenuIconList from "./menu/IconList"
import BodyRoot from "./body/Root"

function Menu(props) {
  return <MenuRoot {...props} />
}

Menu.IconList = MenuIconList

function Body(props) {
  return <BodyRoot {...props} />
}

const Projects = { Menu, Body }

export default Projects
