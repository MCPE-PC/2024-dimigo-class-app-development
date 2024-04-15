// Assignment 5. Type Assertion

// Singer와 Dancer 타입 정의하기
type Singer = {
	name: string;
	octave: number;
};

type Dancer = {
	name: string;
	skill: string;
};

// any 타입의 member 입력받아 Singer 타입으로 Type Assertion하기
const printMemberInfo = (member: any) => {
	const singer = member as Singer;
	console.log(`멤버이름 : ${singer.name}`);
	console.log(`옥타브 : ${singer.octave}`);
};

// any 타입의 member 입력받아 Dancer 타입으로 Type Assertion하기
const printMemberInfo2 = (member: any) => {
	const dancer = member as Dancer;
	console.log(`멤버이름 : ${dancer.name}`);
	console.log(`댄스 스킬 : ${dancer.skill}`);
};

// 첫번째 멤버
const m1: any = {
	name: '다니엘',
	octave: 6,
};

// 두번째 멤버
const m2: any = {
	name: '해린',
	skill: '풋워크',
};

printMemberInfo(m1);
printMemberInfo2(m2);

export {};
