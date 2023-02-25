// let z = 10;

// function calculate(a = 0, b = 0) {
    // let result = a + b;
    // let z = 1;
    // console.log(z);
    // console.log(result);
    // return a + b;
    // return result;
    // console.log('33');
    // alert(222);
// }

// let result = calculate(0, 0, 0, 0);
// console.log(result);

// result =  calculate(result, 10);
// console.log(result);

// let calculate2;
// calculate2 = "hello";
// console.log(calculate2);
// calculate(19, 349);

// console.log(calculateSum.name);

// console.log(calculate());

/*
let obj = {
    color: "red",
    fontSize: "12px",
};

let color = "hello";

obj.color = "blue";
obj["color"] = "blue";

obj[color] = "world";


obj["background color"] = "black";
// obj.background color = "white";

// obj.fontSize = undefined;
// obj.fontSize = null;
delete obj.fontSize;

obj.child = {
    name: "html",
    number: 283488,
    obj: {
        name: "css"
    }
};

console.log(obj);

for (let key in obj) {
    // console.log("Свойство: " + key + ", значение: " + obj[key]);
    console.log(key + "=" + obj[key]);
}

console.log(obj);
*/

// let people = [
//     "Сергей",
//     "Дамир",
//     "Римма",
//     "Татьяна",
//     "Айбек",
//     "Нурболат",
//     "Максим",
// ];

// console.log(people);

// let man = people.shift();
// people.shift();
// delete people[6];
// man = people.pop();
// people.pop();
// people.pop();
// people.unshift("Рахат");
// people.push("Анастасия");
// people[people.length] = "Махмут";

// people = people.slice(3, 5);

// console.log(people);
// console.log(man);

// let winter = ["December",  "January", "February"],
//     spring = ["March",     "April",   "May"     ],
//     summer = ["June",      "July",    "August"  ],
//     autumn = ["September", "October", "November"];

// let months = winter.concat(spring, summer, autumn);
// let arr = [];
// let months = arr.concat(winter, spring, summer, autumn);
// let months = [].concat(winter, spring, summer, autumn);
// console.log(months);

// let str = "Hello world";
// console.log(str.toLowerCase());

// console.log(months.includes("May"));
// console.log(months);
// let index = months.indexOf("May");
// console.log(months.lastIndexOf("May"));
// console.log(months.includes("May"));
// months[index] = "Май";
// console.log(months)

// months.reverse();
// console.log(months)

// let months2 = ["January", "June", "July", "August", "April", "May", 7];

// console.log(months2);

// months2.splice(months2.length-2, 1);
// months2.splice(-1, 1);
// months2.pop();
// months2.splice(-1, 10);

// let deletedMonths = months2.splice(1, 3, "February", "March");
// months2.splice(months2.length, 0, "June", "July", "August");
// months2.splice(months2.length, 0, ...deletedMonths);
// months2.push(...deletedMonths);
// console.log(months2);

// console.log(deletedMonths);

// console.log(months);

// let monthStartM = [];

// months.forEach(function (month, index) {
//     if (month[0] == 'M') {
//         monthStartM.push(month);
//     }
// });

// monthStartM = months.filter(function (month, index) {
//     return month[0] == 'M';
// });

// console.log(monthStartM);

// let sum = 0;

// let numbers = [3994, 4883, 28834, 399, 2];

// numbers.forEach(function (number) {
//     sum += number;
// });

// sum = numbers.reduce(function (acc, number) {
//     // console.log(acc);
//     if (number < 1000) {
//         return acc + number;
//     } else {
//         return acc;
//     }
// }, 0);

// let result = numbers.map(function (number) {
//     return number+1;
//     // return number ** 2;
// });

// console.log(numbers.length, result.length);
// console.log(result);

// console.log(months);

// console.log(
//     months.map(function (item) {
//         return item.length;
//     })
// );