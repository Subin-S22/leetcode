export default function maxArea(height) {
  //with for loop - time complexity of O(n2)
  function forLoop() {
    console.time();
    let maxValue = 0;
    for (let i = 0; i < height.length; ++i) {
      for (let j = i + 1; j < height.length; ++j) {
        //for greater height
        let w = j - i;
        let l;
        if (height[j] > height[i]) {
          l = height[i];
        } else {
          l = height[j];
        }

        if (maxValue < l * w) {
          maxValue = l * w;
        }
      }
    }
    console.timeEnd();
    return maxValue;
  }
  //with while loop - time complexity of O(n)
  function whileLoop() {
    console.time();
    //more the distance - more the area
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let maxValue = 0;

    while (leftIndex < rightIndex) {
      let leftValue = height[leftIndex];
      let rightValue = height[rightIndex];

      let width = rightIndex - leftIndex;

      let smallestValue = leftValue < rightValue ? leftValue : rightValue;

      let area = width * smallestValue;

      maxValue = maxValue < area ? area : maxValue;

      smallestValue === leftValue ? leftIndex++ : rightIndex--;
    }
    console.timeEnd();
    return maxValue;
  }
  return { forLoop, whileLoop };
}
