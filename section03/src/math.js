// math 모듈

// commonJs 모듈

// const add = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//   return a - b;
// };

// 두 함수를 내보냄 (Common Js 모듈 시스템에 의해서)
// module.exports = {
//   add,
//   sub,
// };

// ES Module
// export를 함수 앞에 쓰거나 객체를 묶어서 사용가능

export const add = (a, b) => {
  return a + b;
};

export const sub = (a, b) => {
  return a - b;
};

// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
