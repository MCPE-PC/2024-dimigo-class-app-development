// Assignment 12. Interface (인터페이스)

// 1. 변수와 인터페이스
// IPlayer 인터페이스 정의
// - name: string
// - playerNo: number
// - score: number
interface IPlayer {
	name: string;
	playerNo: number;
	score: number;
}

// 변수 p에 IPlayer 인터페이스 타입 적용
const p: IPlayer = { name: '손흥민', playerNo: 7, score: 15 };
console.log(`이름: ${p.name}, 등번호: ${p.playerNo}, 득점: ${p.score}`);

// 2. 함수와 인터페이스
// IPlayer2 인터페이스 정의
// - IPlayer 타입을 입력으로 받고 void를 리턴하는 Function Call Signature 정의
interface IPlayer2 {
	(player: IPlayer): void;
}

// 함수 addScore에 IPlayer2 인터페이스 타입 적용
const addScore: IPlayer2 = (player: IPlayer) => {
	// player 객체의 score 증가
	player.score++;
};

addScore(p); // 손흥민 선수 득점
console.log(`이름: ${p.name}, 등번호: ${p.playerNo}, 득점: ${p.score}`);

// 3. 클래스와 인터페이스
// IPhone 인터페이스 정의
// - company: string
// - model: string
// - speak(): void
interface IPhone {
	company: string;
	model: string;
	speak(): void;
}

// IPhone 인터페이스를 구현하는 ApplePhone 클래스 정의
class ApplePhone implements IPhone {
	// 생성자 (company, model 인스턴스 변수 초기화)
	constructor(public company: string, public model: string) {}
	// 인스턴스 메소드
	public speak(): void {
		console.log(`저는 ${this.company} ${this.model} 시리입니다.`); // 저는 Apple iPhone 15 시리입니다.
	}
}

// IPhone 인터페이스를 구현하는 SamsungPhone 클래스 정의
class SamsungPhone implements IPhone {
	// 생성자 (company, model 인스턴스 변수 초기화)
	constructor(public company: string, public model: string) {}
	// 인스턴스 메소드
	public speak(): void {
		console.log(`저는 ${this.company} ${this.model} 빅스비입니다.`); // 저는 Samsung S24 빅스비입니다.
	}
}

const phones: IPhone[] = [
	new ApplePhone('Apple', 'iPhone 15'),
	new SamsungPhone('Samsung', 'S24'),
];

phones.forEach((p) => p.speak()); // 다형성

export {};
