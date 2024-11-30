function optimizedBubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // If no swapping occurred, array is already sorted
    if (!swapped) break;
  }
  return arr;
}

function measureSortPerformance(arr, sortFunction) {
  // Create a copy of the array to avoid modifying the original
  const arrCopy = [...arr];

  const start = performance.now();
  const sortedArr = sortFunction(arrCopy);
  const end = performance.now();

  console.log(`Sort took ${end - start} milliseconds`);
  return sortedArr;
}

// Example usage
const originalArray = [10, 20, 3, 2, 7, 4, 6, 1];
const sortedArray = measureSortPerformance(originalArray, optimizedBubbleSort);

console.log("Original Array:", originalArray);
console.log("Sorted Array:", sortedArray);
