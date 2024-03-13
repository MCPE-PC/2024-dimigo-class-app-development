// Assignment 1. Javascript

// 1. 변수 문제
// 1) grade(학년, 숫자), ban(반, 숫자), no(번호, 숫자), name(이름, 문자열) 변수를 생성하고 아래 형식으로 출력하기
// - 변수 선언 시 let 키워드 사용
// - 출력 : 3301 홍길동 입니다. (본인 학번과 이름이 출력되도록 하기)
let grade = 3, ban = 3, no = 1, name = '홍길동';
console.log(`${grade}${ban}${no.toString().padStart(2, '0')} ${name} 입니다.`);

// 2) school 상수를 선언하고 출력하기
// - 출력 : KDMHS에 다닙니다.
const school = 'KDMHS';
console.log(`${school}에 다닙니다.`);

// 2. 배열 문제
// 1) todos 배열 생성하기 (id, task, done을 키로 하는 객체 배열)
//  - id: 1, 2, 3
//  - task: "국어", "수학", "영어"
//  - done: true, true, false

const todos = [
	{
		id: 1,
		task: '국어',
		done: true,
	},
	{
		id: 2,
		task: '수학',
		done: true,
	},
	{
		id: 3,
		task: '영어',
		done: false,
	},
];

// 2) filter 함수를 이용해서 done이 true인 것만 출력하기
const arr_done = todos.filter((i) => i.done);
console.log(arr_done);

// 3) map 함수를 이용해서 done을 모두 false로 바꾼 후 todos 출력하기
todos.map((i) => {
    i.done = false;
});
console.log(todos);

// 3. 함수 문제
// 1) 매개변수가 없는 hello 함수를 화살표 함수로 작성하여 "Hello" 출력하기
const hello = () => '"Hello"';
hello();

// 2) name을 입력으로 받는 hello2 함수를 화살표 함수로 작성하여 "Hello, name" 출력하기
// - 템플릿 문자열 : `Hello, ${name}`
const hello2 = (name) => `Hello, ${name}`;
hello2("디미");

// 3) firstname과 lastname을 입력으로 받는 hello3 함수를 화살표 함수로 작성하여 'Hello, firstname lastname' 출력하기
const hello3 = (firstname, lastname) => `Hello, ${firstname} ${lastname}`;
hello3("디미", "김");