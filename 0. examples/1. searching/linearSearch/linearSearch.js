// Search integer value from an array
const linearSearch = (arr, target) => {
    if (arr.length === 0) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return true;
        }
    }
    return false;
}

const result = linearSearch([2, 7, 8, 3, 5], 8);
console.log(result);

// Search character from a string
const linearSearch2 = (str, target) => {
    if (str.length === 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (target.toLowerCase() === str[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

const result2 = linearSearch2("Abhishek", "k");
console.log(result2);

// Search a value from given range
const start = 2;
const end = 5;
const linearSearch3 = (arr, target, start, end) => {
    if (arr.length === 0) {
        return false;
    }
    for (let i = start; i < end; i++) {
        if (target === arr[i]) {
            return true;
        }
    }
    return false;
}

const result3 = linearSearch3([3, 6, 8, 3, 6, 7], 8, start, end);
console.log(result3);

// Find Minimum Value
const findMin = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
const result4 = findMin([3, 6, 8, 3, 6, 7]);
console.log(result4);

// Search in 2D Array
const arr = [
    [23, 4, 1],
    [18, 12, 3, 9],
    [78, 99, 34, 56],
    [18, 12]
  ];
  const target = 34;
  
  const searchIn2dArray = () => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (target === arr[i][j]) {
          return {
            i,
            j
          };
        }
      }
    }
    return false;
  }
  const res = searchIn2dArray();
  console.log(res)
  