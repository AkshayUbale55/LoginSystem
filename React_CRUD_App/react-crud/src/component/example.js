// Normal function (function declaration)

// type 1:-
function Multiply1(a,b){
    return a*b
   }
   const product1 = Multiply1(3,7)

   console.log(product1)


//    Type 2:    
function Multiply2(){
 return "Good"
}
const product2 = Multiply2() 
console.log(`Rashmi is a ${product2} girl`)
            


// Function Expression
// Type 1:-
const expresssionExample = function Example1(a,b){
    return a*b
   }
   console.log(expresssionExample())

// Type 2
const Expression = function Multiply2(){
    return "bad"
}
console.log(`Rashmi is a ${Expression()} girl`)


// Arrow Functions
const ShreeRam = ()=>{
   return "Jai Shree Ram"
}
console.log(ShreeRam())

// Arrays
const Arr1 = [2,1,3,4,6,5]
console.log(Arr1.sort())
console.log(Arr1.push(7))
console.log(Arr1)
console.log(Arr1.indexOf(1))
console.log(Arr1.indexOf(Arr1.length-2))
const Arr2 = [2,1,3,4,6,5]
console.log(Arr2[3])


// Objects 
const objvalue = {
    gender : 'male',
    birthyear : 2000,
    name : "Ram",
    calage : function (){
        this.age =  2023 - this.birthyear
        return this.age;
    }
}
console.log(objvalue)
console.log(objvalue.calage())


const objvalue2 = {
    gender : 'male',
    birthyear : 2000,
    firstname: "Saipranay",
     Name : function (){
        this.Fullname = this.firstname + " Alishetty"
        return this.Fullname;
    }
}
console.log(objvalue2.Name())

function GetValue(objvalue){
    return objvalue.age = 19
}
objvalue.age = 19;
console.log(objvalue)
console.log(GetValue())


function Car(make,model){
    this.make = make;
    this.mode = model
}

const mycar = new Car("Benz","s200")
console.log(mycar)



const Brand = "Tata";
const Vehicle = {
    Brand,
    Drive(){console.log("Driving")}
}

console.log(Vehicle)



// let -> function scope
// var -> global scope 
// const -> function scopt and value cannot be changed 



// Loops
let i = 0;
for ( ; i <10  ; ) {    
    console.log(i++)
}

// for(let i=0; i<10; i++){
//     console.log(i)
// }


// let j = 0;
// while ( j <10  ) {    
//     console.log(j++)
// }

 do {
    let value = "Hey you have executed me before loop runs";
    var k = 0;
    console.log(k);
    console.log(value)
 }while(k<10)

