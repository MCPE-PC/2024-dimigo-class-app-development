// 5. 클래스

// 데이터 + 행위
class Animal {
	constructor(name) {
		this.name = name;
	}

	say() {
		console.log(`${this.name}이 말을 한다.`);
	}
}

// 객체 생성
const a = new Animal('동물');
a.say();

// 상속 (inheritance)
class Dog extends Animal {
	// 메소드 오버라이딩
	say() {
		console.log(`${this.name}가 멍멍한다.`);
	}
}

const dog = new Dog('멍멍이');
dog.say();

class Cat extends Animal {
	say() {
		console.log(`${this.name}가 야옹한다.`);
	}
}

const cat = new Cat('야옹이');
cat.say();

const animals = [new Animal('동물'), new Dog('멍멍이'), new Cat('야옹이')];

animals.forEach((animal) => {
	// 프로토타입 체인 오염 방지
	Animal.prototype.say.call(animal);
});
