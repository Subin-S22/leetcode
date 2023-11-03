function depthOfNode(node, x) {
  if (node === null) return -1;

  let max = 0;
  if (
    node.data === x ||
    Math.max(depthOfNode(node.left, x), max) >= 0 ||
    Math.max(depthOfNode(node.right, x), max)
  ) {
    return max + 1;
  }
  return max;
}

function heightOfNode(node, x) {
  if (node === null) return -1;

  let max;
  let left = Math.max(heightOfNode(node.left, x));
  let right = Math.max(heightOfNode(node.left, x));
  const value = Math.max(right, left) + 1;

  if (node.data === x) max = value;
  return max;
}
