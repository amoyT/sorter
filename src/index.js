class Sorter {

  constructor() {
    // your implementation
    this.arr = [];
    this.comp = function(a,b) { return a - b;};
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    indices.sort();
    var newArr = [];
    // indices.map(el => {
    //   newArr.push(this.arr[el]);
    // });
    for (var i = 0; i < indices.length; i++) {
      newArr.push(this.arr[indices[i]]);
    }
    newArr.sort(this.comp);
    // indices.map((el, i) => {
    //   this.arr[el] = newArr[i];
    // });
    for (var i = 0; i < newArr.length; i++) {
      this.arr[indices[i]] = newArr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comp = compareFunction;
  }
}

module.exports = Sorter;