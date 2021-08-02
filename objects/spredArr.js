let a = [1, 2, 3];
let b = [4, 6];

let c = [...a, ...b];

let d = [...a, ...a, ...a];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//-----------------------------
 //q1
 let  a1 =[1,2,3,4,5];
 let  b1 = [...a1];
 
console.log(b1);

//-----------------
//q2
let o1 ={o1:1,b:2};
let o2 ={c:3};
let c3 ={...o1,...o2,...o1,...o2};
console.log(c3);