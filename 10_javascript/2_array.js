// 2. 배열

// 배열 선언
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr[2]) // 3

let arr2 = [1, 2, "apple"];
arr2.push("banana");
console.log(arr2);

// 반복문 사용하기
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i in arr) {
    console.log(arr[i]);
}

for (let i of arr) {
    console.log(arr[i]);
}

arr.forEach(function(value, index) {
    console.log(index, value);
});

let result = arr.map((num) => num ** 2);
console.log(result);

let result2 = arr.filter((num) => num > 2);
console.log(result2);

let arr3 = [1, 2, 3];
const [a, b, c] = arr3;

const arr4 = [...arr3, 4];

let [first, ...rest] = arr3;
