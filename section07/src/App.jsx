import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // count가 변할때 실행됨.
  // 배열에 의존해 실행되기에
  // 의존성 배열(dependency array, deps)라고 부름.
  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);

  // setCount 함수는 비동기로 동작한다.
  // 1. 마운트 : 탄생
  // 빈배열을 넘겨주면 됨.
  // 마운트 될때 어떤 데이터를 불러 올 수 있음.
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // 업데이트 될때 현재 업데이트된 스테이트의 값들이 정상적인 값인지 검사할 수 있음.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음
  const onClickButton = (value) => {
    setCount(count + value);
    // count 값은 이전값으로 출력된다.
    // console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
