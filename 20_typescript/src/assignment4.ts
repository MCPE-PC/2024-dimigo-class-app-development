// Assignment 4. Type Guard

// Singer와 Dancer 타입 정의하기
type Singer = {
	name: string;
	octave: number;
};

type Dancer = {
	name: string;
	skill: string;
};

// Singer 또는 Dancer 타입을 입력받아 아래와 같이 출력하기
// - 멤버이름은 공통이므로 처음에 출력
// - Singer 타입의 경우 옥타브 출력
// - Dancer 타입의 경우 댄스 스킬 출력
const printMemberInfo = (member: Singer | Dancer) => {
	console.log(`멤버이름 : ${member.name}`);
	if ('octave' in member) {
		console.log(`옥타브 : ${member.octave}`);
	} else {
		console.log(`댄스 스킬 : ${member.skill}`);
	}
};

// 첫번째 멤버
const m1: Singer = {
	name: '다니엘',
	octave: 6,
};

// 두번째 멤버
const m2: Dancer = {
	name: '해린',
	skill: '풋워크',
};

printMemberInfo(m1);
printMemberInfo(m2);
console.log();

// 사용자 정의 타입 가드 생성하기
const isSinger = (member: unknown): member is Singer => {
	return Object.prototype.hasOwnProperty.call(member, 'octave');
};

// printMemberInfo() 함수를 사용자 정의 타입 가드를 이용하도록 변경하기
const printMemberInfo2 = (member: Singer | Dancer) => {
	console.log(`멤버이름 : ${member.name}`);
	if (isSinger(member)) {
		console.log(`옥타브 : ${member.octave}`);
	} else {
		console.log(`댄스 스킬 : ${member.skill}`);
	}
};

printMemberInfo2(m1);
printMemberInfo2(m2);

export {};
