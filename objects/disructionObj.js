/// in arry slice or forloop hi sahi hai element get krnae k liyea
let a = [1, 2, 3, 4, 5];

let [kuchBhi, , , reqVar] = a;

console.log(kuchBhi);
console.log(reqVar);
/// distruction is usefull in objects 
// iska main kaam object ki key value ko get kar k print krnana hota hai
// on the condetion key name and var name should be same
let add = {
    city: "Delhi",
    region: "Pitampura",
    pin: 110001,
  };
  
  let { region, pin, city, myVar } = add;
  
  console.log(region);
  console.log(pin);
  console.log(city);
  
  console.log(myVar);