// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
// 동기적으로 작동하는 함수를 비동기 작업을 해 프로미스를 반환하는 함수로 바꿔줌.
const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
};

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// async가 붙은 함수에서만 사용가능

// getData가 종료되면 data에 결과 객체값을 담음.
const printData = async () => {
  const data = await getData();
  console.log(data);
};

printData();
