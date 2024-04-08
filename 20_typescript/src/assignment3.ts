// Assignment 3. Type Alias

// 1) 이름(name, string), 나이(age, number), 포지션(position, string)을 갖는 Singer Type 정의
type Singer = {
	name: string;
	age: number;
	position: string;
};

// 2) 객체에 Singer Type 적용
// - 이름(name, 다니엘), 나이(age, 18), 포지션(position, 리드보컬)을 갖는 singer 객체 정의
// - singer 객체의 타입에 Singer 타입 적용
const singer: Singer = {
	name: '다니엘',
	age: 18,
	position: '리드보컬',
};
console.log(singer);

// 3) 함수에 Singer Type 적용
// - 입력받은 name, age, position을 갖는 객체를 리턴하는 함수 정의
// - 매개변수 타입, 함수 리턴 타입 모두 명시적으로 작성 (함수 리턴 타입에 Singer 타입 적용)
const makeSinger = (name: string, age: number, position: string): Singer => {
	return { name, age, position };
};
console.log(makeSinger('해린', 17, '메인댄서'));

// 4) "메인래퍼" 또는 "메인댄서" 값을 갖는 포지션 유니온 타입 정의
type positionType = '메인래퍼' | '메인댄서';

// position 매개변수의 타입을 positionType으로 지정
const makeSinger2 = (name: string, age: number, position: positionType) => {
	return { name, age, position };
};

console.log(makeSinger2('혜인', 15, '메인래퍼')); // 정상
console.log(makeSinger2('민지', 19, '리더')); // 에러 발생

export {};
