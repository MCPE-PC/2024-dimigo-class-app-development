// Assignment 6. Enum

// 1. 스타벅스 회원등급 Enum 선언
// - WELCOME: 1, GREEN: 2, GOLD: 3, VIP: 4
enum StarbucksGrade {
	WELCOME = 1,
	GREEN = 2,
	GOLD = 3,
	VIP = 4,
}

// WELCOME 등급 값 출력하기
console.log(StarbucksGrade.WELCOME); // 1

// 값이 3인 회원등급 출력하기
console.log(StarbucksGrade[3]); // GOLD (리버스 매핑)

// 2. Customer 타입 정의하기
// - id: number, name: string, grade: StarbucksGrade
type Customer = {
	id: number;
	name: string;
	grade: StarbucksGrade;
};

// 3. 회원등급 별 할인율을 리턴하는 함수 만들기
// - Customer 타입 입력받기
// - WELCOME: 0%, GREEN: 5%, GOLD: 10%, VIP: 20%
function getDiscount(c: Customer) {
	return c.grade === StarbucksGrade.VIP ? 20 : c.grade * 5;
}

// 4. 고객 정보를 출력하는 함수 만들기
// - Customer 타입 입력받기
// - 할인율을 가져오기 위해 위에서 만든 getDiscount() 함수 호출
function printCustomer(c: Customer) {
	console.log(
		`${c.id}번 ${c.name} 님은 ${
			StarbucksGrade[c.grade]
		} 등급이고, 할인율은 ${getDiscount(c)}% 입니다.`
	);
}

// 5. Customer 타입의 객체 생성 후 printCustomer() 호출
// - id: 1, name: 김고객, grade: StarbucksGrade.WELCOME
// - id: 2, name: 나고객, grade: StarbucksGrade.VIP
const c1: Customer = {
	id: 1,
	name: '김고객',
	grade: StarbucksGrade.WELCOME,
};
printCustomer(c1); // 1번 김고객 님은 WELCOME 등급이고, 할인율은 0% 입니다.

const c2: Customer = {
	id: 2,
	name: '나고객',
	grade: StarbucksGrade.VIP,
};
printCustomer(c2); // 2번 나고객 님은 VIP 등급이고, 할인율은 20% 입니다.

export {};
