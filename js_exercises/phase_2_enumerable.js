Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

const ele = function(acc, element) {
    return acc + element;
}

Array.prototype.myMap = function(callback) {
  const output = [];
  this.myEach(function(el) {
    output.push(callback(el));
  });
  return output;
}

Array.prototype.myReduce = function(callback, initialValue) {
  let acc;
  arr = Array.from(this);
  if (initialValue) {
    acc = initialValue;
  } else {
    acc = arr.shift();
  }

  arr.myEach((el) => {

    acc = callback(acc, el);
    
  });
  return acc;
}

