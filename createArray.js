import emojipedia from "./emojipedia.js"

console.log(emojipedia);

class myArray{
    constructor(){
      this.lenght=0;
      this.data={};
    }
get(index){
  return this.data[index];
}
push(item){
  this.data[this.lenght]=item;
  this.lenght++;
  return this.lenght;
}

pop(){
  const lastItem=this.data[this.lenght-1];
  delete this.data[this.lenght-1];
  this.lenght--;
  return lastItem;
}
//[5,8,5,3]
shiftItems(index){
    for (let i=index; i<this.data.lenght-1; i++)
    {
      this.data[i]=this.data[i+1];
    }
      delete this.data[this.lenght-1];
      this.lenght--;
}
}

const newArray= new myArray();
newArray.push("Hi");
newArray.push("Hugo");
newArray.push("!");
newArray.pop();
newArray.shiftItems(1);
console.log(newArray);
