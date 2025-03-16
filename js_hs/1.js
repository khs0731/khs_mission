// // // console.log('hello world!');
// // const fs = require('fs');
// // const input = fs.readFileSync('./js_hs/input.txt', 'utf8');

// // console.log(input);
// // console.log('heeh');

// let 안녕 = '하세요';
// let hi = 'hello';
// let HI = 'HELLO';

// console.log(안녕);
// console.log(hi);
// console.log(HI);

// let num = 2;
// console.log('jeje');
// console.log(num);

// let A = 123;
// console.log(A);
// A = 'dd';
// console.log(A);
// let A = 777;

// const A = 'heesu';
// console.log(A);
// A = 'jekek';
// console.log(A);

// let name = 'hee',
//   age = 12,
//   msg = 'ji';
// console.log(name);

// console.log(name);
// var name = 'jogn';
// console.log(name);

// console.log(typeof undefined);
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof 'hello');
// console.log(typeof Symbol('id'));
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof console.log);

// let check = 10 > 3; //true 반환
// console.log(check);
// let num1 = 123.0;
// let num2 = 123.456;
// console.log(num1 - num2);
// console.log((num1 - num2).toFixed(3));
// let num = 123;
// let age = `hello_${num}`;
// console.log(age);

//객체 예제 코드1
// let user = {
//   name: 'heesdddu',
//   age: 25,
// };

// console.log(typeof user);
// console.log(typeof user.name);
// console.log(typeof user.age);

// console.log(user);
// console.log(user.name);
// console.log(user.age);

// age = 17;
// console.log(user.age);

// user.age = 17;
// console.log(user.age);

// user.weight = 56;
// console.log(user);

// delete user.age;
// console.log(user);

let user = {
  name: 'he',
  age: 17,
};

// let admin = {};
// // console.log(user);
// for (let key in user) {
//   admin[key] = user[key];
// }
// console.log(admin);

// admin.age = 34;
// console.log(admin.ageA);

// let admin = Object.assign({}, user);
// console.log(admin);

// let admin = { ...user };

// console.log(admin);

// console.log(String(124));
// console.log(String(1 / 0));
// console.log(String(-1 / 0));
// console.log(String(true));
// console.log(String(false));
// console.log(String(NaN));
// console.log(String(null));
// console.log(String('he'));

// console.log(123 + 13);
// console.log(123 - 13);
// console.log(123 * 13);
// console.log(123 / 13);
// console.log(2 ** 3);
// console.log(parseInt(20 / 3));
// console.log(20 % 3);

// let num1 = 123;
// let num2 = 345;
// let str1 = 'hello';
// let str2 = 'java';

// let num3, str3;

// num3 = num1 + num2;
// str3 = str1 + str2;
// console.log(num3);
// console.log(str3);
// str3 = str3 - str1;
// console.log(str3);

// let num1, num2, num3, num4, num5;
// num1 = num2 = num3 = num4 = num5 = 31;

// let num = 2;
// num1 += num;
// num2 -= num;
// num3 *= num;
// num4 /= num;
// num5 %= num;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);

let num, result;
num = 10;
result = num++;
console.log(result);
console.log(num);
console.log(result);
