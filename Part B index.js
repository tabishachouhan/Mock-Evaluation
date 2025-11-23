/* Q8-  */

let nums= [10,3,7,20,13,2];
let squares=nums.atmap(num=>num*num);
console.log(squares);

let primes= num.filter(num=> {
    if (num<2) return false;
    for (let i =2; i<= Maths.sqrt(num); i++){
        if (num%i===0) return false;
    }
    return true;
});
console.log(primes);

let total = nums.reduce((sum,num)=>sum+num,0);
console.log(total);