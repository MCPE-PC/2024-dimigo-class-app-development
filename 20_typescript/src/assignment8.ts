// Assignment 8. Union, Intersection 타입

// 1. Dog 타입 정의
type Dog = {
	name: string;
	walking: boolean;
};

// 2. Cat 타입 정의
type Cat = {
	name: string;
	scratching: boolean;
};

// 3. Dog 또는 Cat 타입을 입력받아 객체 내용을 출력하는 함수 작성하기
const zoo = (animal: Dog | Cat) => {
	console.log(animal.name); // name 출력
	if ('walking' in animal) {
		// 타입가드
		console.log(animal.walking); // walking 출력
	} else {
		console.log(animal.scratching); // scratching 출력
	}
};

// 4. 객체 생성
const dog: Dog = { name: '멍멍이', walking: true };
const cat: Cat = { name: '야옹이', scratching: false };
zoo(dog);
zoo(cat);

// 5. Dog과 Cat을 합친 DogCat 타입 정의
type DogCat = Dog & Cat;

// 6. DogCat 타입을 입력받아 객체 내용을 출력하는 함수 작성하기
const zoo2 = (animal: DogCat) => {
	console.log(animal.name); // name 출력
	console.log(animal.walking); // walking 출력
	console.log(animal.walking); // scratching 출력
};

// 7. 객체 생성
const dogcat: DogCat = { name: '개냥이', walking: true, scratching: true };
zoo2(dogcat);

export {};
