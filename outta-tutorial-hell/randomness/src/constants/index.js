import effects from "./animations/effects"
import easings from "./animations/easings"
import arrows from "./animations/arrows"
import icons from "./animations/icons"
import images from "./animations/images"
import card from "./animations/card"
import texts from "./animations/texts"
import colorsConstants from "./colors"
import stylesConstants from "./styles"
import * as profileConstants from "./sections/profile"
import * as projectsConstants from "./sections/projects"

export const animations = {
  effects,
  easings,
  arrows,
  icons,
  images,
  card,
  texts
}
export const colors = colorsConstants
export const styles = stylesConstants
export const sections = {
  profile: profileConstants,
  projects: projectsConstants
}

const constants = { animations, colors, styles, sections }

export default constants
