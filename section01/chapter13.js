// 1. callback 함수
// 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미

function main(value) {
  console.log(1);
  console.log(value);
  console.log(2);
}

// sub가 콜백함수
function sub() {
  console.log("sub");
}

main(sub);

// 2. 활용
// 구조가 흡사한 중복함수 제거
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}
repeat(5);

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}
repeatDouble(5);

// callback으로 중복제거
const repeatCallback = (count, callback) => {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
};

repeatCallback(5, (a) => {
  console.log(a);
});

repeatCallback(5, (idx) => {
  console.log(idx * 2);
});

repeatCallback(5, (idx) => {
  console.log(idx * 3);
});
