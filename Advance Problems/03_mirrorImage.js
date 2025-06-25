function createMirrorString(str) {
  const reversed = str.split('').reverse().join('');
  return str + reversed;
}

console.log(createMirrorString("hello")); 
// Output: "helloolleh"