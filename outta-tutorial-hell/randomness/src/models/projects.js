import { TechIcon } from "./shared"
import colors from "@app-constants/colors"

export class ProjectsIcon extends TechIcon {
  constructor({ id, name, shortName, activeColor }) {
    super({
      id,
      name,
      shortName,
      activeColor,
      inactiveColor: colors.main.SECONDARY_ALPHA(0.8)
    })
  }
}

function addLeadingZero(num) {
  return num <= 9 ? "0" + num : num
}

function _getImageUrl(imageIndex, basePath, folder, subfolder) {
  return `${basePath}${folder}/${subfolder}/${imageIndex}.jpg`
}

export class ProjectsImage {
  constructor({ id, index, basePath, folder, subfolder }) {
    this.id = id
    this.uri = _getImageUrl(addLeadingZero(index), basePath, folder, subfolder)
  }
}
