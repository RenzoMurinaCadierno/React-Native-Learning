export class TechIcon {
  constructor({ id, name, activeColor, inactiveColor }) {
    this.id = id
    this.name = name
    this.activeColor = activeColor
    this.inactiveColor = inactiveColor
  }

  [Symbol.iterator] = function* () {
    yield this.name
    yield this.activeColor
    yield this.inactiveColor
  }
}
