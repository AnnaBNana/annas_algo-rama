function Node(val){
  this.val = val;
  this.next = null;
  this.prev = null;
};

function DLL(){
  this.head = null;
  this.tail = null;
};

// add a node to the front of the list
// modify functionality so a node can be pushed to any position in a list
DLL.prototype.push = function(val) {
  var node = new Node(val);
  if (!this.head){
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
  }
  this.tail = node;
  return this;
};

DLL.prototype.pop = function(){
  if(this.head == this.tail){
    this.head = null;
    this.tail = null;
  }
  else if(this.tail){
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  return this
}

// show all nodes in a linked list with values
DLL.prototype.show = function () {
  var curr = this.head, counter = 0;
  while (curr) {
    console.log("Node at position ", counter, " with value of", curr.val);
    counter++;
    curr = curr.next;
  }
  return this;
};

// reverse a DLL
DLL.prototype.reverse = function() {
  var curr = this.head
  if (curr && curr.next){
    while ()
  }
  return this;
}

dll1 = new DLL();
dll1.push(1).push(3).push(5).push(7).show();
console.log(dll1);
