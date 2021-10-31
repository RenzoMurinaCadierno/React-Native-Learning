import { TechIcon } from "./shared"
import colors from "@app-constants/colors"

export class ContactIcon extends TechIcon {
  constructor({ id, name, activeColor }) {
    super({
      id,
      name,
      activeColor,
      inactiveColor: colors.background.DARK_ALPHA(0.2)
    })
  }
}
