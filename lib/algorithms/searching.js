export async function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid = (right - left) / 2;
  while (right >= left) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
