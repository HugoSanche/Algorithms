//Compare if the sum of the 2 items of the array sum the second paramether (9)
function pairWithSum2(arreglo, sum){
  const mySet= new Set();
  for (let i=0; i<arreglo.length; i++){
    if (mySet.has(arreglo[i])){
      return true;
    }
    mySet.add(sum-arreglo[i]);
  }
  return false;
}
const res=pairWithSum2([9,4,1,3,0,7],9);
console.log(res);
