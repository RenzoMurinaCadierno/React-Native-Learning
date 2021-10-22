import { TechIcon } from "./shared"
import colors from "@app-constants/colors"

export class ProjectsIcon extends TechIcon {
  constructor({ id, name, activeColor }) {
    super({
      id,
      name,
      activeColor,
      inactiveColor: colors.main.SECONDARY_ALPHA(0.8)
    })
  }
}
