// Assignment 9. Class

// 1) Car 클래스 선언
class Car {
	// 인스턴스 변수 : company(string), model(string), color(string), price(number)
	company: string;
	model: string;
	color: string;
	price: number;

	// 생성자
	constructor(company: string, model: string, color: string, price: number) {
		this.company = company;
		this.model = model;
		this.color = color;
		this.price = price;
	}

	// 인스턴스 메소드
	forward() {
		console.log(`${this.company} ${this.model}가 전진합니다.`); // {회사명} {모델명}가 전진합니다.
	}

	backward() {
		console.log(`${this.company} ${this.model}가 후진합니다.`); // {회사명} {모델명}가 후진합니다.
	}
}

// Car 객체 생성
const h: Car = new Car('현대', '그랜저', '검정색', 70000000);
h.forward(); // 현대 그랜저가 전진합니다.
h.backward(); // 현대 그랜저가 후진합니다.

h.company = '기아';
h.model = 'EV6';
h.forward(); // 기아 EV6가 전진합니다.
h.backward(); // 기아 EV6가 후진합니다.

// 하나의 Car 객체의 company와 model이 바뀐다? 이상한데??
// company와 model을 못 바꾸게 접근제어자를 추가하자!!

// 2) 접근제어자(Access Modifiers) 추가
// - Car2 클래스 선언 (위 Car 클래스 복사 후 Car2로 변경)
// - company, model : private
// - color, price, forward(), backward() : public (생략시 public)
class Car2 {
	private company: string;
	private model: string;
	public color: string;
	public price: number;

	public constructor(
		company: string,
		model: string,
		color: string,
		price: number
	) {
		this.company = company;
		this.model = model;
		this.color = color;
		this.price = price;
	}

	// 인스턴스 메소드
	public forward() {
		console.log(`${this.company} ${this.model}가 전진합니다.`); // {회사명} {모델명}가 전진합니다.
	}

	public backward() {
		console.log(`${this.company} ${this.model}가 후진합니다.`); // {회사명} {모델명}가 후진합니다.
	}
}

// Car2 객체 생성
const h2: Car = new Car('현대', '그랜저', '검정색', 70000000);

// private이므로 클래스 밖에서 접근 불가
// h2.company = "기아";
// h2.model = "EV6";

console.log(`변경전 가격: ${h2.price.toLocaleString()}원`); // 변경전 가격: 70,000,000원
h2.price = 80000000;
console.log(`변경후 가격: ${h2.price.toLocaleString()}원`); // 변경후 가격: 80,000,000원

// price도 마음대로 바꾼다?
// 조회는 가능하되 수정은 못하게 하자!!

// 3) readonly 적용
// - Car3 클래스 선언 (위 Car2 클래스 복사 후 Car3로 변경)
// - price에 readonly 적용
class Car3 {
	private company: string;
	private model: string;
	public color: string;
	public readonly price: number;

	public constructor(
		company: string,
		model: string,
		color: string,
		price: number
	) {
		this.company = company;
		this.model = model;
		this.color = color;
		this.price = price;
	}

	// 인스턴스 메소드
	public forward() {
		console.log(`${this.company} ${this.model}가 전진합니다.`); // {회사명} {모델명}가 전진합니다.
	}

	public backward() {
		console.log(`${this.company} ${this.model}가 후진합니다.`); // {회사명} {모델명}가 후진합니다.
	}
}

// Car3 객체 생성
const h3: Car = new Car('현대', '그랜저', '검정색', 70000000);

// readonly이므로 값 변경 불가
// h3.price = 80000000;
console.log(`가격: ${h3.price.toLocaleString()}원`); // 가격: 70,000,000원

// 4) 간단하게 클래스 선언하기
// - Car4 클래스 선언 (위 Car3 클래스 복사 후 Car4로 변경)
// - 생성자에서 변수 앞에 접근제어자를 사용하여 바로 인스턴스 변수로 정의하기
class Car4 {
	public constructor(
		private company: string,
		private model: string,
		public color: string,
		public readonly price: number
	) {}

	// 인스턴스 메소드
	public forward() {
		console.log(`${this.company} ${this.model}가 전진합니다.`); // {회사명} {모델명}가 전진합니다.
	}

	public backward() {
		console.log(`${this.company} ${this.model}가 후진합니다.`); // {회사명} {모델명}가 후진합니다.
	}
}

// Car4 객체 생성
const h4: Car = new Car('순양', '아폴로', '회색', 30000000);
h4.forward(); // 순양 아폴로가 전진합니다.
h4.backward(); // 순양 아폴로가 후진합니다.

export {};
