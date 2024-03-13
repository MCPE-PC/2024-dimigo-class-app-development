// 4. 객체

// 객체 선언
const a = {};

const person = {
    krAge: 19,
    name: '진호정',
};

// 템플릿 문자열
console.log(`age: ${person.krAge}, name: ${person.name}`);

// shallow copy
const person2 = person;
person2.age = 20;
console.log(person.age, person2.age);

// deep copy
const person3 = Object.assign({}, person);
person3.age = 21;
console.log(person.age, person3.age);

const person4 = {...person};
person4.age = 22;
console.log(person.age, person4.age);

// 비구조화 할당
const {krAge, name} = person;
