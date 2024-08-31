///////////////////////////////////////////////////////////////hoisting
// console.log(a);
// function greet(){
// }
// let a = 9;


//////////////////////////////////////////////////////////////////////object
// const user ={
//     name:"priyanka",
//     age: 19,
//     year: 2023,
// }
// // user.name = "Ppara";
// // console.log(user);
// delete user.name;
// console.log(user);


//////////////////////////////////////////////////////////////// shallow
// let student = {
//     name: "priyanka",
//     class: 12,
//     age: 19,
//     year: 2023,
//     country:{
//         name:"india",
//         city:"kanpur",
//     }
// }
// let student1 = {...student};
// student1.country.name = "preeti";
// console.log(student);
// console.log(student1);

///////////////////////////////////////////////////////////////deep copy

// let student = {
//     name: "priyanka",
//     class: 12,
//     age: 19,
//     year: 2023,
//     country:{
//         name:"india",
//         city:"kanpur",
//     }
// }
// let student1 = JSON.parse(JSON.stringify(student));
// student.name = "paras";
// student1.name = "preeti";
// console.log(student);
// console.log(student1);


///////////////////////////////////////////////////////////factory function
// function user(name,age,cls){
//     return{
//         name:name,
//         age: age,
//         year: cls,
//     }
// }
// console.log(user("priyanka",19,12));


////////////////////////////////////////////////////////////////consuctor
// function user(name,age,cls){
//     this.name = name;
//     this.age = age;
//     this.year = cls;
// }
// let user1 = (new user("priyanka",19,25));
// console.log(user1);


///////////////////////////////////////////////////////////////////////freeze
// let user ={
//     name:"priyanka",
//     age: 19,
//     class: 12,
// }
// user.name = "preeti";
// Object.freeze(user);
// console.log(user);

///////////////////////////////////////////////////////////////////////setTimeout

// function greet(name){
//     console.log("hello"+ name);
// }
// setTimeout(greet,1000,"priyanka");

///////////////////////////////////////////////////////////////////////clearTimeout

// function greet(name){
//     console.log("hello"+name);
// }
//  clearTimeout(greet,1000,"priyanka");

/////////////////////////////////////////////////////////////////////////setInterval

// function greet(name){
//     console.log("hello" + name);
// }
// setInterval(greet,1000,"priyanka");

/////////////////////////////////////////////////////////////////////////clearInterval

// function greet(name){
//     console.log("hello" + name);
// }
// clearInterval(greet,500,"priyanka");

//////////////////////////////////////////////////////////////////////////callback function


// function sum(num){
//     let sum = 0;
//     while(num>0){
//         let a = num % 10;
//         sum = sum + a;
//         num = Math.round(num / 10);
//     }
//     return sum;
// }
// console.log(sum(78));


// function user(name,age,email,phone){
//     return {
//         name:name,
//         age:age,
//         email:email,
//         phone:phone,
//     }
// };
// let a = user("priyanka",19,"priyanka@123gmail.com",12345678910);
// let b = user("preeti",20,"preeti@123gmail.com",12345678910);
// let c = user("paras",21,"paras@123gmail.com",12345678910);
// let d = user("Amit",22,"Amit@123gmail.com",12345678910);
// let arr = [a,b,c,d];
// // console.log(arr);


//////////////////////////////////////////////////////object


// let student ={
//     name:"priyanka",
//     class:12,
//     age: 19,
//     Year: 2023,
//     country:{
//         name:"india",
//         city:"Kanpur",
//         class:{
//             class1:12,
//             name:"paras",
//         }
//     }
// }
// console.log(student.name);
// console.log(student.class);
// console.log(student.country);
// console.log(student.country.class.name);


// function show(){
//     let a =20;
//     console.log(a);
//     return function show2(){
//         let a = 2;
//         console.log(a);
//     }
// }
// show();


// function outer(){
//     let username = "priyanka"
//     function inner(){
//         let secret = "my123"
//         console.log("inner",username);
//     }
//     function innerTwo(){
//         console.log("innerTwo",username);
//     }
//     inner()
//     innerTwo()
// }
// outer();



// function greet(name){
//     return "hello"+name
// }
// let a=greet("priyinka");
// console.log(a)


// function greet(name="Guest"){
//     return "hello"+name;
// }
// console.log (greet());


// let s = function(name){
//     return "hello"+name
// }
// console.log(s("priyanka"));

// let s = (name)=>{
//     return "hello"+name
// }
// console.log(s("priyanka"));


//////////////////////////////////////////////////////////////currying
// function multiplyNormal(x,y,z){
//     return x*y*z
// }
// function multiply(x){
//     return function(y){
//         return function(z){
//         return x*y*z
//         }
//     }
// }
// console.log(multiply(2)(3)(5));


// function multiplyByN(x){
//     return function(y){
//         return x* y
//     }
// }
// let multiplyByFour = multiplyByN(4)


function user(name,age,cls){
    this.name = name;
    this.age = age;
    this.cls = cls;

}
user1 = user("priyanka",21,12);
console.log(user1);