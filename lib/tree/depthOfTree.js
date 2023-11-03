//height and depth of the tree when consider total is same
function depthOfTree(node) {
  if (node === null) return -1;

  let max = 0;
  for (let i = 0; i < node.child; i++) {
    max = Math.max(max, depthOfTree(node.child[i]));
  }
  return max + 1;
}
