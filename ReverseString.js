// const array=["Baltazar", "Sanchez"];
//
// for (let i=0; i<=array.length-1; i++ )
//   {
//   for (let j=array[i].length; j>=0; j--)
//     {
//     console.log(array[i].charAt(j));
//     }
//   }

//console.log(array[0].length);

function stringReverse(str){
  if (!str || str.length <2 || typeof str !== 'string'){
    return "Somethig wrong";
  }
  const length= str.length-1;
  const invertString=[];
  for (let i=length; i>=0; i-- ){
      invertString.push(str[i]);
  }
  console.log(invertString);
  return invertString.join('');
}

function stringReverse2(str){
  console.log(str.split('').reverse().join(''));
  return str.split('').reverse().join('');
}
const stringReverse3 = str => str.split('').reverse().join('');

stringReverse('Hola Soy Hugo Balta');
stringReverse2('Hola Soy Hugo Balta');
//stringReverse3('Hola Soy Hugo');
