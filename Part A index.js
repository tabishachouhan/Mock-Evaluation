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

/* Q3 :Rest Operator */

function sumAll(...numbers) {
    return numbers.reduce((total,num))
}
console.log(sumAll(1,2,3,4));



/* Q4: Rest Operator */

let numbers= [10,20,30,40,50];

let [a, ...remaining] = numbers;

console.log(a);
console.log(remaining);

/* Q5: Nested Object Destructuring
 */

let user= {
    name: "Alice",
    address: {
        city: "Bengaluru",
        pin: 560001,
        geo: {lat: 11.22, lng: 77.33}

    
    }
};

const {
    address: {city, geo: {lat,lng} =user;
}
}
console.log(city);
console.log(lat);
console.log(lng);


/* Q6: Arrow Function */

function multiply(a,b) {
    return a*b;
}

const multiply = (a,b) =>a*b;
console.log(multiply(4,5));


/* Q7:optional chaining */

let emp = {
    name: "Prakash",
    details: {
        department: "IT",
        profile: { role:"Developer"}

    }
};

let role= emp?.details?.profile?.role;emp;
console.log(role);

