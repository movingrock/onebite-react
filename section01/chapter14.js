// 스코프(범위)
// 변수나 함수에 접근하거나 호출할 수 있는 범위.
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2;
  console.log(a);
  console.log(b);
  function funcB() {}
}

funcA();
console.log(a);
// funcB(); 오류
// console.log(b); 오류
