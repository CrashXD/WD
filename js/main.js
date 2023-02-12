/* 
    alert(2+2);
//    3+3;
*/
// let a;
// let b = 2, c, d, e;
/*
a = 23284732498 + 24329847329;
console.log(a);
a = 3;
console.log(a);
a = a + a * a - 100;
console.log(a);
a = 2939;
a = a + a * a - 100;
console.log(a);
*/

// const a = 3;
// const pi = 3.14;

// let a = prompt('Введите имя');
// console.log(a);
// alert(a);

// let a = confirm("Согласен?");
// console.log(a);
// alert(a);

/*
let a = prompt('Введите число A');
let b = prompt('Введите число B');

let result = Number(a) + Number(b);

alert(result);
*/

// let a = '';

// ||
// &&
// !

// if(confirm('Возьмешь кредит?') || confirm('Возьмешь рассрочку?')) {
//     console.log('Ты в кабале!');
// } else {
//     console.log('Свобода');
// }

// if(confirm('Возьмешь яблоко?') && confirm('Возьмешь грушу?')) {
//     console.log('Я объелся');
// } else {
//     console.log('Нормально');
// }

// if(!confirm('Зимой холодно?')) {
//     console.log('Да, холодно');
// } else {
//     console.log('Нет, тепло');
// }

// if(confirm('Возьмешь яблоко?') && confirm('Возьмешь грушу?')) {
//     if (2 + 2 > 5) {
//         console.log('Я объелся');
//     }
// } else if (confirm('Мясо будешь?')) {
//     console.log('Съел мясо');
// } else {
//     console.log('Ничего не съел');
// }

// ------------------------------------------------------------------

// let a;
// let b = 10;

// a = 5; a = 3;

// if (b < 5) {
//     a = 5;
// } else {
//     a = 3;
// }

// a = (b < 5) ? 5 : 3;

// console.log(a);

// let a = prompt('Введи число от 1 до 5');

// if (a == 1) {
//     console.log('Ваш тип личности номер 1');
// } else if (a == 2) {
//     console.log('Ваш тип личности номер 2');
// } else if (a == 3) {
//     console.log('Ваш тип личности номер 3');
// } else if (a == 4) {
//     console.log('Ваш тип личности номер 4');
// } else if (a == 5) {
//     console.log('Ваш тип личности номер 5');
// } else {
//     console.log('Ошибка ввода');
// }

// switch (true) {
//     case a === "1":
//         console.log('Ваш тип личности номер 1');
//         break;
//     case a === "2":
//         console.log('Ваш тип личности номер 2');
//         break;
//     case a === "3":
//         console.log('Ваш тип личности номер 3');
//         break;
//     case a === "4":
//         console.log('Ваш тип личности номер 4');
//         break;
//     case a === "5":
//         console.log('Ваш тип личности номер 5');
//         break;
//     case Number(a) > 5:
//         console.log('Вы ввели число больше 5');
//         break;
//     default:
//         console.log('Ошибка ввода');
// }

// switch (a) {
//     case "1":
//         console.log('Ваш тип личности номер 1');
//         break;
//     case "2":
//         console.log('Ваш тип личности номер 2');
//         break;
//     case "3":
//         console.log('Ваш тип личности номер 3');
//         break;
//     case "4":
//         console.log('Ваш тип личности номер 4');
//         break;
//     case "5":
//         console.log('Ваш тип личности номер 5');
//         break;
//     case "6":
//         console.log('Вы ввели число 6');
//     case "7":
//     case "8":
//     case "9":
//     case "10":
//         console.log('Вы ввели число больше 5');
//         break;
//     default:
//         console.log('Ошибка ввода');
// }

// let man1 = "Римма";
// let man2 = "Сергей";
// let man3 = "Татьяна";

// let people = new Array();
// let people2 = ["Римма", "Сергей", "Татьяна", "Дамир",];

let people = [
    "Сергей",
    "Дамир",
    "Римма",
    "Татьяна",
    // [
    //     1, 2, 3
    // ]
];

// console.log(typeof people);
// console.log(people.length);
// console.log(people);
// console.log(people[2]);

// people[1] = "Айбек";
// console.log(people);

// people[6] = "Айбек";

// console.log(people);

// let a = 19;

// console.log(a);

// a = a + 5;
// a += 5;
// a -= 5;
// a *= 5;
// a /= 5;

// a = a + 5;

// console.log(a);

// console.log(a);
// a += 1;
// a++;
// console.log(a);
// a -= 1;
// a--;
// console.log(a);

// console.log(a);
// console.log(a++);
// console.log(++a);
// console.log(a);

// let i = 0;
// if (i == 4) {
    // console.log(4)
// }

// while(i < 100) {
//     i++;
//     if (i == 50) {
//         break;
//     }
//     if (i < 20) {
//         continue;
//     }
//     console.log(i)
// }

// while(i > 100) {
//     console.log(i++);
// };

// do {
//     console.log(i++);
// } while(i > 100);

// for(let j = 0; j < 100; j++) {
    // console.log(j);
// }

// console.log(j);

// for(; i < 100; i++) {
    // console.log(i);
// }

// for(;; i++) {
//     console.log(i);
//     if (i >= 99) {
//         break;
//     }
// }

// for(;;) {
//     console.log(i++);
//     if (i >= 99) {
//         break;
//     }
// }

// console.log(i);

// console.log(people);

// // for (let i = 0; i < people.length; i = i + 5) {
// //     console.log(people[i]);
// // }

// let k = 0;

// while (k < people.length) {
//     console.log((k+1) + ': ' + people[k++]);
// }

// let a;

// let k = 0;
// for(let name of people) {
    // console.log((k+1) + ': ' + name);
    // k++;
// }


// console.log('Вышли из цикла');