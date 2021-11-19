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

export const create = (function () {
  const _typeMap = new Map()
  _typeMap.set(true, "primary")
  _typeMap.set(false, "secondary")

  let _isTypePrimary = true

  function _create(
    iconName,
    primaryKey,
    text,
    descriptionText,
    sideText = "",
    resetType
  ) {
    if (Boolean(resetType)) _isTypePrimary = true

    const newCourseOrProject = {
      primaryKey,
      iconName,
      iconType: _typeMap.get(_isTypePrimary),
      text,
      descriptionText,
      sideText
    }

    _isTypePrimary = !_isTypePrimary

    return newCourseOrProject
  }

  return {
    course: (...args) => _create("bookmark", "", ...args),
    project: (...args) => _create("briefcase", ...args)
  }
})()
