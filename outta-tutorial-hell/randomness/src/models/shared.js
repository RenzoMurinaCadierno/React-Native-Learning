export class TechIcon {
  constructor({ id, name, activeColor, inactiveColor, shortName }) {
    this.id = id
    this.name = name
    this.activeColor = activeColor
    this.inactiveColor = inactiveColor
    this.shortName = shortName
  }

  [Symbol.iterator] = function* () {
    yield this.name
    yield this.activeColor
    yield this.inactiveColor
  }
}
