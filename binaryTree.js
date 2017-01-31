function BTNode(value){
  this.val = value;
  this.left = null;
  this.right = null;
}
function BST() {
  this.root = null;
}
BST.prototype.add = function (node, pointer) {
  if (!this.root) {
    this.root = node;
    return;
  }
  if (!pointer) {
    pointer = this.root
  }
  if (node.val <= pointer.val) {
    if (pointer.left) {
      pointer = pointer.left;
      this.add(node, pointer);
    }
    pointer.left = node;
  }
  else if (node.val > pointer.val) {
    if (pointer.right) {
      pointer = pointer.right;
      this.add(node, pointer);
    }
    pointer.right = node;
  }
}
BST.prototype.contains = function(val, pointer) {
  if (!this.root) {
    return false;
  }
  if (!pointer) {
    pointer = this.root;
  }
  if (val < pointer.val) {
    if (pointer.left) {
      return this.contains(val, pointer.left);
    } else {
      return false;
    }
  }
  else if (val > pointer.val) {
    if (pointer.left) {
      return this.contains(val, pointer.right);
    } else {
      return false;
    }
  }
  else {
    return true;
  }
}
BTNode.prototype.height = function(){
  var left_depth,
      right_depth;
  if(!this) {
    return 0;
  }
  if (this.left) {
    left_depth = this.left.height();
  } else {
    left_depth = 0;
  }
  if (this.right) {
    right_depth = this.right.height();
  } else {
    right_depth = 0;
  }
  if (left_depth > right_depth) {
    return left_depth + 1;
  } else {
    return right_depth + 1;
  }
}
