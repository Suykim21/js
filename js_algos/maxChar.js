// Find Max Character in a string (most commonly used)
function maxChar(str) {
  const charMap = {}
  let max = 0;
  let maxChar = ''
  for(char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for(char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}