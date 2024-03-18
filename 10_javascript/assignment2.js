// Assignment 2. Javascript 2

// 6. 콜백함수 문제

// 1) 더하기 10을 하는 함수
// - 입력값 출력하기
// - 입력값에 10을 더해 콜백함수 호출하기
const add = (param, callback) => {
	callback(param + 10);
};

// 2) 곱하기 2를 하는 함수
// - 입력값 출력하기
// - 입력값에 2를 곱해 콜백함수 호출하기
const mul = (param, callback) => {
	callback(param * 2);
};

// 3) 나누기 5하는 함수
// - 입력값 출력하기
// - 입력값을 5로 나눠 콜백함수 호출하기
const div = (param, callback) => {
	callback(param / 5);
};

// 4) 함수 호출
// - add -> mul -> div -> 최종값 출력
// - 10(입력값) -> 20 -> 40 -> 8(최종값)
const i = 10;
console.log(i);
add(i, (i) => {
	console.log(i);
	mul(i, (i) => {
		console.log(i);
		div(i, (i) => {
			console.log('최종값: ' + i);
		});
	});
});
