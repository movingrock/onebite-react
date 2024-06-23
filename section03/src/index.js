// commonJS 모듈

// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 객체 구조분해
// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES Module
// import mul, { add, sub } from "./math.js"; // 확장자 있어야함.

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor"; // 경로로 표시하지 않음.

const color = randomColor();
console.log(color);
