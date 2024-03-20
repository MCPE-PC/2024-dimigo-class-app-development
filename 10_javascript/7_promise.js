// 7. Promise

// ES6에서 도입
// Promise 객체: resolve, reject 매개변수를 가진 콜백 함수를 제공

const callMock = () => {
	if (Math.random() > 0.5) {
		return '작업 성공';
	}

	throw new Error('작업 실패');
};

// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
	// 비동기 작업이 성공하면 resolve 호출
	// 실패하면 reject 호출

	try {
		return resolve(callMock());
	} catch (error) {
		return reject(error);
	}
});

promise.then(console.log).catch(console.error);

const promise2 = (param) =>
	new Promise((resolve, reject) => {
		if (param) {
			return resolve(param);
		}

		return reject(param instanceof Error ? param : new Error(param));
	});

promise2(true).then(console.log).catch(console.error);

// 하나, 둘, 셋 문제 해결
const promise3 = (param) =>
	new Promise((resolve) => {
		setTimeout(() => {
			console.log(param);

			return resolve(param);
		}, 1000);
	});

promise3('하나')
	.then(() => promise3('둘'))
	.then(() => promise3('셋'))
	.then(() => {
		console.log('끝');
	});

Promise.all([promise3('하나2'), promise3('둘2'), promise3('셋2')]).then(() => {
	console.log('끝2');
});
