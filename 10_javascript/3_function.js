// 3. 함수

// 함수 정의

// 1. 클래식
function add(a, b) {
    return a + b;
}

// 2. 익명
const sub = function(a, b) {
    return a - b;
}

// 3. 즉시 실행 (IIFE)
const mul = function(a, b) {
    return a * b;
}(2, 3);

// 4. 화살표
const div = (a, b) => {
    return a / b;
}