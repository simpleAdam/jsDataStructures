class Queue{
  constructor() {
    this.list=[];
  }
  add(node) {
    this.list.push(node)
    return node
  }
  remove() {
    return this.list.shift()
  }
}
