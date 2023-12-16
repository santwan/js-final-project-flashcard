// Function to calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to find the maximum number in an array
function findMaxNumber(numbers) {
  return Math.max(...numbers);
}

// Function to filter odd numbers from an array
function filterOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Function to find the missing number in an array of numbers from 1 to N
function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Function to find duplicate elements in an array
function findDuplicates(array) {
  const duplicates = [];
  const seen = {};

  for (const item of array) {
      if (seen[item]) {
          duplicates.push(item);
      } else {
          seen[item] = true;
      }
  }

  return duplicates;
}


const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
console.log('Sum:', sumArray(numbersArray));
console.log('Max Number:', findMaxNumber(numbersArray));
console.log('Odd Numbers:', filterOddNumbers(numbersArray));
console.log('Is Palindrome:', isPalindrome('level'));
console.log('Missing Number:', findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log('Duplicates:', findDuplicates(numbersArray));
