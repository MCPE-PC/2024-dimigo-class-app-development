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

// 4. 객체 문제
const newjeans = [
	{ name: '하니', age: 19 },
	{ name: '해린', age: 17 },
	{ name: '민지', age: 19 },
	{ name: '다니엘', age: 18 },
];

// 1) push 함수를 사용하여 혜인, 15살 추가하기
newjeans.push({ name: "혜인", age: 15 });
console.log(newjeans);

// 2) "민지" 출력하기
console.log(newjeans[2].name);

// 3) map 함수를 사용하여 객체에 song을 키로 "Ditto" 추가하기
newjeans.map((i) => {
    i.song = "Ditto";
});
console.log(newjeans);

// 4) filter 함수를 사용하여 age가 19세 이상인 객체 추출하기
const result = newjeans.filter((i) => i.age >= 19);
console.log(result);

// 5. 클래스 문제
// 1) 생성자로 id(번호)와 score(점수 배열)를 받는 Student 클래스 생성하기
// 2) score 배열의 점수를 모두 더하여 리턴하는 sum() 메소드 작성하기
// 3) score 배열의 점수 평균을 계산하여 리턴하는 avg() 메소드 작성하기 (sum() 메소드 이용)
// 4) '1번 학생 총점: 60, 평균: 20' 형식으로 출력하는 print() 메소드 작성하기
class Student {
    #id

    #sum

    #count

    constructor(id, score) {
        this.#id = id;
        this.#sum = score.reduce((a, b) => a + b);
        this.#count = score.length;
    }

    sum() {
        return this.#sum;
    }

    avg() {
        return this.sum() / this.#count;
    }

    print() {
        console.log(`${this.#id}번 학생 총점: ${this.sum()}, 평균: ${this.avg()}`);
    }
}

// Student 객체 생성하기
let s1 = new Student(1, [10, 20, 30]);
let s2 = new Student(2, [50, 60, 70]);
let s3 = new Student(3, [80, 90, 100]);

s1.print();
s2.print();
s3.print();

// 9. module 문제
export { newjeans, Student };
