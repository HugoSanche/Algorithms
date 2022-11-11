const array=[2,1,4,2,3,4,6,9,3]
let aux=0;
function foundCaracter(arr){
let MAX=arr.length-1;
let contador=0;
for (let i=0;i<arr.length; i++)
  {
    for (let j=i+1;j<arr.length; j++)
    {
      console.log("arr[i] " +arr[i]+" arr[j] "+arr[j]+" contador "+contador);
      if (arr[i]===arr[j])
      {
        if (contador<MAX){
          MAX=contador;
          aux=arr[j];
          console.log("Contador "+contador+" MAX "+MAX +" arr "+arr[j]);
          contador=0;
        //  return;
        }
      }
      contador=contador+1;
    }
    contador=0;
  }
}
let map={};
function foundCaracter2(input){

  for (let i=0; i<input.length; i++)
  {
    if(map[input[i]] !== undefined)
      {
        return input[i];
      }
      else{
        map[input[i]]=i;
      }
      //console.log(map);
  }
  //console.log(map);
  return undefined;
}
let res=foundCaracter2([2,4,5,2,3,5,1,1,4]);
console.log(map);
console.log(res);
