// const user = {
//   name: 'Ivan',
//   secondName: 'Batyn',
//   age: 26,
//   dateOfBirth: '22.02.1996',
//   nationality: 'Ukraine',
//   hobby: 'Squash',
//   phoneNumber: +380969269777,
//   city: 'Uzzhorod',
//   street: 'Svobody',
//   numberStreet: 51,
// }
// console.log(user.street);

// function checkAge(user) {
//   return user.age;
// }

// console.log(checkAge(user));

// for (let value in user) {
//   console.log(user[value]);
// }

let UserInfo = function () {
  this.name = 'Ivan';
  this.secondName = 'Batyn';
  this.age = 26;
  this.dateOfBirth = '22.02.1996';
  this.nationality = 'Ukraine';
  this.hobby = 'Squash';
  this.phoneNumber = +380969269777;
  this.city = 'Uzzhorod';
  this.street = 'Svobody';
  this.numberStreet = 51;
};
let info = new UserInfo()
console.log(info.name);