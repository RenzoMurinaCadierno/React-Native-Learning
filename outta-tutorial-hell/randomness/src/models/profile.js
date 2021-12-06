import { TechIcon } from "./shared"
import { colors } from "@app-constants"

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

  function _createNewCourseOrProject(iconName, obj = {}) {
    if (obj.doResetType) _isTypePrimary = true

    let newCourse = { iconName, iconType: _typeMap.get(_isTypePrimary) }

    for (let key in obj) newCourse[key] = obj[key]

    _isTypePrimary = !_isTypePrimary

    return newCourse
  }

  return {
    course: (...args) => _createNewCourseOrProject("bookmark", ...args),
    project: (...args) => _createNewCourseOrProject("briefcase", ...args)
  }
})()
