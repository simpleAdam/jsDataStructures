class Stack{
constructor() {
this.list=[];
}
add(item) {
this.list.push(item)
}
pop(item) {
this.list.pop(item)
}
}

let pile = new Stack
pile.add('treasure hoard')
pile.add('pieces-o-eight')
pile.add('dirt')
pile.add('dirt')
pile.add('dirt')
console.log(pile.list)
pile.pop()
pile.pop()
pile.pop()
console.log(pile.list)
//module.exports=Stack
