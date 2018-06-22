// Array Chunk - chunk([1,2,3,4, 5], 2) => [[1,2],[3,4],[5]]
function chunk(array, size) {
  const chunked = [];
  for(let elem of array) {
    const last = chunked[chunked.length - 1]; 
    if(!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
}

// Method#2 - Using slice method
function chunkTwo(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}