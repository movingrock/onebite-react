// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else if (num >= 5) {
  console.log("5이상입니다.");
} else {
  console.log("");
}

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
  case "cat":
    console.log("고양이입니다.");
    break;
  case "dog":
    console.log("개입니다.");
    break;
  case "bear":
    console.log("곰입니다.");
    break;
  default:
    console.log("해당되지않습니다.");
}
