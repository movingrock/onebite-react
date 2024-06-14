// Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 3가지 상태
// 대기(Pending)    아직 작업이 완료되지 않은 상태
// 성공(Fulfilled)  비동기 작업이 성공적으로 마무리 된 상태
// 실패(Rejected)   비동기 작업이 실패한 상태
// 대기 -> 성공 (해결, resolve)
// 대기 -> 실패 (거부, reject)
// 비동기 작업을 처리하고 그 결과를 나중에 사용할 수 있는 객체입니다.

const add10 = (num) => {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
};

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor

//   setTimeout(() => {
//     const num = null;
//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다");
//     }
//   }, 2000);
// });

// then 메서드
// -> 그 후에
// 비동기 작업의 결과값을 언제든지 부를 수 있음.
// promise 체이닝
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 콜백지옥
// const p = add10(0);

// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });

// 프로미스 반환

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
