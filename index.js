
function sum(fromN, toN) {

if (fromN === toN){
  return fromN
}
console.log(fromN);
return (fromN + (sum(fromN + 1, toN)))
}

module.exports = sum;
