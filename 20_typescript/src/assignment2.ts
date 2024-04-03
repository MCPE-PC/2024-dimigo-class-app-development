// Assignment 2. Type Advanced

// 1) 객체 타입 정의
// - 이름(name, 민지), 나이(age, 19), 포지션(position, 리더)을 갖는 minji 객체 정의
// - minji 객체 타입을 명시적으로 작성
const minji: {
	name: '민지';
	age: 19;
	position: '리더';
} = {
	name: '민지',
	age: 19,
	position: '리더',
};
console.log(typeof minji);
console.log(minji);

// 2) 함수 타입 정의
// - 입력받은 name, age, position을 갖는 객체를 리턴하는 함수 정의
// - 매개변수 타입, 함수 리턴 타입 모두 명시적으로 작성
const makeSinger = (
	name: '하니',
	age: 19,
	position: '메인보컬'
): {
	name: '하니';
	age: 19;
	position: '메인보컬';
} => {
	return {
		name,
		age,
		position,
	};
};

console.log(typeof makeSinger);
console.log(makeSinger('하니', 19, '메인보컬'));

export {};
