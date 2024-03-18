// 6. 콜백 함수

// 함수의 파라미터로 함수를 넘기고

function add(a, b) {
	return a + b;
}

function print(value) {
	console.log(value);
}

print(add(1, 2));

function add2(a, b, callback) {
	callback(a + b);
}

add2(1, 2, print);

add2(1, 2, (value) => console.log(value));

// 동기 vs 비동기

// setTimeout: 일정 시간이 지난 후에 함수가 실행되는 비동기 함수
function test() {
	setTimeout(() => console.log('하나'), 1000);
	setTimeout(() => console.log('둘'), 999);
	setTimeout(() => console.log('셋'), 998);
}

function test2() {
	setTimeout(() => {
		console.log('하나');
		setTimeout(() => {
			console.log('둘');
			setTimeout(() => {
				console.log('셋');
			}, 998);
		}, 999);
	}, 1000);
}
