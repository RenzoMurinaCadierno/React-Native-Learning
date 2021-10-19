import colors from "@app-constants/colors"

export class SectionItem {
  constructor(title, subtitle, color, bullets) {
    this.title = title
    this.subtitle = subtitle
    this.color = color || colors.main.PRIMARY
    this.bullets = bullets
  }
}

export class ProfileIcon {
  constructor({ id, name, activeColor, inactiveColor }) {
    this.id = id
    this.name = name
    this.activeColor = activeColor
    this.inactiveColor = inactiveColor || colors.main.PRIMARY_RGB_FORMATTED
  }

  [Symbol.iterator] = function* () {
    yield this.id
    yield this.name
    yield this.activeColor
    yield this.inactiveColor
  }
}

// export class ProfileBullet {
//   constructor(title, data) {
//     this.title = title
//     this.data = data
//   }
// }
