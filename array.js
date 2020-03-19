
function array() {
  let arr = Object.create(array.prototype);
  arr.length = 0;

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1
  }

  return arr;
}

array.prototype.push = function(element) {
  this[this.length] = element;
  this.length++;
  return this.length;
}

array.prototype.unshift = function(element) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = element;
  this.length++;
  return this.length;
}

array.prototype.pop = function() {

}

array.prototype.filter = function() {

}

const a = array('John', 'Bill');

console.log(a)
