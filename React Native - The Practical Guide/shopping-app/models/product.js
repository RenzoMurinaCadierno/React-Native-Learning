export class Product {
  constructor(id, userId, pushToken, title, imageUrl, description, price) {
    this.id = id
    this.userId = userId
    this.pushToken = pushToken
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }
}
