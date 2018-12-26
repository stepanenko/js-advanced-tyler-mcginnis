
function array() {
  let arr = {};
  arr.length = 0;

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1
  }

  return arr;
}

const a = array('John', 'Bill');

console.log(a)
