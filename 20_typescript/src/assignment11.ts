// Assignment 11. Abstract Class (추상 클래스)

// 평온한 동물농장에는 오리, 돼지, 소들이 옹기종기 모여 행복하게 살고 있다.
// 그런데, 어느 날 동물농장에 늑대가 나타났다!! 빨리 주인을 깨워보자!!

// 1) Animal 추상 클래스 선언
abstract class Animal {
	constructor(private name: string) {}

	// getter 구현
	public getName() {
		return this.name;
	}

	// setter 구현
	public setName(name: string) {
		this.name = name;
	}

	public sleep() {
		console.log(this.name + ' 쿨쿨');
	}

	// 추상메소드 선언
	public abstract speak(): void;
}

// 2) Duck 클래스 선언 - Animal 클래스 상속
// - speak() 추상메소드 오버라이딩하기
class Duck extends Animal {
	public speak(): void {
		console.log('꽥꽥'); // 오리 꽥꽥!!
	}
}

// 3) Pig 클래스 선언 - Animal 클래스 상속
// - speak() 추상메소드 오버라이딩하기
class Pig extends Animal {
	public speak(): void {
		console.log('꿀꿀'); // 돼지 꿀꿀!!
	}
}

// 4) Cow 클래스 선언 - Animal 클래스 상속
// - speak() 추상메소드 오버라이딩하기
class Cow extends Animal {
	public speak(): void {
		console.log('음메'); // 소 음메!!
	}
}

// 5) 객체 배열 생성
const animals: Animal[] = [new Duck('오리'), new Pig('돼지'), new Cow('소')];

console.log('< 평온한 동물농장 >');
animals.forEach((animal) => animal.sleep());
console.log();

console.log('< 늑대가 나타났다!! >');
animals.forEach((animal) => animal.speak());
console.log();

export {};
