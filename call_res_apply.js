
// let tea = {
//     name:"green tea",
//     price: 100,
//     getPrice: function(){
//         console.log(this.price);
//     }
// }
// let coffee = {
//     name:"cold coffee",
//     price: 150,
// }
// let juice = {
//     name:"orange juice",
//     price: 80,
// }
// tea.getPrice.call(coffee);
// tea.getPrice.call(juice);
// tea.getPrice.call(tea);

//////////////////////////////////////////////////////////////////call 


// let laptop = {
//     company: "HP",
//     model: "Elitebook",
// };

// var bike = {
//     company: "Royal Enfield",
//     model: "Bullet",
// };

// function showprice(price, owner) {
//     console.log(this.company + " " + this.model + ", Price: " + price + ", Owner: " + owner);
// }

// // Assuming `phone` object exists, here's an example:
// var phone = {
//     company: "Samsung",
//     model: "Galaxy S21"
// };

// showprice.call(phone, 1000, "Priyanka");
// showprice.call(laptop, 50000, "Amit");
// showprice.apply(bike, [100000, "Preeti"]);


/////////////////////////////////////////////////////////////////////////////////res


// let phone = {
//     company:"Nokia",
//     price:5000,
//     printPrice: function(){
//         console.log("price:" ,this.price,"company:",this.company);
//     }
// }
// let res = phone.printPrice.bind(phone);
// res();

function user(name,age,cla){
    name:name;
    age:age;
    clas:cla
}
console.log(user("priyanka",12,12));