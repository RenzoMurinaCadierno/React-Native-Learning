import { TechIcon } from "./shared"
import colors from "@app-constants/colors"

export class SectionItem {
  constructor(title, subtitle, color, bullets) {
    this.title = title
    this.subtitle = subtitle
    this.color = color || colors.main.PRIMARY
    this.bullets = bullets
  }
}

export class ProfileIcon extends TechIcon {
  constructor({ id, name, shortName, activeColor }) {
    super({
      id,
      name,
      shortName,
      activeColor,
      inactiveColor: colors.main.PRIMARY_RGB_FORMATTED
    })
  }
}
