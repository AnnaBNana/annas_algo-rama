// SLL node constructor
// node for SLL has minimum of 2 attributes, value and next
function Node(val){
  this.val = val;
  this.next = null;
}

// SLL constructor
// SLL must have a head, may or may not have a tail
function SLL(){
  this.head = null;
  this.tail = null;
  // add a length attribute and modify function to maintain it
};

//add a node to the end of the linked list
// change this function so we can push a node to any position
SLL.prototype.push = function(val){
  // reasons to pass in a node vs a value?
  var node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  }
  // adding a tail attribute means we don't have to loop through to find the end
  // but don't forget to move tail with each addition
  else {
    this.tail.next = node;
    this.tail = node;
  }
  return this;
};

// remove a node from the end of the list
SLL.prototype.pop = function(){
  var curr = this.head;
  if (!curr){ }
  else if (!curr.next) {
    this.head = null
  } else {
    while(curr.next.next){
      curr = curr.next
    }
    curr.next = null
    this.tail = curr;
  }
  return this
};

// output to console every node by position in list with value
SLL.prototype.show = function(){
  var curr = this.head;
  var counter = 0;
  while(curr){
    console.log("Value of node at position", counter, ":", curr.val);
    curr = curr.next;
    counter++;
  }
  return this;
};

// calculate the length of the linked list.
// consider adding this as an attribute if it is used frequently
SLL.prototype.length = function(){
  var curr = this.head;
  var count = 0;
  while (curr){
    count++;
    curr = curr.next;
  }
  return count;
};

// reverses a linked list
SLL.prototype.reverse = function () {
  var pivot = this.head, curr;
  if (!this.head || !this.head.next) {
    return this;
  }
  while(pivot.next){
    curr = pivot.next;
    if (curr.next) {
      pivot.next = curr.next;
    } else {
      // else statement makes the final swap
      this.tail = pivot;
      this.tail.next = null;
    }
    curr.next = this.head;
    this.head = curr;
  }
  return this;
};

// compare 2 linked lists
// returns false unless length and order of values are identical
function compare_lists(sll1,sll2){
  if (sll1.length() !== sll2.length()) {
    return false;
  }
  var curr1 = sll1.head;
  var curr2 = sll2.head;
  while (curr1){
    if (curr1.val !== curr2.val) {
      return false;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return true;
};
