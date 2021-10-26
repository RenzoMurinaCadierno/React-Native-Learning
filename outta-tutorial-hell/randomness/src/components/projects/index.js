import React from "react"
import MenuRoot from "./menu/Root"
import MenuIconList from "./menu/IconList"
import BodyRoot from "./body/Root"
import BodyProjectsList from "./body/ProjectsList"
import BodyProjectsListEmpty from "./body/ProjectsListEmpty"
import BodyProjectsCard from "./body/ProjectsCard"

function Menu(props) {
  return <MenuRoot {...props} />
}

Menu.IconList = MenuIconList

function Body(props) {
  return <BodyRoot {...props} />
}

Body.ProjectsList = BodyProjectsList
Body.ProjectsListEmpty = BodyProjectsListEmpty
Body.ProjectsCard = BodyProjectsCard

const Projects = { Menu, Body }

export default Projects
