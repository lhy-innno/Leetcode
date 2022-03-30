var deleteNode = function(root, key) {
  if (!root) {
    return null
  }
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null
    } else if(!root.left) {
      return root.right
    } else if(!root.right) {
      return root.left
    } else {
      let node = findRiMin(root)
      root.right = deleteNode(root.right, node.val)
      root.val = node.val
    }
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  return root
};
let findRiMin = root => {
  let node = root.right
  while (node.left) {
    node = node.left
  }
  return node
}
