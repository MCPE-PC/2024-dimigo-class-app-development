// 8. Async/Await

// ES8에 추가된 문법

const getUsers2 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('작업 중');
			resolve(users);
		}, 1000);
	});
};

const test2 = async () => {
	try {
		const users = await getUsers2();
		console.log(users);
		console.log('작업 완료');
	} catch {}
};
