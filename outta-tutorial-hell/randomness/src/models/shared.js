export class DefaultIcon {
  constructor(id, name, activeColor) {
    this.id = id
    this.name = name
    this.activeColor = activeColor
  }

  [Symbol.iterator] = function* () {
    yield this.id
    yield this.name
    yield this.activeColor
  }
}
