import colors from "@app-constants/colors"

export class SectionItem {
  constructor(category, title, subtitle, color, bullets) {
    this.category = category
    this.title = title
    this.subtitle = subtitle
    this.color = color || colors.main.PRIMARY
    this.bullets = bullets
  }
}
