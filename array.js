
function array() {
  let arr = Object.create(array.prototype);
  arr.length = 0;

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1
  }

  return arr;
}

array.prototype.pop = function () {
  if (this.length < 1) return;
  let deleted = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return deleted;
}

array.prototype.push = function (element) {
  this[this.length] = element;
  this.length++;
  return this.length;
}

array.prototype.unshift = function (element) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = element;
  this.length++;
  return this.length;
}

array.prototype.myFilter = function (cb) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      filtered = filtered.concat(this[i]);
    }
  }
  return filtered;
}

const a = array('John', 'Bill');
a.push(45);
const res = a.myFilter(val => typeof(val) === 'string');
console.log(res); 

let ar = [1, 2, 3];
// console.log(ar.filter(val => val === 2));
