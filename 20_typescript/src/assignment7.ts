// Assignment 7. 함수

// 1. takeClass 함수 작성
// - 파라미터 : 학번(id, number), 이름(name, string), 과목(course, string)
// - 함수구현 : "학번: 3301, 이름: 민지, 과목: Python" 형식으로 출력
const takeClass = (id: number, name: string, course: string): void => {
	console.log(`학번: ${id}, 이름: ${name}, 과목: ${course}`);
};

takeClass(3301, '민지', 'Python');

// 2. 1번 함수에서 course를 optional parameter로 작성
// - course가 입력되지 않으면 None 출력
// - (힌트) Nullish 병합연산자를 사용하면 간단하게 할 수 있음
const takeClass2 = (id: number, name: string, course?: string): void => {
	console.log(`학번: ${id}, 이름: ${name}, 과목: ${course ?? 'None'}`);
};

takeClass2(3302, '하니');

// 3. 1번 함수에서 course를 default parameter로 작성
// - course가 입력되지 않으면 디폴트로 Typescript를 출력
const takeClass3 = (id: number, name: string, course = 'Typescript'): void => {
	console.log(`학번: ${id}, 이름: ${name}, 과목: ${course}`);
};

takeClass3(3303, '해린');

// 4. 함수 타입 정의 (Function Type Expression + Type Alias)
// - Course 타입 작성
// - id: number, name: string, course: string
type Course = (id: number, name: string, course: string) => void;

// 위에서 작성한 Course 타입 적용
const takeClass4: Course = (id, name, course) => {
	console.log(`학번: ${id}, 이름: ${name}, 과목: ${course}`);
};

takeClass4(3304, '다니엘', 'AI');

// 5. 함수 타입 정의 2 (Function Call Signature + Type Alias)
// - Course2 타입 작성
// - id: number, name: string, course: string
type Course2 = {
	(id: number, name: string, course: string): void;
};

// 위에서 작성한 Course2 타입 적용
const takeClass5: Course = (id, name, course) => {
	console.log(`학번: ${id}, 이름: ${name}, 과목: ${course}`);
};

takeClass5(3305, '혜인', '빅데이터분석');

export {};
