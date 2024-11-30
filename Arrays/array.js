// Bubble sort for ascending order
function Ascending_sorted_Array(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp_value = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp_value;
      }
    }
  }
  return arr;
}

// Bubble sort for descending order
function Descending_sorted_Array(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap elements
        let temp_value = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp_value;
      }
    }
  }
  return arr;
}

function processInput(sortType) {
  // Clear previous error and result
  document.getElementById("errorMessage").innerText = "";
  document.getElementById("result").innerText = "";

  // Get input from text box
  let input = document.getElementById("arrayInput").value.trim();

  // Validate input (only numbers and commas)
  if (!/^-?\d+(\s*,\s*-?\d+)*$/.test(input)) {
    document.getElementById("errorMessage").innerText =
      "Please enter only numbers separated by commas.";
    return;
  }

  // Convert input string to array of numbers
  let inputArray = input.split(",").map((num) => parseFloat(num.trim()));

  // Sort the array based on sort type
  let sortedArray;
  if (sortType === "ascending") {
    sortedArray = Ascending_sorted_Array(inputArray);
  } else if (sortType === "descending") {
    sortedArray = Descending_sorted_Array(inputArray);
  }

  // Display result
  document.getElementById("result").innerText =
    `Sorted Array (${sortType}): ` + sortedArray.join(", ");
}
