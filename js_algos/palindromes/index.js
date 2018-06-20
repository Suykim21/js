// Palindromes
// Method #1
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

// Method #2 - Array Helper Every()
function palindromeTwo(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })
}
