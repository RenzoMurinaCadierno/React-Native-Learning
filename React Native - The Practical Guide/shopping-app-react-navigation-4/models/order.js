export default class Order {
  constructor(id, items, total, date) {
    this.id = id
    this.items = items
    this.total = total
    this.date = date
  }

  get stringDate() {
    return this.date.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })

    // if toLocaleDateString does not work, use moment library
    // return (this.date.format('MMMM Do YYYY, hh:mm'))
  }
}
