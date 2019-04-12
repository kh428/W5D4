Array.prototype.uniq = function(){

  const result = [];
  for(let i = 0; i < this.length; i++) {
    if (result.includes(this[i])) { 
      continue; 
    } else {
      result.push(this[i]);
    }

  }
  return result
}

Array.prototype.twoSum = function(){

  const donkey = [];
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0){
        donkey.push([i, j]);
      }
    }
  }
  return donkey;
}

Array.prototype.transpose = function () {
  const output = Array.from(Array(this.length), x => []);
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
     output[j][i] = this[i][j];
    }
  }
  return output;
}

