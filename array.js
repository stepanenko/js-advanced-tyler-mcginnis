
function array() {
  let arr = Object.create(array.prototype);
  Object.defineProperty(arr, 'length', {
    value: 0,
    enumerable: false,
    writable: true
  });

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1;
  }

  return arr;
}

array.prototype.pop = function () {
  if (this.length < 1) return;
  this.length--;
  const elementToRemove = this[this.length - 1];
  delete this[this.length];
  return elementToRemove;
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

array.prototype.shift = function () {
  if (this.length < 1) return;
  const deleted = this[0];
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  this.length--;
  delete this[this.length];
  return deleted;
}

// Tylers Filter:
array.prototype.filter = function (cb) {
  let filtered = array();
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const element = this[index];

      if (cb(element, index)) {
        filtered.push(element);
      }
    }
  }
  return filtered;
}

// My Filter:
array.prototype.myFilter = function (cb) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      filtered = filtered.concat(this[i]);
    }
  }
  return filtered;
}

const a = array('Tom', 'Jerry', 'John', 'Bill');
// a.shift();

const res = a.myFilter(val => typeof(val) === 'string');
console.log(res);

const res2 = a.filter((val, i) => {
  console.log(i + ': ' + val);
  return val.charAt(0) !== 'J';
});
console.log(a);
console.log(res2);
