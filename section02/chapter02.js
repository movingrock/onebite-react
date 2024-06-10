// 단락 평가 (Short-circuit Evaluation)
// AND 연산에서 첫번째 피연산자가 false이면 두번째 연산은 계산하지 않아도 false임.
// Or 연산에서 첫번째 피연산자가 true이면 두번째 연산은 계산하지 않아도 true임.

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

// returnTrue는 실행되지 않음. 단락평가가 됨.
console.log(returnFalse() && returnTrue());
console.log("");

// 두번째 피연산자도 계산됨.
console.log(returnTrue() && returnFalse());

console.log("");
console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례

// person.name값이 없다면
function printName(person) {
  const name = person && person.name;
  console.log(name);
  console.log(name || "person의 값이 없음");
}

printName({ age: 25 });
printName({ name: "이동석" });

// T || T 는 앞에 값이 출력?
// T && T 는 뒤에 값이 출력?

const functrue = (index) => {
  console.log(index);
  return true;
};

console.log(functrue(1) || functrue(2));
