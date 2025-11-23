/* Q1:Spread Operator */
let arr1 =[10,20,30];
let arr2= [40,50];

let combined=[...arr1, ...arr2];
console.log(combined);

/* Q2:Spread Operator(Object) */

let person = { name: "Venu", age:25};
let extra = {city: "Bengaluru" };
let profile = {...person, ...extra};
console.log(profile);




