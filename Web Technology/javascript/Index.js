// w.p to create sqaure of every element in this Array



// function square(a){

//     for(let i=0;i<a.length;i++){
//         console.log(a[i]**2);
//     }
//  }
//  square([1,2,3,4,5]);


 //
//  let a = [1,2,3,,,,,4,5]
//  let result = a.map((x)=>{
//     return x**2;

//  })
//  console.log(result);

let a=[1,2,3,4,5]
// let result =a.filter((x)=>{
//     return x%2;  //based on 1 and 0 like as ture or false
// })

// console.log(result);
//let result = a.map((x) =>x**2)
//console.log(result);
 

let result = a.reduce((sum,x)=>{
    return sum+=x
},0)
console.log(result);