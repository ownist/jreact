/** ChatGpt theke copy marchilam..
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}
*/

// eita ekhon nije nije claud er theke buje buje kortachi
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

const input = [10, 5, 8, 20, 15];
const output = findSecondLargest(input);
console.log(output);

// find using sort method
const find_second_largest_number = (nums) => {
  const numbers = nums.sort((a, b) => b - a);
  return numbers[1];
};

const result = find_second_largest_number(input);
console.log(result);
