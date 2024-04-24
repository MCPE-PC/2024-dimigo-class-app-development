// Assignment 10. Inheritance (상속)

// 디미 주식회사는 다국적 기업이다.
// 한국인, 일본인, 중국인이 다 같이 모여 일을 하고 있다.
// 출퇴근 시 각 나라의 언어로 인사해보자.

// 1) Person 클래스 선언
class Person {
	// 생성자에서 인스턴스 변수 바로 정의
	// - name: string 타입, private 접근제어자
	constructor(private name: string) {}

	// getter 구현
	public get getName() {
		return this.name;
	}

	// setter 구현
	public set setName(name: string) {
		this.name = name;
	}

	// 인스턴스 메소드
	public introduce() {
		console.log(`저는 ${this.name}입니다.`);
	}

	public sayHello() {
		console.log('Hello');
	}

	public sayBye() {
		console.log('Bye');
	}
}

// 2) Korean 클래스 선언
// - Korean 클래스는 Person 클래스를 상속받음
class Korean extends Person {
	public introduce() {
		console.log(`저는 한국사람 ${this.getName}입니다.`); // 저는 한국사람 {이름}입니다.
	}

	public sayHello() {
		console.log('안녕하세요');
	}

	public sayBye() {
		console.log('안녕히 계세요');
	}
}

// 3) Japanese 클래스 선언
// - Japanese 클래스는 Person 클래스를 상속받음
class Japanese extends Person {
	public introduce() {
		console.log(`저는 일본사람 ${this.getName}입니다.`); // 저는 일본사람 {이름}입니다.
	}

	public sayHello() {
		console.log('오하이요');
	}

	public sayBye() {
		console.log('사요나라');
	}
}

// 4) Chinese 클래스 선언
// - Chinese 클래스는 Person 클래스를 상속받음
class Chinese extends Person {
	public introduce() {
		console.log(`저는 중국사람 ${this.getName}입니다.`); // 저는 중국사람 {이름}입니다.
	}

	public sayHello() {
		console.log('니하오');
	}

	public sayBye() {
		console.log('짜이찌엔');
	}
}

// 5) 객체 배열 생성
const workers: Person[] = [
	new Person('Tom'), // Person 객체
	new Korean('홍길동'), // Korean 객체
	new Japanese('다나까'), // Japanese 객체
	new Chinese('왕밍'), // Chinese 객체
];

// 자기 소개
workers.forEach((worker) => worker.introduce());
console.log();

// 출근 인사
workers.forEach((worker) => worker.sayHello());
console.log();

// 퇴근 인사
workers.forEach((worker) => worker.sayBye());

export {};
