//select search take the first index as min index and compare other value from other index from the inner loop,
//if the min index value is greater than the other index value change the min value to that index
//and after the inner loop is completed. swap the min value with the outer loop index value.
export function selectionSearch(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
}

//An optimized bubble sort
export function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let isSwapped = false;
    //we can use arr length - i - 1 because of the first outer loop iteration the last element
    //will be the largest in the array
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    //since there is no swapping occured in the inner loop
    //that implies that arr is sorted.
    if (!isSwapped) break;
  }
}

//insertion sort
export function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

//merge sort

export function mergeSort(arr, l, r) {
  if (l >= r) return;

  let mid = parseInt(l + (r - l) / 2); // l is added becuase to get indexing right

  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr, l, mid, r) {
  const mergedArray = new Array(r - l + 1);
  let index = 0;
  let index1 = l;
  let index2 = mid + 1;
  while (index1 <= mid && index2 <= r) {
    if (arr[index1] <= arr[index2]) {
      mergedArray[index] = arr[index1];
      index1++;
    } else {
      mergedArray[index] = arr[index2];
      index2++;
    }
    index++;
  }
  while (index1 <= mid) {
    mergedArray[index++] = arr[index1++];
  }
  while (index2 <= r) {
    mergedArray[index++] = arr[index2++];
  }
  for (let i = 0, j = l; i < mergedArray.length; ++i, ++j) {
    arr[j] = mergedArray[i];
  }
}

// function merge(arr, l, m, r) {
//   var n1 = m - l + 1;
//   var n2 = r - m;

//   // Create temp arrays
//   var L = new Array(n1);
//   var R = new Array(n2);

//   // Copy data to temp arrays L[] and R[]
//   for (var i = 0; i < n1; i++) L[i] = arr[l + i];
//   for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

//   // Merge the temp arrays back into arr[l..r]

//   // Initial index of first subarray
//   var i = 0;

//   // Initial index of second subarray
//   var j = 0;

//   // Initial index of merged subarray
//   var k = l;

//   while (i < n1 && j < n2) {
//     if (L[i] <= R[j]) {
//       arr[k] = L[i];
//       i++;
//     } else {
//       arr[k] = R[j];
//       j++;
//     }
//     k++;
//   }

//   // Copy the remaining elements of
//   // L[], if there are any
//   while (i < n1) {
//     arr[k] = L[i];
//     i++;
//     k++;
//   }

//   // Copy the remaining elements of
//   // R[], if there are any
//   while (j < n2) {
//     arr[k] = R[j];
//     j++;
//     k++;
//   }
//   console.log(arr);
// }

export function quickSort(arr, l, r) {
  if (l < r) {
    const pi = partition(arr, l, r);

    quickSort(arr, l, pi);
    quickSort(arr, pi + 1, r);
  }
}

function mergesort1(arr, l, r) {
  if (l <= r) {
    return;
  }
  const m = l + parseInt(r - l) / 2;

  mergesort1(arr, l, m);
  mergesort1(arr, m + 1, r);
  merge(arr, l, m, r);
}

function merge1(arr, l, m, r) {
  const n1 = m - l + 1;
  const n2 = r - m;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; ++i) {
    L[i] = arr[l + i];
  }
  for (let i = 0; i < n1; ++i) {
    R[i] = arr[m + i + 1];
  }

  let i = 0,
    j = 0,
    k = l;
  console.log(i, j, k);
}
