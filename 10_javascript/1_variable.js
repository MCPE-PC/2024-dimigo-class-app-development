// 1. 변수

// 변수 선언
let a = 10;
console.log(typeof a);

// 자료형 확인
console.log(typeof true);
console.log(typeof 1.234);
console.log(typeof []);
console.log(typeof notexisting);

// var vs let
function test() {
    var varVar = 0;
    var varLet = 0;
    let letVar = 0;
    let letLet = 0;
    if (true) {
        var varVar = 1;
        let varLet = 1;
        // var letVar = 1; // error
        let letLet = 1;
    }
    console.log(varVar);
    console.log(varLet);
    console.log(letVar);
    console.log(letLet);
}

test();

// 상수 선언
const c = 3.14;
// c++; // error