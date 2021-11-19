import React from "react"
import MenuRoot from "./menu/Root"
import MenuIconList from "./menu/IconList"
import BodyRoot from "./body/Root"
import BodyProjectsList from "./body/ProjectsList"
import BodyProjectsListEmpty from "./body/ProjectsListEmpty"
import BodyProjectsCardRoot from "./body/ProjectsCard"
import BodyProjectsCardActions from "./body/ProjectsCardActions"
import BodyProjectsCardPointer from "./body/ProjectsCardPointer"

function Menu(props) {
  return <MenuRoot {...props} />
}

Menu.IconList = MenuIconList

function Body(props) {
  return <BodyRoot {...props} />
}

function BodyProjectsCard(props) {
  return <BodyProjectsCardRoot {...props} />
}

Body.ProjectsList = BodyProjectsList
Body.ProjectsListEmpty = BodyProjectsListEmpty
Body.ProjectsCard = BodyProjectsCard

BodyProjectsCard.Actions = BodyProjectsCardActions
BodyProjectsCard.Pointer = BodyProjectsCardPointer

const Projects = { Menu, Body }

export default Projects
