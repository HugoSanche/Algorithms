//Compare 2 arrays
//O(a+b) time complexyty
//O(a) space complexyty

let array1=['b','f','p','z'];
let array2=['a','x','y'];

function compareTwoArrays(array1,array2){
    let map={};
    //Read the firts array and create a object
    for (let i=0; i<array1.length;i++){
      map[array1[i]] = true;
    }
    //compare the object with the second array
    for (let j=0; j<array2.length;j++){
      if(map[array2[j]]){
        return true;
      }
    }
 return false;
}



//other solution maybe more redeable
function compareTwoArrays2(array1,array2) {
  return array1.some(item=>array2.includes(item));
}
compareTwoArrays(array1,array2);
