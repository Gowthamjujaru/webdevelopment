let food =[
    {
        title:"mutton mandi",
        price:2999,
        rating:5
    },
    {
        title:"chicken biriyani",
        price:899,
        rating:4.5
    },
    {
    title:"kashimeri biriyani",
    price:918,
    rating:4.7
    },   
]
// food.map((data)=>{
//     console.log(data.title);
// })
// let res =food.filter((data)=>{
// return data.title >4
// })
// console.log(data.title);
let res= food.reduce((sum,data)=>{
    return sum+=data.price
},0)
console.log(res);