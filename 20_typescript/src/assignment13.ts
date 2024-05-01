// Assignment 13. Interface Advanced

// 1) ITV 인터페이스 정의
// - company: string
// - turnOn(): void
// - turnOff(): void
interface ITV {
	company: string;
	turnOn(): void;
	turnOff(): void;
}

// 2) TV 클래스 정의
// - ITV 인터페이스를 구현
class TV implements ITV {
	// 생성자 (company 인스턴스 변수 초기화)
	constructor(public company: string) {}
	// 인스턴스 메소드
	turnOn(): void {
		console.log(`${this.company} TV를 켭니다.`); // {company} TV를 켭니다.
	}
	turnOff(): void {
		console.log(`${this.company} TV를 끕니다.`); // {company} TV를 끕니다.
	}
}

const tvs: ITV[] = [new TV('삼성'), new TV('LG')];

tvs.forEach((tv) => {
	tv.turnOn(); // {company} TV를 켭니다.
	tv.turnOff(); // {company} TV를 끕니다.
});

// 3) IUpgradeTV 인터페이스 정의
// - channel: number
// - channelUp(): void
// - channelDown(): void
interface IUpgradeTV {
	channel: number;
	channelUp(): void;
	channelDown(): void;
}

// 4) UpgradeTV 클래스 정의
// - TV 클래스를 상속받고, IUpgradeTV 인터페이스를 구현
class UpgradeTV extends TV implements IUpgradeTV {
	// 생성자 (channel 인스턴스 변수 초기화)
	constructor(company: string, public channel: number) {
		super(company); // 부모 클래스의 생성자 호출
	}
	// 인스턴스 메소드
	channelUp(): void {
		// 채널 증가
		console.log(`현재 채널은 ${++this.channel}번 입니다.`); // 현재 채널은 {channel}번 입니다.
	}
	channelDown(): void {
		// 채널 감소
		console.log(`현재 채널은 ${--this.channel}번 입니다.`); // 현재 채널은 {channel}번 입니다.
	}
}

// 삼성 UpgradeTV 객체 생성
const utv: UpgradeTV = new UpgradeTV('삼성', 5);
utv.turnOn(); // 삼성 TV를 켭니다.
utv.channelUp(); // 현재 채널은 6번 입니다.

utv.channelDown(); // 현재 채널은 5번 입니다.
utv.channelDown(); // 현재 채널은 4번 입니다.
utv.turnOff(); // 삼성 TV를 끕니다.

export {};
