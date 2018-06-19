// Reverse the string
// Method #1 - Split, reverse, join
function reverse(str) {
  return str.split('').reverse().join('');
}

// Method #2 - Manual Work
function reverseTwo(str) {
  let reversed = '';
  for(let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Method #3 - Reduce Array Helper
function reverseThree(str) {
  // reduce((accumulator, currentValue) => currentValue + accumulator, initialValue))
  str.split('').reduce((reversed, char) =>  char + reversed, ''); // accumulator starts at index 0 and curr at index 1s
}