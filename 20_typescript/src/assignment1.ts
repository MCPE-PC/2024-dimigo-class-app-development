// Assignment 1. Type

// 변수 타입 정의 (Type Annotation 방식으로 작성)
// 1) 이름(name) / 문자열 / 민지
let name: string = '민지';

// 2) 나이(age) / 숫자 / 19
let age: number = 19;

// 3) 포지션(position) / 문자열 / 리더
let position: string = '리더';

// 4) 별명(nickname) / 문자열 배열 / 곰돌이, 곰아지
let nickname: string[] = ['곰돌이', '곰아지'];

// 5) 이름, 나이, 포지션, 별명을 순서대로 담고 있는 튜플 생성 (위 변수들 사용)
let minji = [name, age, position, nickname] as const;
console.log(minji);

export {};
