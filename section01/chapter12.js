function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
// 1. 함수 표현식
// 익명함수
// 호이스팅 되지 않음. 선언 전에 사용 불가

let varB = function () {
  console.log("funcB");
};

varB;
console.log(varB);

// 2. 화살표 함수
let varC = () => {
  return 1;
};

let varD = (value) => value + 1;

console.log(varC());
console.log(varD(10));
