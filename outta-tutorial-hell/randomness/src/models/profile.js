import colors from "@app-constants/colors"
import { DefaultIcon } from "./shared"

export class SectionItem {
  // constructor(category, title, subtitle, color, bullets) {
  constructor(title, subtitle, color, bullets) {
    this.title = title
    this.subtitle = subtitle
    this.color = color || colors.main.PRIMARY
    this.bullets = bullets
  }
}

export class ProfileIcon extends DefaultIcon {
  constructor(id, name, activeColor, inactiveColor) {
    super(id, name, activeColor)
    this.inactiveColor = colors.main.PRIMARY_RGB_FORMATTED
  }
}

export class ProfileBullet {
  constructor(title, data) {
    this.title = title
    this.data = data
  }
}
