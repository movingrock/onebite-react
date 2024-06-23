import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수
    // useEffect가 반환하는 콜백함수
    // useEffect가 끝날때 실행됨.
    //  화면에서 사라질때 해당 컴포넌트가 쓰고 있던 메모리를 해제 할 수 있음.
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>Even</div>;
};

export default Even;
