// import { apiKey } from "./util.js";
// import apiKey from "./util.js";
// import { apiKey, abc } from "./util.js";
// import * as util from "./util.js"; // 變數為物件
// import { apiKey, abc as newAbcName } from "./util.js";

// function greetUser(userName, message = "Hello!") {
//     return "Hi, I am " + userName + ". " + message;
// }
// const greeting1 = greetUser("Apple");
// console.log(greeting1);
// const greeting2 = greetUser("Mary", "Welcome to my website!");
// console.log(greeting2);

// export default function() {
//     console.log("Hello, World!");
// }

// export default () => {
//     console.log("Hello, World!");
// }

// const user = {
//     name: 'Mary',
//     age: 25,
//     greet() {
//         console.log(`Hi, I am ${this.name}. I am ${this.age} years old.`);
//     }
// };
// user.greet();

// class User { // 命名第一個字必須大寫
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hi, I am ${this.name}. I am ${this.age} years old.`);
//     }
// }
// const user1 = new User('Mary', 25);
// console.log(user1);
// user1.greet();

// const hobbies = ["reading", "cooking", "hiking", "skiing"];
// const index = hobbies.findIndex((item) => {
//     return item === "hiking";
// })
// const index = hobbies.findIndex((item) => item === "hiking");
// console.log(index); // 輸出 2
// const editeHobbies = hobbies.map((item) => ({text: item}));
// console.log(editeHobbies); // 輸出 [{text: "reading"}, {text: "cooking"}, {text: "hiking"}, {text: "skiing"}]

// Exercise: Array Methods
// function transformToObjects(numberArray) {
//     return numberArray.map(num => ({ val: num }));
// }
// const array1 = [1, 2, 3];
// const result = transformToObjects(array1);
// console.log(result);

// const userName = ["Apple", "Mary"];
// const firstName = userName[0];
// const lastName = userName[1];

// const [firstName, lastName] = ["Apple", "Mary"];
// console.log(firstName); // 輸出 Apple
// console.log(lastName); // 輸出 Mary

// const {name: userName, age} = {name: "Apple", age: 25};
// console.log(userName); // 輸出 Apple
// console.log(age); // 輸出 25

// function storeOrder(order) {
//     localStorage.setItem('id', order.id);
//     localStorage.setItem('currency', order.currency);
// }

// function storeOrder({id, currency}) {
//     localStorage.setItem('id', id);
//     localStorage.setItem('currency', currency);
// }
// storeOrder({id: 5, currency: 'USD', amount: 15.99});

// const hobbies = ["reading", "cooking", "hiking"];
// const newHobbies = ["skiing"]
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies); // 輸出 ["reading", "cooking", "hiking", "skiing"]

// const user = {
//     name: 'Mary',
//     age: 25
// }
// const extendedUser = {
//     isAdimin: true,
//     ...user
// }
// console.log(extendedUser);

// const hobbies = ["reading", "cooking", "hiking"];
// for (const hobby of hobbies) {
//     console.log(hobby);
// } // hobby 是變數名稱，我之前常用 i 來表示變數

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//     console.log("Timed out!");
// }
// const handleTimeout2 = () => {
//     console.log("Timed out...again!");
// }
// setTimeout(handleTimeout, 2000); // 將函數作為值傳遞值，函數將在2秒後執行
// setTimeout(handleTimeout2, 3000); // 如果增加括弧，則函數將於設定的時間立即執行，並不會在2秒後執行
// setTimeout(()=>{
//     console.log("More Timed out...");
// }, 4000);

// function greeter(greetFn) {
//     greetFn(); // 2.然後 greetFn 在此處執行
// }
// greeter(()=>{console.log("Hello!")}) // 1.所以這裡的這個函數作為一個值傳遞給 greetFn

// function init() {
//     function greet() {
//         console.log("Hello!");
//     }
//     greet();
// }
// init();

// const hobbies = ["cooking", "skiing"];
// hobbies = []; // 無法使用等於符號來重新賦值
// hobbies.push("swimming");
// console.log(hobbies); // 輸出 ["cooking", "skiing", "swimming"]

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
const person = new Person();
person.printMyName();
